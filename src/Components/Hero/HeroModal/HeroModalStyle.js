import styled from "styled-components";


export const ModalContainer = styled.div`
    position: relative;

    @media screen and (min-width: 1024px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
    }
`

export const ModalActiveImage = styled.img`
    width: 100%;
    object-fit: cover;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    z-index: 0;

    @media screen and (min-width: 768px) {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
        border-radius: 15px;
    }

    @media screen and (min-width: 1024px) {
        cursor: pointer;
        width: 400px;
    }
`


export const ModalPrevButton = styled.img`
    position: absolute;
    z-index: 99;
    left: 10px;
    top: 50%;
    background-color: #f0f0f0;
    border-radius: 50%;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    transition: var(--text-transition);
    z-index: 1;

    @media screen and (min-width: 320px) {
        padding: 0.5rem 0.7rem;
    }

    @media screen and (min-width: 768px) {
        padding: 0.7rem 0.9rem;
        left: 20px;
    }

    @media screen and (min-width: 1025px) {
        display: none;
    }
`


export const ModalNextButton = styled.img`
    position: absolute;
    z-index: 99;
    right: 10px;
    top: 50%;
    background-color: #f0f0f0;
    border-radius: 50%;
    padding: 0.3rem 0.5rem;
    cursor: pointer;
    transition: var(--text-transition);
    z-index: 1;

    @media screen and (min-width: 320px) {
        padding: 0.5rem 0.7rem;;
    }

    @media screen and (min-width: 768px) {
        padding: 0.7rem 0.9rem;
        right: 20px;
    }

    @media screen and (min-width: 1025px) {
        display: none;
    }
`


export const ModalThumbnailsWrapper = styled.div`
    display: none;

    @media screen and (min-width: 1025px) {
        margin-top: 2.3rem;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 1rem;
    }
`


export const ModalThumbnailImage = styled.img`
    border-radius: 10px;
    cursor: pointer;
    border: 4px solid transparent;
    transition: var(--text-transition);
    width: 95%;
    margin: 0 auto;

    :hover {
        border: 4px solid var(--orange);
        opacity: 0.6;
    }
`






// Big modal.
export const BigModal = styled.div`
    display: ${({displayBigModal}) => (displayBigModal ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.85);
    z-index: 999;
`


export const BigModalContainer = styled.div`
    height: 400px;
    width: 400px;
    background-color: transparent;
    position: relative;
    margin-top: 4rem;

    @media (min-width: 1300px) {
        height: 450px;
        width: 450px;
    }
    @media (min-width: 1400px) {
        height: 500px;
        width: 500px;
        margin-top: 6rem;
    }
`


export const CloseButton = styled.button`
    background-color: transparent;
    border: none;
    outline: none;
    cursor: pointer;
    position: absolute;
    right: -30px;
    top: -45px;
    color: var(--orange);
    font-size: 2.2rem;
    transition: var(--text-transition);

    :hover {
        color: var(--hover-orange);
    }
    :focus {
        color: #000000;
    }
`


export const ImagesWrapper = styled.div`
    width: 100%;
`


export const MainImage = styled.img`
    width: 100%;
    border-radius: 15px;
`


export const BigModalPrevButton = styled.button`
    position: absolute;
    z-index: 99;
    left: -60px;
    top: 45%;
    background-color: #f0f0f0;
    border: none;
    outline: none;
    border-radius: 50%;
    padding: 0.7rem 0.8rem 0.5rem 0.8rem;
    cursor: pointer;
    transition: var(--text-transition);
    color: var(--very-dark-blue);
    font-size: 1.2rem;
    
    :hover {
        color: var(--orange);
    }

    @media screen and (min-width: 1300px) {
        left: -55px;
        padding: 0.5rem 0.6rem 0.3rem 0.6rem;
    }
`


export const BigModalNextButton = styled.button`
    position: absolute;
    z-index: 99;
    right: -60px;
    top: 45%;
    background-color: #f0f0f0;
    border: none;
    outline: none;
    border-radius: 50%;
    padding: 0.7rem 0.8rem 0.5rem 0.8rem;
    cursor: pointer;
    transition: var(--text-transition);
    color: var(--very-dark-blue);
    font-size: 1.2rem;

    :hover {
        color: var(--orange);
    }

    @media screen and (min-width: 1300px) {
        right: -55px;
        padding: 0.5rem 0.6rem 0.3rem 0.6rem;
    }
`


export const BigModalThumbnailsWrapper = styled.div`
    width: 80%;
    margin: 2rem auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
`


export const BigModalThumbnailImage = styled.img`
    border-radius: 10px;
    width: 23%;
    margin-right: 1.5rem;
    cursor: pointer;
    border: 4px solid transparent;
    transition: var(--text-transition);
    
   
   :hover {
        border: 4px solid var(--orange);
        opacity: 0.4;
    }

    :last-of-type {
        margin-right: 0;
    }
`