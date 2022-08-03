import React,{useState} from 'react'
import Modal from 'react-modal';
import Convert from './Converdata';

// need create context to manage all modal



const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const Modalcomponent = (props) => {
  //Create some testing to see new code
  const {pessoas} = props;
  //let subtitle;  
  console.log( 'passou aqui' , pessoas)

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  //function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
  //}

  function closeModal() {
    setIsOpen(false);
  }


   return(<>
           
           <button onClick={openModal} >Url</button>
        
             
            <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
            >  
             <h1> Dados</h1>
                  {  pessoas && pessoas.map((results)=>{
                    return(<> <div className='text-center' >
                  <table className="table">
                 <tbody> 
                 <tr className='table-light'  key={results}>
                 <th scope="row"> <img id='image-size'src={results.picture.thumbnail} alt='pictureusers' />
                 </th>
                 <h4>{ `${results.name.first} ${results.name.last}` } </h4>
                 <h4>{results.email} </h4>
                 <h4>{results.gender}</h4>
                 <h4><Convert timezone={results.dob.date} /> </h4>
                 <h4>{results.cell}</h4>
                 <h4> {results.location.city} </h4>
                 <h4>{results.nat} </h4>
                 <h4> {results.id.name} </h4>            
                </tr>  
               </tbody>
               </table>
                    
                    
                  </div>  </>)
                  })  }
             
               
         
            </Modal>
            </div>             
    </>)
}

export default Modalcomponent