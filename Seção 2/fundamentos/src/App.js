// components
import FristComponent from './components/FristComponent';
import TemplateExpressions from './components/TemplateExpressions';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Sus from './components/Sus';

// strles / css
import './App.css';




function App() {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>
      <FristComponent />
      <TemplateExpressions/>
      <MyComponent/>
      <Events/>
      <Sus/>
    </div>
  );
}

export default App;
