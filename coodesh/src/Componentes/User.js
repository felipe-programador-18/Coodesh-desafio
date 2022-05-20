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
  
    
    
    return (<div className='container-xl d-flex'>
            
            <div className='p-2 p-l-4'>
                <img id='image-size' className='me-2'  alt={results.results.name} src={results.picture} />
            </div>

        <div className='container d-flex flex-row p-4 justify-content-between'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
               <h3> {results.name} </h3>
                <div className='container'> #{results.id} </div>
            </div>
          

            <div className='d-flex flex-row align-items-center justify-content-between'>
                <div className='d-flex'>
                {results.results.map((name, index) => 
                {return <div key={index} className='container'> {name.name.results} </div>
                })}
                </div>

            </div>
            
        </div>  
      <button onClick={onHandlingLetter} > {letter} </button>
    </div>
)}


export default User