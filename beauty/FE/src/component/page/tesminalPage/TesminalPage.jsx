import React from "react";
import Header from "../../shared/header";
import Footer from "../../shared/footer";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const TerminalPage = () => {
  return (
    <div>
      <Header />
      {/* Header Start */}
      <div className="container-fluid bg-breadcrumb py-5">
        <div className="container text-center py-5">
          <h3 className="text-white display-3 mb-4">Our testimonial</h3>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item"><a href="#">Pages</a></li>
            <li className="breadcrumb-item active text-white">testimonial</li>
          </ol>
        </div>
      </div>
      {/* Header End */}

      {/* Testimonial Start */}
      <div className="container-fluid testimonial py-5" style={{ background: 'var(--bs-secondary)' }}>
        <div className="container py-5">
          <div className="text-center mx-auto mb-5" style={{ maxWidth: 800 }}>
            <p className="fs-4 text-uppercase text-primary">Testimonial</p>
            <h1 className="display-4 mb-4 text-white">What Our Clients Say!</h1>
          </div>
          <OwlCarousel
            className="owl-theme"
            loop
            margin={10}
            nav
            dots={false}
            autoplay
            autoplayTimeout={3000}
            responsive={{
              0: { items: 1 },
              600: { items: 2 },
              1000: { items: 3 },
            }}
          >
            {[1, 2, 3].map((item, index) => (
              <div className="testimonial-item rounded p-4" key={index}>
                <div className="row">
                  <div className="col-4">
                    <div className="d-flex flex-column mx-auto">
                      <div className="rounded-circle mb-4" style={{ border: 'dashed', borderColor: 'var(--bs-white)' }}>
                        <img src={`assets/img/testimonial-${item}.jpg`} className="img-fluid rounded-circle" alt="Client" />
                      </div>
                      <div className="text-center">
                        <h4 className="mb-2 text-primary">Person Name</h4>
                        <p className="m-0 text-white">Profession</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-8">
                    <div className="position-absolute" style={{ top: 20, right: 25 }}>
                      <i className="fa fa-quote-right fa-2x text-secondary" />
                    </div>
                    <div className="testimonial-content">
                      <div className="d-flex mb-4">
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star text-primary" />
                        <i className="fas fa-star" />
                      </div>
                      <p className="fs-5 mb-0 text-white">
                        Lorem ipsum dolor sit amet elit, sed do eiusmod tempor ut labore et dolore magna aliqua is simply dummy text of the printing and typesetting industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </OwlCarousel>
        </div>
      </div>
      {/* Testimonial End */}
      <Footer />
    </div>
  );
};

export default TerminalPage;
