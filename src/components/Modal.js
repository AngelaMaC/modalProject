import styled from 'styled-components';
import { useRef, useState } from 'react';
import { MdClose } from 'react-icons/md';

const Background = styled.div`
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.2);
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
`

const ModalWrapper = styled.div`
    width: 60vw;
    height: 60vh;
    box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
    background: #fff;
    color: #000;
    display: flex;
    justify-content: center;
    position: relative;
    z-index: 10;
    border-radius: 10px;
`
const ModalContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 2;
    color: rgba(252, 70, 107, 1);    
`

const CloseModalButton = styled(MdClose)`
    cursor: pointer;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 32px;
    height: 32px;
    padding: 0;
    z-index: 10;
`

export const Modal = ({ showModal, setShowModal }) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    }

    const handleMouseLeave = () => {
        setIsHover(false);
    }

    const linkHover = {
        fontSize: '20px',
        padding: '5px 10px',
        marginTop: '15px',
        borderRadius: '5px',
        boxShadow: '5px 5px 10px -20px rgba(0,0,0,0.75)',
        backgroundImage: isHover ? 'linear-gradient(45deg, #fbc2eb 0%, #e66465 51%, #9198e5 100%)' : 'linear-gradient(90deg, #9198e5 51%,#e66465 100%,#fbc2eb 0%)'
    }

    const modalRef = useRef();

    const closeModal = (e) => {
        if (modalRef.current === e.target) {
            setShowModal(false);
        }
    }

    return (
        <>
            {showModal ? (
                <Background ref={modalRef} onClick={closeModal}>
                    <ModalWrapper showModal={showModal}>
                        <ModalContent>
                            <h1>It's Modal Time!</h1>
                            <h3 style={{ color: 'rgb(63, 94, 251)' }}>This project was made with React.</h3>
                            <div
                                style={linkHover}
                                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                <a href='https://github.com/AngelaMaC/modalProject'
                                    target='blank'
                                    rel='noopener noreferrer'
                                    style={{ textDecoration: 'none', color: 'white' }}
                                >Click here to see the source code.</a>
                            </div>
                        </ModalContent>
                        <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev => !prev)} />
                    </ModalWrapper>
                </Background>
            ) : null}
        </ >
    )
}

export default Modal;