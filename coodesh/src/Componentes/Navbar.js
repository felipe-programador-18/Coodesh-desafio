import React,{useContext} from 'react'
import ContextManager from '../Context/context'


const NavBar = () => {
   const {allusers}  = useContext(ContextManager)
   return (<nav>
            <div className='container d-flex justify-content-center align-items-center'>
               <h1>Buscar Pessoas</h1>
            </div>
            <div>
                {allusers.length}  📃
            </div>
    </nav>
)
}


export default NavBar