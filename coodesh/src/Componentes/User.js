import React,{useContext} from 'react'
import ContextManager from '../Context/context' 

const User = (props) => {
    const {allusers, updatingpeople} = useContext(ContextManager)
    const results = props
    const letter = "📃"
    
    return (<div className='container-xl d-flex'>
            
            <div className='p-2 p-l-4'>
                <img id='image-size' className='me-2'  src={results.picture.large} alt={results.name} />
            </div>

        <div className='container d-flex flex-row p-4 justify-content-between'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                {results.gender}
                {results.id}
                {results.name}
                {results.location}
                {results.email}
            </div>
          

            <div className='d-flex flex-row align-items-center justify-content-between'>
                <div className='d-flex'>
                {results.results.map((result, index) => {
                 return <div key={index}> {result.result.name} </div>
                })}
                </div>

            </div>
            
        </div>  
      
    
    
    
    
    
    
    
      <button> {letter} </button>
    
    
    
    
    </div>
)}


export default User