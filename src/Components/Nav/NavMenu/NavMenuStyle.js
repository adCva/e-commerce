import styled from "styled-components";


// This will be desktop first (not mobile first) because there are fewer things to rewrite on NavMenuList.
export const NavMenuContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
`


export const NavMenuMobileBtn = styled.img`
    display: none;

    @media screen and (max-width: 768px) {
        display: block;
        margin-right: 1rem;
        height: 1.7rem;
    }

    @media screen and (max-width: 568px) {
        height: 1.3rem;
    }

    @media screen and (max-width: 414px) {
        height: 1.2rem;
    }

    @media screen and (max-width: 375px) {
        height: 1.15rem;
    }

    @media screen and (max-width: 320px) {
        height: 1rem;
    }
`


export const NavMenuLogo = styled.img`
    @media screen and (max-width: 768px) {
        margin-bottom: 0.3rem;
        height: 1.65rem;
    }

    @media screen and (max-width: 667px) {
        height: 1.4rem;
    }

    @media screen and (max-width: 568px) {
        height: 1.2rem;
    }

    @media screen and (max-width: 414px) {
        margin-bottom: 0.2rem;
        height: 1.15rem;
    }

    @media screen and (max-width: 375px) {
        height: 1.05rem;
    }

    @media screen and (max-width: 320px) {
        height: 0.95rem;
    }
`


export const NavMenuList = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.4rem;


    @media screen and (min-width: 812px) {
        margin-left: 1.5rem;
    }

    @media screen and (min-width: 1024px) {
        margin-left: 2rem; 
    }

    @media screen and (max-width: 768px) {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        margin-top: 0;
        margin-left: 0;

        transform: ${({mobileMenu}) => (mobileMenu ? "translateX(0%)" : "translateX(-150%)")};
        transition: all 0.2s ease-in-out;

        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;

        width: 450px;
        padding: 1rem 0 0 1rem;
        background: #000000;
    }

    @media screen and (max-width: 540px) {
        width: 305px;
    }

    @media screen and (max-width: 414px) {
        width: 335px;
    }

    @media screen and (max-width: 375px) {
        width: 300px;
    }

    @media screen and (max-width: 320px) {
        width: 245px;
    }

    @media screen and (max-width: 280px) {
        width: 225px;
    }
`


export const NavMenuMobileBtnClose = styled.img`
    display: none;

   @media screen and (max-width: 768px) {
        display: block;
        width: 6%;
    }

    @media screen and (max-width: 736px) {
        width: 5%;
    }

    @media screen and (max-width: 667px) {
        width: 5%;
    }

    @media screen and (max-width: 568px) {
        width: 5%;
    }

    @media screen and (max-width: 414px) {
        width: 6%;
    }
    
    @media screen and (max-width: 375px) {
        width: 7%;
    }

    @media screen and (max-width: 320px) {
        width: 8%;
    }
`


export const NavMenuItem = styled.button`
    font-weight: var(--font-weight-regular);
    font-size: 1.15rem;
    margin-right: 1rem;
    padding: 1.8rem 0;
    color: var(--dark-grayish-blue);
    cursor: pointer;
    border: none;
    border-bottom: 3px solid transparent;
    transition: var(--text-transition);
    outline: none;
    background: transparent;

    :last-of-type {
        margin-right: 0;
    }

    :hover {
        color: var(--very-dark-blue);
        border-bottom: 3px solid var(--orange);
    }

    :focus {
        color: var(--very-dark-blue);
        border-bottom: 3px solid var(--orange);
    }


    @media screen and (max-width: 768px) {
        font-weight: var(--font-weight-bold);
        font-size: 1.5rem;
        color: var(--light-grayish-blue);
        margin-right: 0;
        margin-bottom: 1.7rem;
        padding: 0;
        border-bottom: none;

        :first-of-type {
            margin-top: 4.5rem;
        }

        :last-of-type {
            margin-bottom: 0;
        }

        :hover {
            border-bottom: none;
        }
    }

    @media screen and (max-width: 736px) {
        font-size: 1.2rem;
        margin-bottom: 1.4rem;

        :first-of-type {
            margin-top: 3rem;
        }
    }

    @media screen and (max-width: 667px) {
        margin-bottom: 1.2rem;
    }
    
    @media screen and (max-width: 653px) {
        margin-bottom: 1rem;

        :first-of-type {
            margin-top: 2.3rem;
        }
    }

    @media screen and (max-width: 540px) {
        font-size: 1.1rem;
        margin-bottom: 1.3rem;

        :first-of-type {
            margin-top: 3.5rem;
        }
    }

    @media screen and (max-width: 414px) {
        font-size: 1.2rem;
        margin-bottom: 1.2rem;

        :first-of-type {
            margin-top: 3rem;
        }
    }

    @media screen and (max-width: 375px) {
        font-size: 1.1rem;
    }

    @media screen and (max-width: 280px) {
        font-size: 1.05rem;
    }
`



export const NavMenuItemLogo = styled.img`
    position: absolute;
    bottom: 20px;
    height: 0.6rem;

    @media screen and (min-width: 320px) {
        height: 0.7rem;
    }

    @media screen and (min-width: 414px) {
        height: 0.8rem;
    }

    @media screen and (min-width: 768px) {
        height: 1rem;
    }

    @media screen and (min-width: 769px) {
        display: none;
    }

    @media (orientation: landscape) {
        display: none;
    }
`