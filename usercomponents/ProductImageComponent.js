import React,{useEffect,useState} from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


var productImage = {
    dots: false,
    arrow: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    focusOnSelect:true,
    
}

var sliderNav = {
    slidesToShow: 2,
    slidesToScroll: 1,
    asNavFor: '.slider-for',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    vertical: true,
    centerMode: true
}


export default function ProductImageComponent() {

    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();
    const images =["boat.webp","b3.webp","b4.webp","b5.webp","b1.webp",]

    const setImageSlider = () => {
        return images.map((item) => {
            return (<div style={{ display: 'flex', justifyContent:'center',width:'50%'}}>
                <img src="zeb.webp" alt="xx" style={{ display: 'flex', justifyContent:'center',width: '10%',paddingLeft:'25%',height:'20%'}} />
            </div>)
        })

    }

    return (<div>
        <div style={{ display: 'flex', justifyContent:'center' }}>
            <div style={{ width: '100%',border:'1px solid #b2bec3', borderRadius:'7px',margin:'10px 5px 5px 40px' }}>
                <Slider {...productImage}>
                    {setImageSlider()}
                </Slider>
            </div>
        </div>
    </div>)
}