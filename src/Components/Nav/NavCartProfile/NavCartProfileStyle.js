import styled from "styled-components";


// General styles
export const NavCartProfileContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* float: right; */
`




// Cart card styles.
export const CartContainer = styled.div`
    position: relative;
    width: 18%;

    @media screen and (min-width: 320px) {
        width: 16%;
    }

    @media screen and (min-width: 768px) {
        width: 25%;
    }

    @media screen and (min-width: 800px) {
        width: 19%;
    }
`


export const CartIcon = styled.img`
    cursor: pointer;
    width: 100%;
    transition: var(--text-transition);

    :hover {
        transform: scale(1.05);
    }
`


export const CartTotalItems = styled.p`
    display: ${({totalItems}) => (totalItems > 0 ? "block" : "none")};
    /* background-color: var(--orange); 
        color: #fff; */ 
    background-color: var(--very-dark-blue); 
    color: var(--orange);
    border-radius: 50px;
    padding: 0 0.2rem;
    text-align: center;
    position: absolute;
    right: -5px;
    top: -5px;
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 0.6rem;
    z-index: 99;

    @media screen and (min-width: 320px) {
        padding: 0 0.2rem;
        font-size: 0.65rem;
        right: -6px;
        top: -6px;
    }

    @media screen and (min-width: 360px) {
        padding: 0 0.3rem;
    }

    @media screen and (min-width: 375px) {
        padding: 0.1rem 0.35rem;
        font-size: 0.6rem;
        right: -8px;
        top: -7px;
    }

    @media screen and (min-width: 414px) {
        font-size: 0.65rem;
        right: -9px;
        top: -9px;
    }

    @media screen and (min-width: 540px) {
        padding: 0.05rem 0.35rem;
        right: -8px;
        top: -8px;
    }


    @media screen and (min-width: 768px) {
        font-size: 1rem;
        padding: 0 0.4rem;
        right: -9px;
        top: -9px;
    }

    @media screen and (min-width: 800px) {
        font-size: 0.7rem;
        padding: 0.1rem 0.4rem;
        right: -8px;
        top: -8px;
    }
`


export const CardWrapper = styled.div`
    display: ${({cartOpen}) => (cartOpen ? "block" : "none")};
    position: absolute;
    top: 35px;
    right: -55px;
    width: 270px;
    font-family: var(--font-family);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 5px;
    background-color: #ffffff;
    z-index: 99;

    @media screen and (min-width: 320px) {
        top: 40px;
        right: -55px;
        width: 300px;
    }

    @media screen and (min-width: 360px) {
        width: 340px;
    }

    @media screen and (min-width: 375px) {
        width: 350px;
    }

    @media screen and (min-width: 411px) {
        width: 390px;
    }

    @media screen and (min-width: 768px) {
        top: 57px;
        right: -70px;
        width: 420px;
    }

    @media screen and (min-width: 800px) {
        top: 48px;
        right: -60px;
        width: 370px;
    }
`


export const CartTitleAndPrice = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


export const CardTitle = styled.h3`
    padding: 0.5rem 1rem;

    @media screen and (min-width: 320px) {
        padding: 1rem;
    }
`


export const CardTotalPrice = styled.p`
    padding: 1rem;
    color: var(--dark-grayish-blue);
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    font-size: 0.8rem;


    @media screen and (min-width: 375px) {
        font-size: 0.85rem;
    }

    @media screen and (min-width: 414px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 800px) {
        font-size: 0.85rem;
    }
`


export const CardDetails = styled.div`
    border-top: 1px solid var(--grayish-blue);
    padding: 1rem;
`


export const CardProduct = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1.5rem;
    cursor: pointer;

    :last-of-type {
        margin-bottom: 0;
    }
`


export const ControlGroupContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`


export const ProductImage = styled.img`
    width: 40px;
    border-radius: 5px;

    @media screen and (min-width: 720px) {
        width: 45px;
    }

    @media screen and (min-width: 768px) {
        width: 60px;
    }

    @media screen and (min-width: 800px) {
        width: 50px;
    }
`


export const CardPriceNameDetails = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 1rem;
`


export const CardProductName = styled.h5`
    color: var(--dark-grayish-blue);
    font-size: 0.65rem;

    @media screen and (min-width: 320px) {
        font-size: 0.75rem;
    }

    @media screen and (min-width: 375px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 768px) {
        font-size: 1.1rem;
    }

    @media screen and (min-width: 800px) {
        font-size: 0.9rem;
    }
`


