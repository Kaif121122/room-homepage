import React, { useState } from 'react'
import firstImg from '../images/desktop-image-hero-1.jpg'
import secondImg from '../images/desktop-image-hero-2.jpg'
import thirdImg from '../images/desktop-image-hero-3.jpg'


import arrowImg from '../images/icon-arrow.svg'
import leftSlider from '../images/icon-angle-left.svg'
import rightSlider from '../images/icon-angle-right.svg'
import Header from './Header'

const Main = () => {

    const [show, setShow] = useState(0)

    const myObj = [{
        image: firstImg,
        heading: 'Discover innovative ways to decorate',
        para: 'We provide unmatched quality, comfort, and style for property owners across the country.Our experts combine form and function in bringing your vision to life.Create a room in yourown style with our collection and make your property a reflection of you and what you love.'
    }, {
        image: secondImg,
        heading: 'We are available all across the globe',
        para: ' With stores all over the world, its easy for you to find furniture for your home or place of business.Locally, we’re in most major cities throughout the country.Find the branch nearest you using our store locator.Any questions? Dont hesitate to contact us today.'
    }, {
        image: thirdImg,
        heading: 'Manufactured with the best materials',
        para: 'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office'
    }]

    const changeLeft = () => {
        if (show === 0) {
            setShow(show)
        } else {
            setShow(show - 1)
        }

    }

    const changeRight = () => {
        if (show === 2) {
            setShow(show)
        } else {
            setShow(show + 1)
        }
    }

    return (
        <main className="main-container">
            <Header />
            {myObj.map((elem, index) =>
                index === show ?
                    <div key={index} className="top-container">
                        <div style={{ backgroundImage: `url(${elem.image})` }} className="top-img-container">
                        </div>

                        <div className="top-content-container">
                            <div className="content">
                                <h1 className="common-h1">{elem.heading}</h1>
                                <p className="common-para">{elem.para}</p>

                                <button className="btn">Shop now <span><img src={arrowImg} alt="" className="arrow-img" /></span></button>
                            </div>

                            <div className="slider-container">
                                <img onClick={() => changeLeft()} src={leftSlider} alt="" className="left-slider" />
                                <img onClick={() => changeRight()} src={rightSlider} alt="" className="right-slider" />
                            </div>
                        </div>
                    </div> : null

            )}
            <div className="bottom-container">
                <div className="first-bottom-img">
                </div>
                <div className="middle-data-container">
                    <h2 className="common-h2">
                        About our furniture</h2>
                    <p className="common-para">
                        Our multifunctional collection blends design and function to suit your individual taste.
                        Make each room unique, or pick a cohesive theme that best express your interests and what
                        inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                        or anything in between. Product specialists are available to help you create your dream space.
                    </p>
                </div>
                <div className="second-bottom-img"></div>
            </div>
        </main>
    )
}

export default Main