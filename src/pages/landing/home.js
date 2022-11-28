import React from "react";
import "../../App.css";
import Cards from "../../components/landing/cards";
import Mainsection from "../../components/landing/mainsection";
import Carousel from "../../components/landing/Carousel";
import Header from "../../components/landing/header";
import Footer from "../../components/landing/footer";
import MainHeader from '../../components/header/Header';

function LandingPage () {
    return (
        <>
            <MainHeader />
            <Header />
            <Mainsection />
            <Cards />
            <Carousel />
            <Footer />
        </>
    );
}

export default LandingPage;