import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Animi atque culpa cum eaque harum maiores optio repudiandae sapiente tenetur unde?
                        Animi atque culpa cum eaque harum maiores optio repudiandae sapiente tenetur unde?
                    </p>
                </div>
                <div className="img-container">
                    <img src={heroImg} alt="woman" className='img'/>
                </div>
                
            </div>
        </section>
    )
}
export default Hero
