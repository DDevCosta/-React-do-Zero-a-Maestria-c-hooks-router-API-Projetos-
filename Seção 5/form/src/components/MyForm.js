import './MyForm.css'

const MyForm = () => {
  return (
    <div>
        <form>
            <div>
                <label htmlFor="name">Nome:</label>
                <input type="text" name="nome" placeholder="Digite seu nome"/>
            </div>
            <label>
                <span>E-mail</span>
                <input type="email" name="email" placeholder="Digite seu email"/>
            </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForm