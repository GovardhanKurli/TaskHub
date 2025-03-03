import logo from './logo.svg';
import './App.css';
import Navbar from './NavigationBar';
import Content from './content/content.jsx'
import TaskForm from './Form-task/formSheet.jsx';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {/* <Navbar/>
      
      <Content/> */}
    <  TaskForm/>

      {/* <h3>this is demo project</h3> */}
    </div>
  );
}

export default App;
