import React, { Component } from 'react';
import { HeroTextContainer, CompanyName, ProductName, ProductDescription, ProductPriceWrapper, RunThroughtTheJungle, ProductActivePrice, ProductActiveDiscount, ProductNormalPrice, AddToCartWrapper, QuantityWrapper, MinusBtn, ActiveQuantity, PlusBtn, AddToCartButton } from "./HeroTextStyle";
import { BsCart3 } from "react-icons/bs";
import { BiMinus, BiPlus } from "react-icons/bi";
// Redux
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addToCart } from "../../../Actions/CartActions";



class HeroText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            prodQuantity: 1
        }
    }


    // Quantity methods.
    plusQuantity = () => {
        this.setState({
            prodQuantity: this.state.prodQuantity + 1
        })
    };

    minusQuantity = () => {
        if (this.state.prodQuantity === 1) {
            this.setState({
                prodQuantity: 1
            })
        } else {
            this.setState({
                prodQuantity: this.state.prodQuantity - 1
            })
        }
    };



    // Add to cart.
    onClickToAddItem() {
        const item = {
            productThumbnail: "./images/image-product-1-thumbnail.jpg",
            productName: "Fall Limited Edition Sneakers",
            productUnitPrice: 125.00,
            productUnitTotal: this.state.prodQuantity,
            total: 125 * this.state.prodQuantity
        }

        this.props.addToCart(item);
        this.setState({
            prodQuantity: 1
        })
    };




    render() {
        return (
            <HeroTextContainer>
                <CompanyName>{this.props.product.company}</CompanyName>
                <ProductName>{this.props.product.productName}</ProductName>
                <ProductDescription>{this.props.product.productDesc}</ProductDescription>
                <ProductPriceWrapper>
                    <RunThroughtTheJungle>
                        <ProductActivePrice>$ {this.props.product.productUnitPrice}</ProductActivePrice>
                        <ProductActiveDiscount>{this.props.product.productDiscount}%</ProductActiveDiscount>
                    </RunThroughtTheJungle>
                    <ProductNormalPrice>$ {this.props.product.productOriginalPrice}</ProductNormalPrice>
                </ProductPriceWrapper>
                <AddToCartWrapper>
                    <QuantityWrapper>
                        <MinusBtn onClick={this.minusQuantity}><BiMinus /></MinusBtn>
                        <ActiveQuantity>{this.state.prodQuantity}</ActiveQuantity>
                        <PlusBtn onClick={this.plusQuantity}><BiPlus /></PlusBtn>
                    </QuantityWrapper>
                    <AddToCartButton onClick={() => this.onClickToAddItem()}><BsCart3 /> Add to cart</AddToCartButton>
                </AddToCartWrapper>
            </HeroTextContainer>
        )
    }
}



HeroText.propTypes = {
    addToCart: PropTypes.func.isRequired
};



const mapStateToProps = state => ({
    product: state.cart.product
});


export default connect(mapStateToProps, { addToCart })(HeroText);