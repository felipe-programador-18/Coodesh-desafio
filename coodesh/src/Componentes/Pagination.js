import React from 'react'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill} from 'react-icons/bs'
const Pagination = (props) => {
 const {page, onLeftClick, onRightClick } = props;

 return(<div className='pagination'>
     
          <button id='testing' onClick={onLeftClick}><div><BsFillArrowLeftSquareFill/> </div></button>
            <div> {page} </div>
          <button id='test' onClick={onRightClick}><div><BsFillArrowRightSquareFill/> </div></button>      
           
 </div>)
}


export default Pagination