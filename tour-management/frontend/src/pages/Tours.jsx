import React, { useState, useEffect } from "react";
import CommonSection from "../shared/CommonSection";
import "../styles/tour.css";
import TourCard from "../shared/TourCard"; // Corrected the import path
import tourData from "../assets/data/tours";
import SearchBar from "../shared/SearchBar"; // Corrected the import path
import Newsletter from "../shared/Newsletter"; // Corrected the import path
import { Container, Row, Col } from "reactstrap";
import tour from '../assets/images/tour.jpg';

const Tours = () => {
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const pages = Math.ceil(tourData.length / 4); // Calculate pages based on the number of tours
    setPageCount(pages);
  }, []);

  return (
    <>
      <CommonSection title={"All Tours"} 
      img src={tour} alt=" " />
      
      <section>
        <Container>
          <Row>
            <Col lg="12"> {/* Updated Col size to take the full width */}
              <SearchBar />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="pt-0">
        <Container>
          <Row>
            {tourData
              .slice(page * 4, page * 4 + 4) // Added slice to display only 4 tours per page
              .map((tour) => (
                <Col lg="3" className="mb-4" key={tour.id}>
                  <TourCard tour={tour} />
                </Col>
              ))}
            <Col lg="12">
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                {[...Array(pageCount).keys()].map((number) => (
                  <span
                    key={number}
                    onClick={() => setPage(number)}
                    className={page === number ? "active__page" : ""}
                  >
                    {number + 1}
                  </span>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Newsletter />
    </>
  );
};

export default Tours;
