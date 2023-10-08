import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import worldImg from '../assets/images/world.png';
import experienceImg from "../assets/images/experience.png";

import Subtitle from "../shared/Subtitle"; 
import SearchBar from "../shared/SearchBar"; 
import ServiceList from "../services/ServiceList";
import FeaturedTourList from "../componenets/featured-tours/FeaturedTourList";
import MasonryImagesGallery from "../componenets/Image-gallery/MasonryImagesGallery";
import Testimonials from "../componenets/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";

const Home = () => {
  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="6">
              <div className="hero-content">
                <div className="hero-subtitle d-flex align-items-center">
                  <Subtitle subtitle={'Know Before You Go'} />
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating <span className="highlight">memories</span></h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit sint voluptatibus aspernatur commodi excepturi dolorem distinctio quo expedita impedit hic nisi voluptatum quae maxime, minus cupiditate ea minima incidunt inventore.</p>
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt=" " />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <video src={heroVideo} alt=" " controls />
              </div>
            </Col>
            <Col lg='2'>
              <div className="hero__img-box mt-5">
                <img src={heroImg02} alt=" " />
              </div>
            </Col>
            <SearchBar />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='3'>
              <h5 className="services__subtitle">What we serve</h5>
              <h2 className="services__title">We offer our best services</h2>
            </Col>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5">
              <Subtitle subtitle={'Explore'} />
              <h2 className="feature__tour-title">Our feature tours</h2>
            </Col>
            <FeaturedTourList />
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>With our experience, we will serve you</h2>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse dignissimos ipsa amet accusantium tempore sunt minus quidem, <br /> 
                nulla architecto cumque fuga maxime et quaerat ab perferendis voluptatem accusamus dolores? Necessitatibus?
                </p>
              </div>

              <div className="counter__wrap d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12k+</span>
                  <h6>Successfull Trip</h6>
                </div>
                <div className="counter__box">
                  <span>5k</span>
                  <h6>Years Experience</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Successfull Trip</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'>
              <div className="experience__img">
                <img src={experienceImg} alt=" " />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'}/>
              <h2 className="gallery__title">Visit our customers tour gallery</h2>
            </Col>
            <Col lg='12'>
              <MasonryImagesGallery/>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans Love'}/>
              <h2 className="testimonial__title">What our fans say about us</h2>
            </Col>
            <Col lg='12'></Col>
            <Testimonials/>
          </Row>
        </Container>
        
      </section>
      <Newsletter/>
    </>
  );
};

export default Home;
