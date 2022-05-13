import React,{useState} from 'react'

const SearchBar = (props) => {
   const {busca, setbusca} = useState('mr')
   const {onSerch} = props
   
   const LidaOnchange = (e) => {
       setbusca(e.target.value)
      if(e.target.value.lenght === 0 ){
          onSerch(undefined)
      }
   }

   const LidaComBusca = () => {
       onSerch(busca)
   }
   
  

   return(
        <div className=''>
          <div>
              <input placeholder='buscar usuario' onChange={LidaOnchange} ></input>
          </div>
          <div>
              <button onClick={LidaComBusca}>Buscar</button>
          </div>
        </div>
    )
}

export default SearchBar