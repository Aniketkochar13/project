import React from "react";
import TourCard from "../../shared/TourCard"; // Fix the import path
import tourData from "../../assets/data/tours";
import { Col } from "reactstrap";

const FeaturedTourList = () => { // Use curly braces for the arrow function
  return (
    <>
      {tourData?.map(tour => ( // Use curly braces for map function
        <Col lg="3" className="mb-4" key={tour.id}>
          <TourCard tour={tour} />
        </Col>
      ))}
    </>
  );
};

export default FeaturedTourList;
