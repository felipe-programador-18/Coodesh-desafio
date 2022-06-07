import React,{useContext} from 'react'
import ContextManager from '../Context/context' 

const User = (props) => {
    const {allusers, updatingpeople} = useContext(ContextManager)
    const {results} = props;
    const letter = allusers.includes(results.name) ?  "📜" : "📃"
    
    const onHandlingLetter = () =>{
        // make some test inside here
        updatingpeople(results.name)
    }
  
   //some issues about code is json is object, because is undefined 
    
    
    return (   
    <div className='container'>

     <table class="table">
  <thead>
    <tr>
      <th scope='col'>People</th>
      <th scope="col">Nome</th>
      <th scope="col">Email</th>
      <th scope="col">Genero</th>
      <th scope='col'>Dt Nasc</th>
      <th scope='col'>Tel</th>
      <th scope='col'>Endereço</th>
      <th scope='col'>Nacionalidade</th>
      <th scope='col'>ID</th>


       
    </tr>
  </thead>
  <tbody> 
    <tr className='table-dark'>
      <th scope="row"> <img id='image-size'src={results.picture.thumbnail} /></th>
      <td>{ `${results.name.first} ${results.name.last}` }  </td>
      <td>{results.email} </td>
      <td>{results.gender}</td>
      <td>{results.dob.date}</td>
      <td>{results.cell}</td>
      <td> {results.location.city} </td>
      <td>{results.nat} </td>
      <td> {results.id.name} </td>
    </tr>
  </tbody>
</table>
                 








            
           { /* <div className='image-container-people'>
                <img id='image-size'src={results.picture.thumbnail }  alt={results.name.first}  />
            </div>
      */ }
        
       { /*  <div className='card-people'>
           
            <div className=''>
               <h3> {results.name.first} </h3>
              <div className=''> #{results.id.value} </div>  
              <div> email:{results.email}</div><hr/>
              <div> sexo:{results.gender}</div>
            </div>
             

            <div className=''>
                <div className=''>
                    
                  {<div className='' > {`${results.name.first} ${results.name.last}` }</div>  }
                 
                </div>

            </div>
              
    </div> */ } 
      <button className='style-button' onClick={onHandlingLetter} > {letter} </button>
     
       </div>

 )}


export default User