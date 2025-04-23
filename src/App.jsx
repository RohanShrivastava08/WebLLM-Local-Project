import React from 'react';
import { useEffect, useState } from 'react';
import * as webllm from '@mlc-ai/web-llm';
import './app.scss';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: "You're a helpful assistant that replies with structured answers using markdown-style formatting, bullet points, and emojis.",
    },
  ]);
  const [engine, setEngine] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const selectedModel = 'Llama-3.1-8B-Instruct-q4f32_1-MLC';
    webllm.CreateMLCEngine(selectedModel, {
      initProgressCallback: (initProgress) => {
        console.log('initProgress', initProgress);
      },
    })
      .then((engineInstance) => setEngine(engineInstance))
      .catch((err) => console.error('Engine initialization error:', err));
  }, []);

  const formatMessage = (text) => {
    const lines = text.split('\n');

    return lines.map((line, index) => {
      if (line.startsWith('- ')) {
        return (
          <li key={index}>
            {line.slice(2)}
          </li>
        );
      } else if (line.startsWith('### ')) {
        return <h3 key={index}>{line.slice(4)}</h3>;
      } else if (line.startsWith('## ')) {
        return <h2 key={index}>{line.slice(3)}</h2>;
      } else if (line.startsWith('# ')) {
        return <h1 key={index}>{line.slice(2)}</h1>;
      } else if (line.trim() === '') {
        return <br key={index} />;
      } else {
        return <p key={index}>{line}</p>;
      }
    });
  };

  const sendMessage = async () => {
    if (!engine || !input.trim()) return;
    setIsLoading(true);
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const reply = await engine.chat.completions.create({ messages: newMessages });
      const responseText = reply.choices[0].message.content;
      setMessages([...newMessages, { role: 'assistant', content: responseText }]);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="chat-app">
      <header className="chat-header">
        <h1>🧠 Web LLM</h1>
      </header>

      <section className="chat-container">
        <div className="messages-area">
          {messages
            .filter((msg) => msg.role !== 'system')
            .map((msg, idx) => (
              <div key={idx} className={`message ${msg.role}`}>
                {msg.role === 'assistant'
                  ? formatMessage(msg.content)
                  : <p>{msg.content}</p>}
              </div>
            ))}
          {isLoading && (
            <div className="message assistant loading">
              <div className="loading-indicator">...</div>
            </div>
          )}
        </div>

        <div className="input-area">
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything..."
              onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            />
            <button onClick={sendMessage} disabled={isLoading}>
              {isLoading ? <div className="spinner"></div> : 'Send'}
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>🚀 Powered by WebLLM | Built with ❤️ by Rohan</p>
      </footer>
    </main>
  );
}

export default App;
