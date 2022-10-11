import React, { useState, useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { AiOutlineHeart } from "react-icons/ai";
import { Card} from "react-bootstrap";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './CardsSlide.css'

const CardsSlide = (props) => {
  function SampleArrow(props) {
    const { className, style, onClick } = props;
    
    return (
      <div
        className={className}
        style={{ ...style, background: "black" }}
        onClick={onClick}
      />
    );
  }
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <SampleArrow />,
    prevArrow: <SampleArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  const [property, setProperty] = useState([]);

  useEffect(() => {
    axios.get(`https://api.xentice.com/api/postadSelect`).then((response) => {
      console.log(response.data);
      setProperty(response.data);
    });
  }, []);
  return (
    <div className="container">
      <div className="cardMain">
        <div>         
          <h5><props.logo width='25px' height='25px'/>{props.title}</h5>
        </div>
        <div>
          <a href="#explore">Explore more</a>
        </div>
      </div>
      <div className="posters">
        <Slider {...settings}>
        {property
          .filter(
            (obj) => JSON.parse(obj.propertyType).name === props.mode
          )
          .map((obj) => {
            return (
              <Card className="cards">
                <Card.Img className="card-img ImageStyle" variant="top" src={JSON.parse(obj.images)} />
                <Card.Body>
                  <Card.Title className='titleFav'>
                    {JSON.parse(obj.details).title}
                      <AiOutlineHeart className="heart" />                   
                  </Card.Title>
                  <Card.Text>
                    <HiOutlineLocationMarker />
                    {JSON.parse(obj.location).city}
                  </Card.Text>
                  <Card.Link className="me-auto" href="#">
                    Explore Now
                  </Card.Link>
                </Card.Body>
              </Card>
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

export default CardsSlide