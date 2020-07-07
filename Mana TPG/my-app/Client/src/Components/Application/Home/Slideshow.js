import React from 'react';
import { Carousel } from 'antd';
import one from './one.jpg';
import two from './two.jpg';
import three from './three.jpg';
import four from './four.jpg';
import './Slideshow.css'

class Slideshow extends React.Component{

    render(){
        return(
            <div className = "border">
            <Carousel autoplay>
                    <div><img src={one} alt="No img"/></div>
                    <div><img src={two} alt="No img"/></div>
                    <div><img src={three} alt="No img"/></div>
                    <div><img src={four} alt="No img"/></div>
            </Carousel>
            </div>
        )
    }
}


export default Slideshow;