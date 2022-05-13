import React, {useState} from 'react'
import './App.css'
import NavBar from './Componentes/Navbar'
import SearchBar from './Componentes/SearchBar'


function App() {
 const [page, setPage] = useState(0)
 const [totalPage, setTotalPage] = useState(0)

 // const ItensPorPage = 50
  
  
  
  
  return (
    <div className="App">
     <NavBar/>
     <SearchBar/>
    </div>
  );
}

export default App;
