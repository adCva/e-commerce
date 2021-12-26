import React, { useState, useEffect } from 'react';
import { ModalContainer, ModalActiveImage, ModalPrevButton, ModalNextButton, ModalThumbnailsWrapper, ModalThumbnailImage, BigModal, BigModalContainer, CloseButton, ImagesWrapper, MainImage, BigModalPrevButton, BigModalNextButton, BigModalThumbnailsWrapper, BigModalThumbnailImage } from "./HeroModalStyle";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdClose } from "react-icons/md";


const HeroModal = () => {

    const [activeImage, setActiveImage] = useState(1);
    const [activeThumbnail, setActiveThumbnail] = useState(1);

    // Big modal states.
    const [allowBigModal, setAllowBigModal] = useState(false);
    const [displayBigModal, setdisplayBigModal] = useState(false);
    const [bigModalActiveImage, setBigModalActiveImage] = useState(1);
    const [bigModalActiveThumbnail, setBigModalActiveThumbnail] = useState(1);



    // Big modal methods.
    const triggerModal = () => {
        setdisplayBigModal(true);
        setBigModalActiveImage(activeImage)
        setBigModalActiveThumbnail(activeImage)
    }

    const closeBigModal = () => {
        setdisplayBigModal(false);
    }

    const bigModalPrev = () => {
        if (bigModalActiveImage === 1) {
            setBigModalActiveImage(4)
            setBigModalActiveThumbnail(4)
        } else {
            setBigModalActiveImage(bigModalActiveImage - 1)
            setBigModalActiveThumbnail(bigModalActiveImage - 1)
        }
    }

    const bigModalNext = () => {
        if (bigModalActiveImage === 4) {
            setBigModalActiveImage(1)
            setBigModalActiveThumbnail(1)
        } else {
            setBigModalActiveImage(bigModalActiveImage + 1)
            setBigModalActiveThumbnail(bigModalActiveImage + 1)
        }
    }

    const makeBigActiveImage = index => {
        setBigModalActiveThumbnail(index);
        setBigModalActiveImage(index);
    }




    // Mobile button prev & next methods.
    const nextImage = () => {
        if (activeImage === 4) {
            setActiveImage(1)
        } else {
            setActiveImage(activeImage + 1)
        }
    }

    const prevImage = () => {
        if (activeImage === 1) {
            setActiveImage(4)
        } else {
            setActiveImage(activeImage - 1)
        }
    }


    //  Disable big modal for mobile screens & allow display of big modal on desktop.
    useEffect(() => {
        window.addEventListener('load', () => {
            if (window.innerWidth > 1025) {
                setAllowBigModal(true)
            } else {
                setAllowBigModal(false)
            }
        })

        window.addEventListener('resize', () => {
            if (window.innerWidth > 1025) {
                setAllowBigModal(true)
            } else {
                setAllowBigModal(false)
            }
        })
    }, []);


    
    // Change active image on thumbnail click.
    const makeActiveImage = index => {
        setActiveThumbnail(index);
        setActiveImage(index);
    }

    

    return (
        <ModalContainer>
            <ModalActiveImage onClick={() => allowBigModal ? triggerModal() : setdisplayBigModal(false)} src={`./images/image-product-${activeImage}.jpg`} alt="Modal Image"/>
            <ModalPrevButton onClick={prevImage} src="./images/icon-previous.svg" alt="Previous Image Button" />
            <ModalNextButton onClick={nextImage} src="./images/icon-next.svg" alt="Next Image Button" />
            <ModalThumbnailsWrapper>
                <ModalThumbnailImage className={activeThumbnail === 1 ? "activeThumbnail" : ""} onClick={() => makeActiveImage(1)} src="./images/image-product-1-thumbnail.jpg" alt="Thumbnail 1"/>
                <ModalThumbnailImage className={activeThumbnail === 2 ? "activeThumbnail" : ""} onClick={() => makeActiveImage(2)} src="./images/image-product-2-thumbnail.jpg" alt="Thumbnail 2" />
                <ModalThumbnailImage className={activeThumbnail === 3 ? "activeThumbnail" : ""} onClick={() => makeActiveImage(3)} src="./images/image-product-3-thumbnail.jpg" alt="Thumbnail 3" />
                <ModalThumbnailImage className={activeThumbnail === 4 ? "activeThumbnail" : ""} onClick={() => makeActiveImage(4)} src="./images/image-product-4-thumbnail.jpg" alt="Thumbnail 4" />
            </ModalThumbnailsWrapper>

            <BigModal displayBigModal={displayBigModal}>
                <BigModalContainer>
                    <CloseButton onClick={closeBigModal}><MdClose/></CloseButton>
                    <ImagesWrapper>
                        <MainImage src={`./images/image-product-${bigModalActiveImage}.jpg`} alt="Modal Big Image" />
                        <BigModalPrevButton onClick={bigModalPrev} src="./images/icon-previous.svg" alt="Previous Image Button"><FaChevronLeft/></BigModalPrevButton>
                        <BigModalNextButton onClick={bigModalNext} src="./images/icon-next.svg" alt="Next Image Button"><FaChevronRight/></BigModalNextButton>
                        <BigModalThumbnailsWrapper>
                            <BigModalThumbnailImage className={bigModalActiveThumbnail === 1 ? "activeThumbnail" : ""} onClick={() => makeBigActiveImage(1)} src="./images/image-product-1-thumbnail.jpg" alt="Thumbnail" />
                            <BigModalThumbnailImage className={bigModalActiveThumbnail === 2 ? "activeThumbnail" : ""} onClick={() => makeBigActiveImage(2)} src="./images/image-product-2-thumbnail.jpg" alt="Thumbnail" />
                            <BigModalThumbnailImage className={bigModalActiveThumbnail === 3 ? "activeThumbnail" : ""} onClick={() => makeBigActiveImage(3)} src="./images/image-product-3-thumbnail.jpg" alt="Thumbnail" />
                            <BigModalThumbnailImage className={bigModalActiveThumbnail === 4 ? "activeThumbnail" : ""} onClick={() => makeBigActiveImage(4)} src="./images/image-product-4-thumbnail.jpg" alt="Thumbnail" />
                        </BigModalThumbnailsWrapper>
                    </ImagesWrapper>
                </BigModalContainer>
            </BigModal>
        </ModalContainer>
    )
}


export default HeroModal;