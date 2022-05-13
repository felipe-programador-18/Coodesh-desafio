import React,{useContext} from 'react'
import ContextManager from '../Context/context' 

const User = (props) => {
   // const {allusers} = useContext(ContextManager)
    const results = props
    
    return (<div className='container-xl d-flex'>

        <div className='container d-flex flex-row p-4 justify-content-between'>
            <div className='d-flex flex-row justify-content-between align-items-center'>
                {results.gender}
                {results.name}
                {results.location}
                {results.email}
            </div>
          

            <div className=''>

            </div>
    
        </div>  
      
    
    
    
    
    
    
    
    
    
    
    
    
    </div>
)}


export default User