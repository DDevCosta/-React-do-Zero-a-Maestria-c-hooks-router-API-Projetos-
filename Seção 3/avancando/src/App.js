import './App.css';

import City from "./assets/city.jpg"
import ManageData from "./components/ManageData"
import ListRender from "./components/ListRender"
import ConditionalRender from "./components/ConditionalRender"
import ShowUserName from "./components/ShowUserName"
import CarDetails from "./components/CarDetails"
import Fragment from "./components/Fragment"

function App() {
  const name = "Lara"

  const cars = [
    {id: 1, brand: "ferrari", color: "Amarela", newCar: true, km: 0},
    {id: 1, brand: "KIA", color: "Branco", newCar: false, km: 34343},
    {id: 1, brand: "Volkswagen", color: "Prata", newCar: true, km: 5850}
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
        brand={car.brand} 
        color={car.brand} 
        km={car.km} 
        newCar={car.newCar}
        />
      ))}
      <Fragment propFragment="teste"/>
    </div>
    
  );
}

export default App;
