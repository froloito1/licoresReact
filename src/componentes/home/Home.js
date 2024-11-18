import React from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Footer from "../Footer/Footer";





const Home=()=>{
    return (
        <>
        
        <Navbar/>
        <Banner/>
        <div className='product-card-container'>
        <Products/>
        </div>
        <Footer/>
         
        </>
       
    )
}
export default Home;