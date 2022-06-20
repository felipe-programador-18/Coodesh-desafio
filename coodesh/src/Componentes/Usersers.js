//import React,{useContext} from 'react'
import ContextManager from '../Context/context'
import React, {useContext} from 'react'
import Pagination from './Pagination'
import Convert from './Converdata'
const Usersers = (props) =>{
    const {allusers, updatingpeople} = useContext(ContextManager)
    const {results} =props;
   // const letter = allusers.includes(results.name) ?  "📜" : "📃"
    
    const onHandlingLetter = () =>{
        // make some test inside here
        updatingpeople(results.name)
    }
    
    const {pessoas, page, loading, setPage, totalPage } = props ;
    const onLeftHandling = () =>{
        if(page >0){
            setPage(page-1)
        }
    }  
    const onRightHandling = () => {
        if(page+1 !== totalPage){
            setPage(page+1)
        }
    }
    return(      
      <div>
                        
         <div className='people-header'> 
           <Pagination 
           page={page+1}
           totalPage={totalPage}
           onLeftClick ={onLeftHandling}
           onRightClick = {onRightHandling} 
           />
            <div>
               
           {loading ?  <div>Carregando .....</div> :
            
            (<> 
               <table className="table container-sm">
               <thead>
              <tr>
              <th scope='col'>Pessoa</th>
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
               </table>
             { pessoas && pessoas.map((results) => {
               return (   
                <div className='container'>
                 <table className="table">
                 <tbody> 
                 <tr className='table-light'  key={results}>
                 <th scope="row"> <img id='image-size'src={results.picture.thumbnail} alt='pictureusers' />
                 </th>
                 <td>{ `${results.name.first} ${results.name.last}` } </td>
                 <td>{results.email} </td>
                 <td>{results.gender}</td>
                 <td><Convert timezone={results.dob.date} /> </td>
                 <td>{results.cell}</td>
                 <td> {results.location.city} </td>
                 <td>{results.nat} </td>
                 <td> {results.id.name} </td>




                 <td>Compartilhar</td>
                           
                </tr>  
               </tbody>
               </table>
              </div>
               )
              })
             
             }
            
            </>
            )
            
            }


            </div>
           </div>
        <div>
        </div>
 
        <button className='style-button' onClick={onHandlingLetter} >  </button>
    </div>)
  





}


export default Usersers