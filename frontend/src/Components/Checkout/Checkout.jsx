import React from 'react';
import './Checkout.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {
    const checkout = async () => {
        try {
            const response = await fetch('http://localhost:4000/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'auth-token': localStorage.getItem('auth-token') 
                },
            });

            if (response.ok) {
                toast.success('Order placed successfully', {
                    position: "top-right",
                    autoClose: 1500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                // Redirect to homepage after successful checkout
                window.location.replace("/");
            } else {
                toast.error('Failed to place order. Please try again later.', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        } catch (error) {
            console.error('Error during checkout:', error);
            toast.error('Failed to place order. Please try again later.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    };

    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={1500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className='container'>
                <div className='inputfield'>
                    <input type="text" placeholder='Please Enter your delivery address' name="" id="" />
                    <button onClick={checkout}>Buy with Cash on delivery</button>
                </div>
            </div>
        </>
    )
}

export default Checkout;
