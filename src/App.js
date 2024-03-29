import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/Home';
import New from './pages/New';
import Diary from './pages/Diary';
import Edit from './pages/Edit';

// components
import MyButton from './components/MyButton';

function App() {
  return (
    <BrowserRouter> 
      <div className="App">
        <h2>App.js</h2>
        
        <MyButton text={"버튼"} onClick={()=>alert("버튼 클릭")} 
        type={"positive"}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/new" element={<New/>}/>
          <Route path="/edit" element={<Edit/>}/>
          <Route path="/diary/:id" element={<Diary/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;