export const CardPrice = styled.div`
    display: flex;
`


export const UnitPrice = styled.p`
    color: var(--dark-grayish-blue);

    @media screen and (min-width: 280px) {
        font-size: 0.9rem;
    }

    @media screen and (min-width: 320px) {
        font-size: 0.95rem;
    }
`


export const TotalPrice = styled.p`
    font-weight: var(--font-weight-bold);
    color: var(--very-dark-blue);
    margin-left: 0.5rem;
    font-size: 0.9rem;

    @media screen and (min-width: 320px) {
        font-size: 0.95rem;
        margin-left: 1rem;
    }
`


export const DeleteProduct = styled.button`
    background: transparent;
    border: none;
    outline: none;
    font-size: 1.1rem;
    cursor: pointer;
    color: var(--dark-grayish-blue);
    transition: var(--text-transition);

    :hover {
        color: var(--very-dark-blue);
    }

    @media screen and (min-width: 768px) {
        font-size: 1.5rem;
    }

    @media screen and (min-width: 800px) {
        font-size: 1.1rem;
    }
`

export const CheckoutButton = styled.button`
    background-color: var(--orange);
    color: var(--white);
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100%;
    height: 38px;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: var(--text-transition);

    :hover {
        background-color: var(--hover-orange);
    }

    @media screen and (min-width: 375px) {
        height: 44px;
    }
`


export const EmptyCartItems = styled.p`
    text-align: center;
    margin: 0 auto;
    color: var( --grayish-blue);
    font-family: var(--font-family);
    font-weight: var(--font-weight-regular);
    cursor: default;
`






// Profile card styles.
export const ProfileContainer = styled.div`
    position: relative;
    width: 26%;
    margin-left: 1rem;

    @media screen and (min-width: 320px) {
        width: 24%;
    }

    @media screen and (min-width: 768px) {
        width: 35%;
    }

    @media screen and (min-width: 800px) {
        width: 30%;
    }

    @media screen and (min-width: 1000px) {
        width: 32%;
    }
`


export const ProfileIcon = styled.img`
    cursor: pointer;
    width: 100%;
    float: right;
    border: 3px solid transparent;
    z-index: 0;

    :hover {
        border: 3px solid var(--orange);
        border-radius: 50%;
    }
`


export const ProfileCardWrapper = styled.div`
    display: ${({profileOpen}) => (profileOpen ? "block" : "none")};
    position: absolute;
    top: 45px;
    right: -10px;
    width: 270px;
    font-family: var(--font-family);
    box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
    border-radius: 5px;
    background-color: #ffffff;
    z-index: 99;

    @media screen and (min-width: 320px) {
        width: 300px;
        right: -8px;
    }

    @media screen and (min-width: 360px) {
        width: 340px;
    }

    @media screen and (min-width: 375px) {
        width: 350px;
    }

    @media screen and (min-width: 411px) {
        width: 390px;
    }

    @media screen and (min-width: 768px) {
        top: 65px;
        right: 0;
        width: 420px;
    }

    @media screen and (min-width: 800px) {
        top: 55px;
        right: 10px;
        width: 370px;
    }
`


export const ProfileCardTitle = styled.h3`
    padding: 0.5rem 1rem;

    @media screen and (min-width: 320px) {
        padding: 1rem;
    }
`

export const ProfileCardDetails = styled.div`
    border-top: 1px solid var(--grayish-blue);
    padding: 1rem;
`


export const ProfileCardLinksList = styled.div`
    display: flex;
    flex-direction: column;
`

export const ProfileLink = styled.a`
    margin-bottom: 0.7rem;
    cursor: pointer;
    color: var(--dark-grayish-blue);
    transition: var(--text-transition);

    :last-of-type {
        margin-bottom: 0;
    }

    :hover {
        color: var(--very-dark-blue);
    }
`

export const ProfileLogout = styled.button`
    background-color: var(--orange);
    color: var(--white);
    border: none;
    border-radius: 5px;
    outline: none;
    width: 100%;
    height: 38px;
    margin-top: 1.5rem;
    cursor: pointer;
    transition: var(--text-transition);

    :hover {
        background-color: var(--hover-orange);
    }

    @media screen and (min-width: 375px) {
        height: 44px;
    }
`