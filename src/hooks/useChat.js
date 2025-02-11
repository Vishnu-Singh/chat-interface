import { useState, useRef, useEffect } from 'react';

export const useChat = () => {
  const [messages, setMessages] = useState(() => {
    // Load messages from localStorage
    const savedMessages = localStorage.getItem('chatHistory');
    return savedMessages ? JSON.parse(savedMessages) : [];
  });
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef(null);

  // Save messages to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('chatHistory', JSON.stringify(messages));
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { content: input, role: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      setMessages((prev) => [...prev, { content: '', role: 'assistant' }]);

      const response = await fetch('http://localhost:11434/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'deepseek-r1',
          prompt: input,
          stream: true,
        }),
      });

      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let buffer = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const chunks = buffer.split('\n');
        buffer = chunks.pop() || '';

        for (const chunk of chunks) {
          if (chunk.trim()) {
            try {
              const parsed = JSON.parse(chunk);
              setMessages((prev) => {
                const lastMessage = prev[prev.length - 1];
                const updatedContent = lastMessage.content + parsed.response;
                return [
                  ...prev.slice(0, -1),
                  { ...lastMessage, content: updatedContent },
                ];
              });
            } catch (err) {
              console.error('Error parsing chunk:', err);
            }
          }
        }
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        { content: 'Error communicating with the AI', role: 'assistant', error: true },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return {
    messages,
    input,
    setInput,
    loading,
    handleSend,
    messagesEndRef,
  };
};