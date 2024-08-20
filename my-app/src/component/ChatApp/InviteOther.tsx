import React, { useState } from 'react'
import Modal from 'react-modal';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const InviteOther = ({ modalIsOpen, setIsOpen }: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResult, setSearchResult] = useState(null);


  const handleSearch = () => {
    const mockData = {
      title: 'Found Item',
      description: 'This is the description of the found item.',
    };

    if (searchQuery.toLowerCase() === 'example') {
      setSearchResult(mockData);
    } else {
      setSearchResult(null); // No results found
    }
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
          width: '80%',
          height: '50%',
          maxWidth: '400px',
          maxHeight: '300px',
        },
      }}
    >
      <div className='invite_container'>
        <h2>Hey, invite your friends to join.</h2>
        <form className='form_container'>
          <div className='input_container'>
            <input type='email' className='input_class' placeholder='Enter email' />
          </div>
          <div className='submit_icon'>
              <CheckCircleOutlineIcon />
          </div>
        </form>

      </div>
    </Modal>
  )
}

export default InviteOther