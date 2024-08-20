import Image from 'next/image'
import React, { useState } from 'react'
import img2 from '../../style/image/img2.png'
import AddIcon from '@mui/icons-material/Add';
import InviteOther from './InviteOther';

const HeaderComponent = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className='chat_header'>
        <div className='current_user_container'>
          <Image src={img2} alt='current_user_profile'
            style={{
              borderRadius: '50%', // Makes the image round
              width: '54px',       // Sets the width to 64px (equivalent to w-16 in Tailwind)
              height: '54px',      // Sets the height to 64px (equivalent to h-16 in Tailwind)
              objectFit: 'cover',  // Ensures the image covers the area without stretching
            }}
            width={100}
            height={100}
          />
          <h3>Kalaiarasu S</h3>
        </div>
        <div className='add_other_user_container'>
          <div onClick={openModal}>
            <AddIcon /> 
          </div>
        </div>
      </div>
      <div className='other_user_container'>
        <div className='current_user_container'>
          <Image src={img2} alt='current_user_profile'
            style={{
              borderRadius: '50%', // Makes the image round
              width: '54px',       // Sets the width to 64px (equivalent to w-16 in Tailwind)
              height: '54px',      // Sets the height to 64px (equivalent to h-16 in Tailwind)
              objectFit: 'cover',  // Ensures the image covers the area without stretching
            }}
            width={100}
            height={100}
          />
          <h3>Other user</h3>
        </div>
      </div>

      {modalIsOpen && <InviteOther modalIsOpen={modalIsOpen} setIsOpen={setIsOpen}/>}
    </>

  )
}

export default HeaderComponent