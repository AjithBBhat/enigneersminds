import React from "react";

import Image from "next/image";

export default function test() {
  return (
    <>

    {/* test */}
    <div>
  <section className="container1">
        <section className="wrapper1">
          <div className="one"></div>
          <div className="one1"></div>
          {/* Add more divs with classes one2, one3, etc. */}
        </section>
      </section>
    </div>
    {/* ..... */}
      <div className="container-fliud">
        <div
          className="home-banner"
          style={{ width: "100%", height: "100vh", position: "relative" }}
        >
          <Image
            className="img-fluid"
            src="/images/EM_Banner.webp"
            alt="Home Banner"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="container banner-text">
          <div className="row">
            <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <h1>The EM way</h1>
              <h2>
                Holistic Solutions and Services to Transform your Challenges.
              </h2>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12" />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-7 col-sm-7 col-xs-12">
              <div className="intro-img">
                <img
                  src="content/public/images/EM_ Matters.webp"
                  className="img-fluid"
                  alt="intro-image"
                />
              </div>
            </div>
            <div className="col-lg-5 col-md-5 col-sm-5 col-xs-12">
              <div className="intro-text">
                <h2>
                  <span>EM</span>Matters
                </h2>
                <p>
                  Trusted to enable business and operational efficiencies, by
                  global brands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="container-fluid bg">
          <div className="container">
            <div className="intro-text-1">
              <h2>Industry Showcase</h2>
              <a href>View All</a>
            </div>
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="industry-image">
                  <img
                    src="content/public/images/Financial_Institutions.webp"
                    className="img-fluid"
                    alt="Finance-image"
                  />
                  <div className="industry-text">
                    <h3>Financial Institutions</h3>
                    <a href>Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="industry-image">
                  <img
                    src="content/public/images/Manufacturing.webp"
                    className="img-fluid"
                    alt="Manufacture-image"
                  />
                  <div className="industry-text">
                    <h3>Manufacturing</h3>
                    <a href>Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="industry-image">
                  <img
                    src="content/public/images/Healthcare.webp"
                    className="img-fluid"
                    alt="Health-image"
                  />
                  <div className="industry-text">
                    <h3>Healthcare</h3>
                    <a href>Learn More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-9 col-md-9 col-sm-9 col-cs-12">
              <div id="wrap" className="container my-5">
                <div
                  id="carousel"
                  className="carousel slide gallery"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div
                      className="carousel-item active"
                      data-slide-number={0}
                      data-toggle="lightbox"
                      data-gallery="gallery"
                      data-remote="https://source.unsplash.com/vbNTwfO9we0/1600x900.jpg"
                    >
                      <img
                        src="https://source.unsplash.com/vbNTwfO9we0/1600x900.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div
                      className="carousel-item"
                      data-slide-number={1}
                      data-toggle="lightbox"
                      data-gallery="gallery"
                      data-remote="https://source.unsplash.com/DEhwkPYevhE/1600x900.jpg"
                    >
                      <img
                        src="https://source.unsplash.com/DEhwkPYevhE/1600x900.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div
                      className="carousel-item"
                      data-slide-number={2}
                      data-toggle="lightbox"
                      data-gallery="gallery"
                      data-remote="https://source.unsplash.com/-RV5PjUDq9U/1600x900.jpg"
                    >
                      <img
                        src="https://source.unsplash.com/-RV5PjUDq9U/1600x900.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div
                      className="carousel-item"
                      data-slide-number={3}
                      data-toggle="lightbox"
                      data-gallery="gallery"
                      data-remote="https://source.unsplash.com/sd0rPap7Uus/1600x900.jpg"
                    >
                      <img
                        src="https://source.unsplash.com/sd0rPap7Uus/1600x900.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div
                      className="carousel-item"
                      data-slide-number={4}
                      data-toggle="lightbox"
                      data-gallery="gallery"
                      data-remote="https://source.unsplash.com/kmRZFcZEMY8/1600x900.jpg"
                    >
                      <img
                        src="https://source.unsplash.com/kmRZFcZEMY8/1600x900.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                    <div
                      className="carousel-item"
                      data-slide-number={5}
                      data-toggle="lightbox"
                      data-gallery="gallery"
                      data-remote="https://source.unsplash.com/HJDdrWtlkIY/1600x900.jpg"
                    >
                      <img
                        src="https://source.unsplash.com/HJDdrWtlkIY/1600x900.jpg"
                        className="d-block w-100"
                        alt="..."
                      />
                    </div>
                  </div>
                </div>
                {/* Carousel Navigatiom */}
                <div
                  id="carousel-thumbs"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-slide-number={0}>
                      <div className="row mx-0">
                        <div
                          id="carousel-selector-0"
                          className="thumb col-4 px-1 py-2 selected"
                          data-target="#carousel"
                          data-slide-to={0}
                        >
                          <img
                            src="https://source.unsplash.com/vbNTwfO9we0/1600x900.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div
                          id="carousel-selector-1"
                          className="thumb col-4 px-1 py-2"
                          data-target="#carousel"
                          data-slide-to={1}
                        >
                          <img
                            src="https://source.unsplash.com/DEhwkPYevhE/1600x900.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div
                          id="carousel-selector-2"
                          className="thumb col-4 px-1 py-2"
                          data-target="#carousel"
                          data-slide-to={2}
                        >
                          <img
                            src="https://source.unsplash.com/-RV5PjUDq9U/1600x900.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                    <div className="carousel-item " data-slide-number={1}>
                      <div className="row mx-0">
                        <div
                          id="carousel-selector-3"
                          className="thumb col-4 px-1 py-2"
                          data-target="#carousel"
                          data-slide-to={3}
                        >
                          <img
                            src="https://source.unsplash.com/sd0rPap7Uus/1600x900.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div
                          id="carousel-selector-4"
                          className="thumb col-4 px-1 py-2"
                          data-target="#carousel"
                          data-slide-to={4}
                        >
                          <img
                            src="https://source.unsplash.com/kmRZFcZEMY8/1600x900.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                        <div
                          id="carousel-selector-5"
                          className="thumb col-4 px-1 py-2"
                          data-target="#carousel"
                          data-slide-to={5}
                        >
                          <img
                            src="https://source.unsplash.com/HJDdrWtlkIY/1600x900.jpg"
                            className="img-fluid"
                            alt="..."
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="carousel-control-prev"
                    href="#carousel-thumbs"
                    role="button"
                    data-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Previous</span>
                  </a>
                  <a
                    className="carousel-control-next"
                    href="#carousel-thumbs"
                    role="button"
                    data-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    />
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="core-text">
                  <h2>Core Competence</h2>
                  <p>Simple and Transformative.</p>
                </div>
                <div className="intro-text-2">
                  &nbsp;
                  <p>
                    Domain expertise, deep contextual understanding enables you
                    to stay competitive, and delight you customers.
                  </p>
                  &nbsp;
                  <p>
                    Delivering customized solutions mapped to business outcomes
                    and operational efficiencies
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div className="intro-img">
                  <img
                    src="content/public/images/Core_Competence.webp"
                    className="img-fluid"
                    alt="intro-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid alliance">
          <div className="container">
            <div className="core-text">
              <h2>Alliances</h2>

              <div className="carousel" >
                    <div className="logos" />
                    <div className="mask" />
                  </div>
            </div>
            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="client-section">
                  <div className="client">
                    <img
                      src="content/public/images/Liferay.webp"
                      className="img-responsive"
                      alt="liferay"
                    />
                  </div>
                  <div className="client">
                    <img
                      src="content/public/images/Microsoft.webp"
                      className="img-fluid"
                      alt="microsoft"
                    />
                  </div>
                  <div className="client">
                    <img
                      src="content/public/images/AWS.webp"
                      className="img-fluid"
                      alt="aws"
                    />
                  </div>
                  <div className="client">
                    <img
                      src="content/public/images/Snowflake.webp"
                      className="img-fluid"
                      alt="snow flake"
                    />
                  </div>

                  <div className="client"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid ftr">
          <div className="container">
            <div className="row">
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <div className="ftr-logo">
                  <img
                    src="content/public/images/EM_Logo.webp"
                    className="img-fluid"
                    alt="EM_Logo"
                  />
                </div>
              </div>
              <div className="col-lg-2 col-md-2 col-sm-2 col-xs-12">
                <div className="links">
                  <ul>
                    <li>
                      <a href>Industries</a>
                    </li>
                    <li>
                      <a href>Services</a>
                    </li>
                    <li>
                      <a href>Technologies</a>
                    </li>
                    <li>
                      <a href>Resources</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                <div className="links">
                  <ul>
                    <li>
                      <a href>News</a>
                    </li>
                    <li>
                      <a href>Success Stories</a>
                    </li>
                    <li>
                      <a href>Blogs</a>
                    </li>
                    <li>
                      <a href>Carrers</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1 col-xs-12">
                <div className="links">
                  <ul>
                    <li>
                      <a href>Privacy</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                <div className="media">
                  <a href title="LinkedIn">
                    <i className="fab fa-linkedin-in" />
                  </a>
                  <a href title="Twitter">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href title="Youtube">
                    <i className="fab fa-youtube" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="ftr-2">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="copy">
                    <p>© 2024 Engineers Mind. All Rights Reserved.</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                  <div className="powered">
                    <p>
                      Powered by: <a href="https://lumos.in/">LUMOS.in</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
