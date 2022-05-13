import React, {useState} from 'react'
import './App.css'
import NavBar from './Componentes/Navbar'

function App() {
 const [page, setPage] = useState(0)
 const [totalPage, setTotalPage] = useState(0)

 // const ItensPorPage = 50
  
  
  
  
  return (
    <div className="App">
     <NavBar/>
    </div>
  );
}

export default App;
