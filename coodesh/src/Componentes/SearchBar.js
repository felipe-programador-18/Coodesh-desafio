import React,{useState} from 'react'
import {GrSearchAdvanced} from 'react-icons/gr'

const SearchBar = (props) => {
   const [busca, setbusca] = useState("Mr")
   const {onSearch} = props

   const LidaOnchange = (e) => {
       setbusca(e.target.value)
      if(e.target.value === 0 ){
          onSearch(undefined)
      }
   }

   const LidaComBusca = () => {
       onSearch(busca)
   }
   
  

   return(
        <div className='search-container justify-content-center'>
          <div className='search'>
        <input placeholder='search'onChange={LidaOnchange}>
        
        </input>
        <GrSearchAdvanced/>
          </div>
          <div className='search-btn'>
              <button onClick={LidaComBusca}>Buscar</button>
          </div>
        </div>
    )
}

export default SearchBar