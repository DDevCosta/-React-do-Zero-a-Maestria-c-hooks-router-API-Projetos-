import { useState } from 'react';

import './App.css';

import City from "./assets/city.jpg"
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName"
import CarDetails from "./components/CarDetails"
import Fragment from "./components/Fragment"
import Container from "./components/Container"
import ExecuteFunction from "./components/ExecuteFunction"
import Message from "./components/Message"
import ChageMessageState from "./components/ChageMessageState"
import UserDetails from "./components/UserDetails"

function App() {
  const name = "Lara"

  const cars = [
    {id: 1, brand: "ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 1, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 1, brand: "Volkswagen", color: "Prata", newCar: true, km: 5850}
  ]

  function showMessage(){
    console.log("evento do componente pai")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const persons = [
    { id: 1, name: 'Douglas', age: 15, job: 'Programador' },
    { id: 2, name: 'Arthur', age: 14, job: 'Vagabundo' },
    { id: 3, name: 'Neymar', age: 15, job: 'Jogador' }
  ]

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      {/* Imagem em public */}
      <div>
        <img src="/img1.jpg" alt="Paisagem" />  
      </div>
            {/* Imagem em asset */}
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />
      <ListRender />
      <ConditionalRender />
      <ShowUserName name={name} />
      <CarDetails brand="Ford" km={100000} color="Azul" newCAr={false} />
      <CarDetails brand="VW" color="vermelha" km={0} newCar={true} />
      <CarDetails brand="Fiat" color="Prata" km={4500} newCar={false} />
      {cars.map((car) => (
        <CarDetails
          key={car.id} 
          brand={car.brand} 
          color={car.brand} 
          km={car.km} 
          newCar={car.newCar}
        />
      ))}
      <Fragment propFragment="teste"/>
      <Container myValue="testing">
        <p>E este é o conteúdo</p>
      </Container>
      <Container myValue="testing 2">
        <h5>Testando o container</h5>
      </Container>
      <ExecuteFunction myFunction={showMessage} />
      <Message msg={message} />
      <ChageMessageState handleMessage={handleMessage}/>
      
      {persons.map(person => (
        <UserDetails 
          key={person.id}
          name={person.name}
          age={person.age}
          job={person.job}
        />
      ))}

    
    
    </div>
    
  );
}

export default App;
