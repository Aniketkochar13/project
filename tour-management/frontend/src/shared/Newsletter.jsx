import React from 'react';
import "./newsletter.css"; // Corrected the import statement
import { Container, Row, Col } from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png'; // Corrected the import statement

const Newsletter = () => {
  return (
    <section className='newsletter'>
      <Container>
        <Row>
          <Col lg='6'>
            <div className="newsletter_content">
              <h2>Subscribe now to get useful traveling information.</h2>
              <div className="newsletter_input">
                <input type="email" placeholder='Enter your email' />
                <button className="btn newsletter__btn">Subscribe</button>
              </div>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus dolore praesentium esse aliquam quibusdam omnis in alias similique reprehenderit hic. Ullam in incidunt veritatis eaque nisi at itaque aspernatur optio.</p>
            </div>
          </Col>
          <Col lg='6'>
            <div className="newsletter__img">
                <img src={maleTourist} alt=" " />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Newsletter;
