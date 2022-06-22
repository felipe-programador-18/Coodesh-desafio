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

const CreateTeste = (props) => {

  
 
  //Create some testing to see new code
  const {pessoas, loading} = props;
  //let subtitle;  
  
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
        {loading ?  <h1>loading ...</h1> :
             
            <div>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}
            >
      
              <div>
              <h2 >Pessoa</h2>
              <h2 >Nome</h2>
              <h2 >Email-test</h2>
              <h2 >numero</h2>
           
              </div>

              {pessoas && pessoas.map((results) => {
                return(<> <div className='container' >
                  <table>
                    <tbody>
                      <tr key={results}>
                        <td>{results.name}</td>
                      </tr>
                    </tbody>
                  </table>
                        
                  </div> </> )
              })}
            
         
            </Modal>
            </div>             
 
        
        }
    </>)
}

export default CreateTeste