import React from 'react';
import {Link} from 'react-router-dom';
import './cart.css';
import Header from '../Header/Header';

const Cart = () => {
    return (
        <>
            <Header/>
            <section className="page-heading">
                <div className="container">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item">
                                <Link to="/" className="home">
                                    Home
                                    <div className="line"></div>
                                </Link>
                            </li>
                            <li className="breadcrumb-item active">
                                Cart
                            </li>
                        </ol>
                    </nav>
                    <h1>Cart</h1>
                </div>
            </section>
            <section className="cart-area">
                <div className="container">
                    <table className="table product-table">
                        <thead>
                            <tr className="table-heading">
                                <th>
                                    Product
                                </th>
                                <th>

                                </th>
                                <th>
                                    Price
                                </th>
                                <th>

                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="img-column">
                                    <img src="images/course_img_1.jpg" className="img-fluid"/>
                                </td>
                                <td style={{paddingLeft: '10px'}}>
                                    Angular - The Complete Guide (2020 Edition)
                                </td>

                                <td>
                                    $49.99
                                </td>
                                <td>
                                    <div className="remove-item">
                                        <span>
                                            Remove
                                            <div className="line-1"></div>
                                            <div className="line-2"></div>
                                        </span>
                                    </div>
                                </td>
                                
                            </tr>
                        </tbody>
                    </table>
                    <div className="lower-button">
                        <div className="continue-clear-btn">
                            <button type="button" className="">Continue shoping</button>
                            <span className="clear">
                                <span>
                                    <i className="fa fa-times"></i>
                                </span>
                                <span>Clear cart</span>
                            </span>
                        </div>
                        <div className="update-cart">
                            <button type="button" disabled>Update cart</button>
                        </div>
                    </div>
                    <div className="total-n-coupon">
                        <div className="coupon">
                            <h6>Coupon Discount</h6>
                            <p>Enter coupon code if you have.</p>
                            <input type="text" className="" placeholder="Coupon code" />
                            <button type="button">Apply coupon</button>
                        </div>
                        <div className="total">
                            <table className="table">
                                <thead>
                                    
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="subtotal">
                                            Subtotal
                                        </td>
                                        <td className="sub-amt">
                                            $49.99
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="total-txt">
                                            Total
                                        </td>
                                        <td className="total-amt">
                                            $49.99
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <button type="button" className="checkout-btn">Checkout</button>
                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default Cart;