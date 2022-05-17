import React, {useState, useEffect} from 'react'
import { GetSearchApiData,SearchUser ,LimitSearch } from './ApiRandom/api'
import './App.css'
import NavBar from './Componentes/Navbar'
import SearchBar from './Componentes/SearchBar'

const FavoritosUser = 'users'

function App() {
 const ItensPorPage = 50

 const [page, setPage] = useState(0)
 const [totalPage, setTotalPage] = useState(0)
 const [loading, setloading] = useState(false)
 const [found, setfound] = useState(false)
 const [pessoas, setpessoa] = useState([])

 //it working with context
 const [interesting, setinteresting] = useState([])

  //the functions making all connection about api
 const fectchinUserApi =  async () => {
    try {  
      setloading(true)
      setfound(false)
      //create const to manage all dates!!
      //this code passes it promisses and latter created promise all to manage all code
      const data = await LimitSearch( ItensPorPage, ItensPorPage*page)
      const promises = data.results.map(async(results) =>{
         return await    SearchUser(results.url)
      }) 
      const getResults = await Promise.all(promises)
      setpessoa(getResults)
      setloading(false)
      setTotalPage(Math.ceil(data.info / ItensPorPage))   
    } catch (error) {
      console.log('error in fetching!!!', error)
    }
 }

 const loadingUserFav = () => {
   const savePeople = JSON.stringify(window.localStorage.getItem(FavoritosUser))
   setinteresting(savePeople)
 }
 useEffect(() =>{
 //this care of loading people interesting!!!
    loadingUserFav()
 },[]) 


 useEffect(() => {
   fectchinUserApi()
 },[page])
  

  
  
  return (
    <div className="App">
     <NavBar/>
     <SearchBar/>
    </div>
  );
}

export default App;
