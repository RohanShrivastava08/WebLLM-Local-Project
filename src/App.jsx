import { useEffect, useState } from 'react';
import * as webllm from '@mlc-ai/web-llm';
import './app.scss';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: "You're a helpful assistant that can help me with my tasks.",
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
      .then((engineInstance) => {
        setEngine(engineInstance);
      })
      .catch((error) => {
        console.error('Error initializing the engine:', error);
      });
  }, []);

  async function sendMessageToLlm() {
    if (!engine) {
      console.error('Engine not initialized');
      return;
    }

    setIsLoading(true);

    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const reply = await engine.chat.completions.create({ messages: newMessages });

      if (reply?.choices?.[0]) {
        const text = reply.choices[0].message.content;
        setMessages([...newMessages, { role: 'assistant', content: text }]);
      }
    } catch (error) {
      console.error('Error sending message:', error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <main className="chat-app">
      <header className="chat-header">
        <h1>AI Chat Assistant</h1>
      </header>

      <section className="chat-container">
        <div className="messages-area">
          {messages
            .filter((message) => message.role !== 'system')
            .map((message, index) => (
              <div
                className={`message ${message.role}`}
                key={index}
                style={{
                  animation: 'fadeIn 0.5s ease-in-out',
                }}
              >
                {message.content}
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
              placeholder="Type your message..."
              className="input-field"
            />
            <button onClick={sendMessageToLlm} disabled={isLoading} className="send-btn">
              {isLoading ? <div className="spinner"></div> : 'Send'}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
