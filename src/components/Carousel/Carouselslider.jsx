import React, { Component } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

import './Carousel.css';
import Card from '../Card/DayCard';

const settings = {
    slidesToShow: 3,
    infinite:true,
    nextArrow: <SamplePrevArrow icon={faArrowRight} />,
    prevArrow: <SamplePrevArrow icon={faArrowLeft} />
};

function SamplePrevArrow(props) {
    const { className, onClick ,icon} = props;
    return (
        <div
            className={className}
            onClick={onClick}>
                <FontAwesomeIcon icon={icon} size="lg"/>
        </div>
    );
  }
export default class Carouselslider extends Component {
    constructor(props){
        super(props);
        this.state={
            content:[]
        }
    }

    
    componentWillMount(){
    }
    componentWillReceiveProps(nextProps){
        console.log("nextis",nextProps);
        
    }
    render() {
       const { data,unit } = this.props;
        return (
            <Slider {...settings}>
                {Object.keys(data).map( item =>
                    <div className="">
                        <Card date={item} temp={data[item][0].main.temp} unit={unit} onClick={()=>this.props.onClick(data[item])}></Card>
                    </div>
                )}
            </Slider>
        )
    }
}
