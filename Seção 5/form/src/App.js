import './App.css';
import MyForm from './components/MyForm';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForm 
      user={{
      name: "Arthur", 
      email: "arthur@gmail.com", 
      bio: "Sou um advoado", 
      role: "admin"
      }}
      />
    </div>
  );
}

export default App;
