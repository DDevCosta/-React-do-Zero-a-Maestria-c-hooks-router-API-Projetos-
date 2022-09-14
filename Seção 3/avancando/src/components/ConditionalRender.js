import { useState } from "react"

const ConditionalRender = () => {
    const [x] = useState(false)

    const [name, setName] = useState("John")

  return (
    <div>
        <h1>isso será exibido?</h1>
        {x && <p>Se x for true, sim!</p>}
        {!x && <p>Agora x é falso</p>}
        <h1>If ternário</h1>
        {name === "Alex" ? (
            <div>
                <p>O nome é Alex</p>
            </div>
        ) : (
            <div>
                <p>Nome não encontrado seu otário</p>
            </div>
        )}
        <button onClick={() => setName("John")}>Clica aqui rsrs</button>
    </div>
  )
}

export default ConditionalRender