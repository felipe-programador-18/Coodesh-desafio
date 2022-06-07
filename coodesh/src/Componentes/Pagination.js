import React from 'react'

const Pagination = (props) => {
 const {page, totalPage, onLeftClick, onRightClick } = props;
  console.log('teste page', page )
 return(<div className='pagination'>
     
          <button id='testing' onClick={onLeftClick}><div>⬅</div></button>
            <div> {page} </div>
          <button id='test' onClick={onRightClick}><div>➡</div></button>      
           
 </div>)
}


export default Pagination