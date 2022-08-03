import React, {useState, useEffect} from 'react'
import {SearchUser ,LimitSearch } from './ApiRandom/api'
import './App.css'
import NavBar from './Componentes/Navbar'
import SearchBar from './Componentes/SearchBar'
import User from './Componentes/User'
import { ContextProvider } from './Context/context'
const FavoritosUser ='users'

function App() {
 const ItensPorPage = 25

 const [page, setPage] = useState(0)
 const [ totalPage,setTotalPage] = useState(0)
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
    const data = await LimitSearch(ItensPorPage, ItensPorPage*page)
    setpessoa(data.results)
    console.log(data)
    setloading(false)
    setTotalPage(Math.ceil(data.results / ItensPorPage))
     
    } catch (error) {
    console.log('error in fetching!!!', error)
  }
 }

 const loadingUserFav = () => {
   const savePeople = JSON.parse(window.localStorage.getItem(FavoritosUser)) || []
   setinteresting(savePeople)
 }

 useEffect(() => {
   fectchinUserApi()
 },[page])

 useEffect(() =>{
 //this care of loading people interesting!!!
    loadingUserFav()
 },[]) 

 const updatePeopleInteresting = (name) => {
   const updatePeople = [...interesting]
   const peopleIndex = interesting.indexOf(name)
   if(peopleIndex >= 0){
      updatePeople.splice(peopleIndex,1)
   }else{
      updatePeople.push(name)
   }
   window.localStorage.setItem(FavoritosUser, JSON.stringify(updatePeople) )
   setinteresting(updatePeople)
 }

 //create part of handling loading page
  
 const onHandLoadUser = async (results) => {
  if(!results){
    return fectchinUserApi()
  }
  setloading(true)
  setfound(false)
  const result = await SearchUser(results)
  if(!result){
    setfound(true)
  }else{
    setpessoa([result])
    setPage(0)
    setTotalPage(0)
  }
  setloading(false)
 }

  
  
  return ( 
  <ContextProvider value={{allusers: interesting, 
     updatingpeople: updatePeopleInteresting
     }} >
    <div className="App">
     <NavBar/>
     <SearchBar onSearch= {onHandLoadUser} />
    
      {found ? (<div className='container  bg-dark text-center'>Nenhum usuario encontrado!!</div>) :
      <User 
        pessoas={pessoas}
        loading={loading}
        page={page}
        setPage = {setPage}
       />
      }

    
    </div>
 </ContextProvider>);
}

export default App;
