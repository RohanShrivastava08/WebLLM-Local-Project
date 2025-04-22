import { useState } from 'react'
import './app.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <main>
      <section>
        <div className="conversation-area">

          <div className="input-area">
            <input type="text" placeholder='Message LLM' />
            <button>Send</button>
          </div>
        </div>
      </section>
    </main>
    </>
  )
}

export default App
