import React from 'react'

const Pagination = (props) => {
 const {page, totalPage, onLeftClick, onRightClick } = props;

 return(<div className='d-flex flex-row align-items-center'>
     
          <button onClick={onLeftClick}><div>⬅</div></button>
            <div> {page}: {totalPage} </div>
          <button onClick={onRightClick}><div>➡</div></button>      
           
 </div>)
}


export default Pagination