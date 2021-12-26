import React, { Component } from 'react';
import { FaTrashAlt } from "react-icons/fa";
// General Styled Components
import { NavCartProfileContainer, CartContainer, CartIcon, ProfileContainer, ProfileIcon } from "./NavCartProfileStyle";
// Cart Card Styled Components
import { CartTotalItems, CardWrapper, CartTitleAndPrice, CardTitle, CardTotalPrice, CardDetails, CardProduct, ControlGroupContainer, EmptyCartItems, ProductImage, CardPriceNameDetails, CardProductName, CardPrice, UnitPrice, TotalPrice, DeleteProduct, CheckoutButton } from "./NavCartProfileStyle";
// ProfileCart Card Styled Components
import { ProfileCardWrapper, ProfileCardTitle, ProfileCardDetails, ProfileCardLinksList, ProfileLink, ProfileLogout } from "./NavCartProfileStyle";
// Redux
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { fetchProduct, deleteFromCart } from "../../../Actions/CartActions";


class NavCartProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartOpen: false,
            profileOpen: false
        }

        this.cartRef = React.createRef()
        this.profileRef = React.createRef()
    }


    // Get product data.
    componentWillMount() {
        this.props.fetchProduct()
    };


    // General method.
    returnToFalseState = () => {
        this.setState({
            cartOpen: false,
            profileOpen: false,
        })
    };


    // Open cart card.
    openCart = () => {
        this.returnToFalseState();
        this.setState({
            cartOpen: !this.state.cartOpen
        })
    };


    // Open profile card.
    openProfile = () => {
        this.returnToFalseState();
        this.setState({
            profileOpen: !this.state.profileOpen
        })
    };



    // Close cart & profile cards on outside click.
    componentDidMount() {

        let outsideClickCartHandle = (event) => {
            if (!this.cartRef.current.contains(event.target)) {
                this.setState({
                    cartOpen: false
                })
            }
        }
        let outsideClickProfileHandle = (event) => {
            if (!this.profileRef.current.contains(event.target)) {
                this.setState({
                    profileOpen: false
                })
            }
        }

        document.addEventListener("click", outsideClickCartHandle);
        document.addEventListener("click", outsideClickProfileHandle);

        return () => {
            document.removeEventListener("click", outsideClickCartHandle)
            document.removeEventListener("click", outsideClickProfileHandle)
        }
        
    };


    // Display a message for useless buttons.
    displayMessage = message => {
        this.returnToFalseState();
        alert(`You have clicked on ${message}. This button does nothing.`);
    };



    // Delete item from cart.
    deleteCartItem(index) {
        this.props.deleteFromCart(index)
    };



    render() {
        return (
            <NavCartProfileContainer>
                {/* Cart */}
                <CartContainer ref={this.cartRef}>
                    <CartTotalItems totalItems={this.props.cart.length}>{this.props.cart.length}</CartTotalItems>
                    <CartIcon src="./images/icon-cart.svg" alt="Cart Icon" onClick={() => this.openCart()} />
                    {/* Cart card */}
                        <CardWrapper cartOpen={this.state.cartOpen}>
                            <CartTitleAndPrice>
                                <CardTitle>Cart</CardTitle>
                                <CardTotalPrice>Total Price: $ {this.props.price}</CardTotalPrice>
                            </CartTitleAndPrice>
                            <CardDetails>
                                {/* Conditional */}
                                    {this.props.cart.length === 0 ? (
                                        <CardProduct>
                                            <EmptyCartItems>No items in cart</EmptyCartItems>
                                        </CardProduct>
                                    ) : this.props.cart.map((product, index) => (
                                        <CardProduct key={index}>
                                            <ControlGroupContainer>
                                                <ProductImage src={product.productThumbnail} alt="Product Thumbnail" />
                                                <CardPriceNameDetails>
                                                    <CardProductName>{product.productName}</CardProductName>
                                                    <CardPrice>
                                                        <UnitPrice>${product.productUnitPrice} x {product.productUnitTotal}</UnitPrice>
                                                        <TotalPrice>${product.productUnitPrice * product.productUnitTotal}</TotalPrice>
                                                    </CardPrice>                                   
                                                </CardPriceNameDetails>
                                            </ControlGroupContainer>
                                            <DeleteProduct onClick={() => this.deleteCartItem(index)}><FaTrashAlt/></DeleteProduct>
                                        </CardProduct>
                                    ))}
                            {/* End of conditional */}
                                <CheckoutButton onClick={() => this.displayMessage("Checkout Button")}>{this.props.cart.length > 0 ? "Checkout" : "Buy something!"}</CheckoutButton>
                            </CardDetails>
                        </CardWrapper>
                    {/* End of cart card */}
                </CartContainer>


                {/* Profile */}
                <ProfileContainer ref={this.profileRef}>
                    <ProfileIcon src="./images/image-avatar.png" alt="Cart Icon" onClick={() => this.openProfile()} />
                    {/* Profile Card */}
                        <ProfileCardWrapper profileOpen={this.state.profileOpen}>
                            <ProfileCardTitle>Profile</ProfileCardTitle>
                            <ProfileCardDetails>
                                <ProfileCardLinksList>
                                    <ProfileLink onClick={() => this.displayMessage("profile page button")} >Profile</ProfileLink>
                                    <ProfileLink onClick={() => this.displayMessage("settings page button")} >Settings</ProfileLink>
                                    <ProfileLink onClick={() => this.displayMessage("purchase history page button")} >Purchase History</ProfileLink>
                                </ProfileCardLinksList>
                                <ProfileLogout onClick={() => this.displayMessage("Log out Button")}>Log Out</ProfileLogout>
                            </ProfileCardDetails>
                        </ProfileCardWrapper>
                    {/* End of profile card */}
                    </ProfileContainer>
            </NavCartProfileContainer>
        )
    }
}



NavCartProfile.propTypes = {
    fetchProduct: PropTypes.func.isRequired,
    deleteFromCart: PropTypes.func.isRequired,
    cart: PropTypes.array.isRequired,
};



const mapStateToProps = state => ({
    cart: state.cart.addedToCart,
    price: state.cart.total
});


export default connect(mapStateToProps, { fetchProduct, deleteFromCart })(NavCartProfile);