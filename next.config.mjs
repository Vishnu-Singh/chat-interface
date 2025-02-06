const nextConfig = {
    reactStrictMode: true,
    transpilePackages: [
      '@mui/material',
      '@mui/icons-material',
      '@emotion/react',
      '@emotion/styled',
      'react-syntax-highlighter'
    ],
    compiler: {
      emotion: true
    }
  };
  
  export default nextConfig;