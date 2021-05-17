import React from 'react'

const IntroData = ({ img, title, blurb}) => {
    return (
        <>
           <div className="introColumn col-lg-3 col-sm-6">
                <div className="introContainer">
                    <img src={img} alt="laptop" class="img-thumbnail" />
                    <div className="imageHeading">{title}</div>
                    <div className="imageBlurb">{blurb}</div>
                </div>
            </div> 
        </>
    )
}

export default IntroData;
