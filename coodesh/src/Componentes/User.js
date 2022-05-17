import React,{useContext} from 'react'
import ContextManager from '../Context/context' 

const User = (props) => {
    const {allusers, updatingpeople} = useContext(ContextManager)
    const {results} = props;
    
    const onHandlingLetter = () =>{
        // make some test inside here
        updatingpeople(results.name)
    }
    
    
    const letter = allusers.includes(results.name) ?  "📜" : "📃"
    
    return (<div className='container-xl d-flex'>
            
            <div className='p-2 p-l-4'>
                <img id='image-size' className='me-2'  src={results.picture} alt={results.name} />
            </div>

        <div className='container d-flex flex-row p-4 justify-content-between'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                {results.gender}
                
            </div>
          

            <div className='d-flex flex-row align-items-center justify-content-between'>
                <div className='d-flex'>
                {results.name.map((names, index) => 
                {return <div key={index} className='container'> {names.infos.name} </div>
                })}
                </div>

            </div>
            
        </div>  
      <button onClick={onHandlingLetter} > {letter} </button>
    </div>
)}


export default User