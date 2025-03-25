import logo from './logo.svg';
import './App.css';
import Navbar from './NavigationBar';
import Content from './content/content.jsx'
import TaskForm from './Form-task/formSheet.jsx';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">

         {/* <Content/> */}
 <Router>
 <Navbar/>
  {/* <TaskForm/> */}

   <Routes>
     <Route exact path="/TaskForm" element={<TaskForm />} />
     <Route exact path="/" element={<Content />} />
   </Routes>
   
 </Router>

    </div>
  );
}

export default App;
