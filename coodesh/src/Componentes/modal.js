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
              <table className="table container-sm">
               <thead>
              <tr>
              <th scope='col'>Pessoa</th>
                <th scope="col">Nome</th>
                <th scope="col">Email</th>
                <th scope="col">Genero</th>
                <th scope='col'>Dt Nasc</th>
                <th scope='col'>Tel</th>
                <th scope='col'>Endereço</th>
                <th scope='col'>Nacionalidade</th>
                <th scope='col'>ID</th>
                
               </tr>
               </thead>  
               </table>
              
             {pessoas && pessoas.map((results) => {
               
               return ( <div key={results}>
                <Modal 
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}>
                <table className="table">
                 <tbody> 
                 <tr className='table-light'  key={results}>
                 <th scope="row"> <img id='image-size'src={results.picture.thumbnail} alt='pictureusers' />
                 </th>
                 <td>{ `${results.name.first} ${results.name.last}` } </td>
                 <td>{results.email} </td>
                 <td>{results.gender}</td>
                 <td><Convert timezone={results.dob.date} /> </td>
                 <td>{results.cell}</td>
                 <td> {results.location.city} </td>
                 <td>{results.nat} </td>
                 <td> {results.id.name} </td>            
                </tr>  
               </tbody>
               </table>
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