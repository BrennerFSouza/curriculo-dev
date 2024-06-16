/* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to bbb.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

  function ExibeTextoPersonalizado(props){
    return <h1>Olá, {props.name}, Idade: {props.idade}</h1>
  }

  const Home = () => <ExibeTextoPersonalizado name="Brenner"  idade="24" />;

export default Home
