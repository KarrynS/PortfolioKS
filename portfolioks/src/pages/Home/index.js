import React from 'react'
import "./style.css";
// import Carousel from "../../components/Carousel/index";
import Intro from "../../components/Intro/index";
import MainContent from "../../components/MainContent/index";

const Home = () => {
    return (
        <>
            {/* <Carousel /> */}
            <Intro/>
            <MainContent />
        </>
    )
}

export default Home;
