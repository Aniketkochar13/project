import React, { useRef, useState } from "react";
import "../styles/tour-details.css";
import { Container, Row, Col, Form, ListGroup } from "reactstrap";
import { useParams } from "react-router-dom";
import tourData from "../assets/data/tours";
import calculateAvgRating from "../utils/avgRating"; // Removed unnecessary "./"
import avatar from "../assets/images/avatar.jpg";
import Booking from "../componenets/Booking/Booking"; // Corrected the import path

const TourDetails = () => {
  const { id } = useParams();
  const reviewMsgRef = useRef("");
  const [tourRating, setTourRating] = useState(null);

  // Get the tour details by ID
  const tour = tourData.find((tour) => tour.id === id);

  if (!tour) {
    return <div>Tour not found.</div>;
  }

  // Destructure properties from the tour object
  const { photo, title, desc, price, address, reviews, city, distance, maxGroupSize } = tour;

  // Calculate the average rating
  const { totalRating, avgRating } = calculateAvgRating(reviews);

  // Options for formatting the date
  const options = { day: "numeric", month: "long", year: "numeric" };

  // Handle the form submission
  const submitHandler = (e) => {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
    // Submit the review to your API (implementation needed)
  };

  return (
    <>
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <div className="tour__content">
                <img src={photo} alt="" />

                <div className="tour__info">
                  <h2>{title}</h2>
                  <div className="s-flex-align-items-center gap-5">
                    <span className="tour__rating d-flex align-items-center gap-1">
                      <i
                        className="ri-star-s-fill"
                        style={{ color: "var(--secondary-color)" }}
                      ></i>
                      {avgRating === 0 ? null : avgRating}
                      {totalRating === 0 ? (
                        " (Not rated)"
                      ) : (
                        <span>({reviews.length})</span>
                      )}
                    </span>

                    <span>
                      <i className="ri-map-pin-user-fill"></i>
                      {address}
                    </span>
                  </div>

                  <div className="tour__extra-details">
                    <span>
                      <i className="ri-map-pin-2-line"></i>
                      {city}
                    </span>
                    <span>&#8377; {price}</span>
                    <span>
                      <i className="ri-map-pin-time-line"></i>
                      {distance}km
                    </span>
                    <span>
                      <i className="ri-group-line"></i>
                      {maxGroupSize} people
                    </span>
                  </div>
                  <h5>Description</h5>
                  <p>{desc}</p>
                </div>

                {/* Tour reviews */}
                <div className="tour__reviews mt-4">
                  <h4>Reviews ({reviews.length} reviews)</h4>
                  <Form onSubmit={submitHandler}>
                    <div className="d-flex align-items-center gap-3 mb-4 rating__group">
                      {[1, 2, 3, 4, 5].map((rating) => (
                        <span
                          key={rating}
                          onClick={() => setTourRating(rating)}
                        >
                          <i className="ri-star-s-fill"></i>
                        </span>
                      ))}
                    </div>

                    <div className="reviews__input">
                      <input
                        type="text"
                        ref={reviewMsgRef}
                        placeholder="Share your thoughts"
                        required
                      />
                      <button
                        className="btn primary__btn text-white"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </Form>

                  <ListGroup className="user-reviews">
                    {reviews.map((review, index) => (
                      <div className="review-item" key={index}>
                        <img src={avatar} alt="" />
                        <div className="d-flex align-items-center justify-content-between">
                          <div>
                            <h5>{review.user}</h5>
                            <p>
                              {new Date(review.date).toLocaleDateString(
                                "en-IN",
                                options
                              )}
                            </p>
                          </div>
                          <span className="d-flex align-items-center">
                            {review.rating} <i className="ri-star-s-fill"></i>
                          </span>
                        </div>
                        <h6>{review.comment}</h6>
                      </div>
                    ))}
                  </ListGroup>
                </div>
                {/* Tour reviews end */}
              </div>
            </Col>

            <Col lg="4">
              <Booking tour={tour} avgRating={avgRating} />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Add your Newsletter component here */}
    </>
  );
};

export default TourDetails;
