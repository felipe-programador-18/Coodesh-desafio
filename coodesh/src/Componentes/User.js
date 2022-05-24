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
         <div className='container-xl d-flex'>
            <div className='p-2 p-l-4'>
                <img id='image-size' className='me-2' src={results.picture.thumbnail}  alt={results.name.first}  />
            </div>
           
        <div className='container d-flex flex-row p-4 justify-content-between'>
           
            <div className='d-flex flex-row justify-content-between align-items-center'>
               <h3> {results.name.first} </h3>
              <div className='container'> #{results.id.value} </div>  
            </div>
             

            <div className='d-flex flex-row align-items-center justify-content-between'>
                <div className='d-flex'>
                {`${results.name.title}. ${results.name.first} ${results.name.last}  `}
                </div>

            </div>
              
        </div>  
      <button onClick={onHandlingLetter} > {letter} </button>
    </div>

 )}


export default User