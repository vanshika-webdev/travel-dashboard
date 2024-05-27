import React from "react";
import "./homepage.css";
import HeroBanner from "./HeroBanner";
import DestinationCard from "./components/DestinationCard";
import TestimonialsComp from "./TestimonialComp";

function HomePage() {
  return (
    <>
      <div className="home-page">
        <div className="container">
          <h6 className="heading">Create Destination</h6>
          <hr />
          <DestinationCard />

          {/* HomeScreen Section */}
          <h6 className="heading">Home Screen</h6>
          <hr />
          <HeroBanner bannerType="HOME" />
          {/* <HeroBanner /> */}
          <button className="add-more">Add More Section</button>

          {/* Welcome to India Section */}
          <h6 className="heading">Welcome to India Sec</h6>
          <hr />
          <HeroBanner bannerType="WELCOME" />
          <button className="add-more">Add More Section</button>

          {/* Why Choose Section */}
          <h6 className="heading">Why Choose Section</h6>
          <hr />
          <HeroBanner bannerType="CHOOSE" />
          {/* <div className="hero d-flex flex-wrap">
            <div className="hero-banner">
              <h5>Hero Banner(1374W*811H)</h5>
              <div className="upload">
                <div className="cross">
                  <input type="file" name="" id="" />
                  <i class="bi bi-x"></i>
                </div>

                <i class="bi bi-eye inner"></i>
                <button type="button">Upload</button>
              </div>
            </div>
            <div className="hero-banner">
              <h5>Top Header</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <div className="hero-banner">
              <h5>Header</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <div className="hero-banner">
              <h5>Sub Header</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <div className="hero-banner">
              <h5>CTA</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="text" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <button className="remove-btn">Remove</button>
          </div> */}
          <button className="add-more">Add More Section</button>

          {/* Testimonial Section */}
          <h6 className="heading">Testimonial Section</h6>
          <hr />
          {/* <div className="hero d-flex">
            <div className="hero-banner">
              <h5>No. Of Stars</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>

            <div className="hero-banner">
              <h5>Name</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <div className="hero-banner testimonialdisc">
              <h5>Description</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="text" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <button className="remove-btn">Remove</button>
          </div> */}

          <TestimonialsComp />
          {/* 
          <div className="hero d-flex">
            <div className="hero-banner">
              <h5>No. Of Stars</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>

            <div className="hero-banner">
              <h5>Name</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <div className="hero-banner testimonialdisc">
              <h5>Description</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="text" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <button className="remove-btn">Remove</button>
          </div>

          <div className="hero d-flex">
            <div className="hero-banner">
              <h5>No. Of Stars</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>

            <div className="hero-banner">
              <h5>Name</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="Header Title" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <div className="hero-banner testimonialdisc">
              <h5>Description</h5>
              <div className="upload">
                <div className="cross">
                  <input type="text" name="" id="" placeholder="text" />
                  <i class="bi bi-x"></i>
                </div>
              </div>
            </div>
            <button className="remove-btn">Remove</button>
          </div> */}
          {/* <button className="add-more">Add More Section</button> */}
          <div className="btns">
            <button className="cancel">Cancel</button>
            <button className="save">Save</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
