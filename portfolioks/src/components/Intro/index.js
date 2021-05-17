import React from 'react'
import "./style.css";
import IntroData from "./introData";
//importing images
import ImgOne from "../../img/macbookswirl.jpg";
import ImgTwo from "../../img/basics.jpg";
import ImgThree from "../../img/teamwork2.jpg";
import ImgFour from "../../img/drive.jpg";

const introArray = [
    {
        img: ImgOne,
        title: "Full Stack Software Developer",
        blurb: "with a passion for learning and eye for detail"
    },
    {
        img: ImgTwo,
        title: "Think outside the box",
        blurb: "Never afraid to return back to basics and push boundaries"
    },
    {
        img: ImgThree,
        title: "Collaboration",
        blurb: "Always ready to listen and keen to begin solving problems"
    },
    {
        img: ImgFour,
        title: "Drive",
        blurb: "Driven by a passion to know better with each iteration"
    }
]


const Intro = () => {
    return (
        <>
        <div className="introContainer">
            <div className="row introRow">
                {introArray.map((intro, index) => {
                    return (
                        <IntroData img={intro.img}
                            title={intro.title}
                            blurb={intro.blurb}
                        />
                    )
                })}
            </div>
        </div>
        



        </>
            )
        }

export default Intro;
    