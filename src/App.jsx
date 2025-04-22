import { useEffect, useState } from 'react'
import * as webllm from "@mlc-ai/web-llm";
import './app.scss'



function App() {
  const [count, setCount] = useState(0)
  const [input, setInput] = useState("")

  const [messages, setMessages] = useState([{
    role: "system",
    content: "Hello, I am a large language model. How can I assist you today?"
  }, {
    role: "user",
    content: "Hello, what is your name?"
  }, {
    role: "model",
    content: "I am a large language model created by OpenAI. I don't have a personal name."
  }, {
    role: "user",
    content: "What can you do?"
  }, {
    role: "model",
    content: "I can assist you with a variety of tasks, including answering questions, providing information, and generating text." 
  }
  ])

  const [engine, setEngine] = useState(null)

  useEffect(() => {
    const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";

    webllm.CreateMLCEngine(
      selectedModel,
      {
      initProgressCallback: (initProgress) => {
        console.log("initProgress", initProgress);
      }
    }).then(engine => {
      setEngine(engine);
    })
  },[])

  async function sendMessageToLlm() {

    const tempMessages = [...messages]
    tempMessages.push({
      role: "user",
      content: input
    })
    
    setMessages(tempMessages)
    setInput("")

    const reply = await engine.chat.completions.create({
      messages,
    });

    console.log("reply", reply)
  }

  return (
   <main>
    <section>
      <div className="conversation-area">

        <div className="messages">
        {
          messages.map((message, index) => {
            return (
              <div className={`message ${message.role}`} key={index}>
                {message.content}
              </div>
            )
          })
        }
        </div>


        <div className="input-area">
          <input
          onChange={(e) => setInput(e.target.value)}
          type="text" placeholder='Message LLM' />
          <button
          onClick={() => {
            sendMessageToLlm()
          }}
          >Send</button>
        </div>
      </div>
    </section>
   </main>
  )
}

export default App