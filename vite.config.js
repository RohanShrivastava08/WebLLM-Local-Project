export default {
  optimizeDeps: {
    exclude: ['@mlc-ai/web-llm']
  },
  build: {
    commonjsOptions: {
      include: [/web-llm/, /node_modules/]
    }
  }
};
