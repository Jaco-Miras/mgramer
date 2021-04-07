import React from 'react';
import '../css/Modal.css';

function Modal({selectedImg, setselectedImg}) {
    const handleClick = (e) => {
        if (e.target.classList.contains('modal')){
            setselectedImg(null);
        }
    }

    return (
        <div className='modal' onClick={handleClick}>
            <img src={selectedImg} alt="enlarged pic"/>
        </div>
    )
}

export default Modal;
