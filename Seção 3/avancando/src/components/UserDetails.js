const UserDetails = ({ name, age, job }) => {
  return (
    <div>
        <h2>Detalhes do Motorista</h2>
        <ul>
            <li>Nome: {name}</li>
            <li>Idade: {age}</li>
            <li>Profissão: {job}</li>
        </ul>
        {age >= 18 && <p>Pronto para dirigir</p>}
        {!age <= 18 && <p>Ainda não está pronto para dirigir</p>}
    </div>
  )
}

export default UserDetails