import React from 'react'
import User from './User'
import Pagination from './Pagination'

const Usersers = (props) =>{
    const {pessoas, page, loading, setPage,  totalPage } = props ;

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
                
         <div className='container d-flex flex-row justify-content-between align-items-center p-4'>
           <h1>Paginação:</h1>  
           <Pagination 
           page={page}
           totalPage={totalPage}
           onLeftClick ={onLeftHandling}
           onRightClick = {onRightHandling} 
           />
           {loading ? (<div>Carregando .....</div>) :
            (<div className='display-grid' >
                {pessoas && pessoas.map((results, index) => {
                    return(
                        <User key={index} results={results}/>
                    )
                })}
            </div>  
            )}
        </div>
         
        <div>
        </div>

    </div>)
  





}


export default Usersers