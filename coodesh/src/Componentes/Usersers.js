import React from 'react'
import User from './User'
import Pagination from './Pagination'

const Usersers = (props) =>{
    const {pessoas, page, loading, setPage,  totalPage } = props ;
     console.log('here page', totalPage)
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
             {/* <div className='people-grid' > */}

           {loading ? (<div>Carregando .....</div>) :
              ( <>  
              {pessoas && pessoas.map((results, index) => {
                    return(
                        <User key={index} results={results}/>
                    )
                   })
                   } 
                 </> 
               ) 
            }
           </div>
         
        <div>
        </div>

    </div>)
  





}


export default Usersers