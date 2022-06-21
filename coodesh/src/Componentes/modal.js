import React,{useState} from 'react'
import Modal from 'react-modal';
import Convert from './Converdata';

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
   
        {loading ?  <h1>loading ...</h1> :
          (<> 
               <div>
            <button onClick={openModal} >Url</button>
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
              <h2 >a</h2>
              <h2 >b</h2>
              <h2 >c</h2>
              </div>
            
              
             {pessoas && pessoas.map((results) => {  
               return ( <div key={results}>
                <Modal 
                 isOpen={modalIsOpen}
                 onRequestClose={closeModal}
                 contentLabel="Example Modal"
                 style={customStyles}>

                    <div key={results} >
                      <h1>{results.name.firts}</h1>
                      <h1>{results.emial} </h1>
                    </div>
                
                </Modal>
               </div> )
             } ) }
           </Modal>     
            </div>             

            { /* { pessoas && pessoas.map((results) => {
               return ( <>
             <Modal key={results} isOpen={modalIsOpen} 
            onRequestClose={closeModal}
            contentLabel="Example Modal"
            style={customStyles}>    
            <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Teste </h2>
            
            <button onClick={closeModal}>close</button>
             <div>I am a modal</div>
               </Modal>                        
               </>)
              })
             } */}
          </>)
        
        }
    </>)
}

export default CreateTeste