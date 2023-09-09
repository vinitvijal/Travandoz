import React from 'react'
import { Link } from 'react-router-dom'

export default function Topic() {
  return (
    <div className="topics-listing-page" id="top">
    <main>
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <i className="bi-back" />
                <span>TRAVANDOZ</span>
              </Link>
              <div className="d-lg-none ms-auto me-4">
                <Link to="#top" className="navbar-icon bi-person smoothscroll" />
              </div>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-lg-5 me-lg-auto">
                  <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/#section_1">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/#section_2">Browse Topics</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/#section_3">How it works</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/#section_4">FAQs</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link click-scroll" to="/#section_5">Contact</Link>
                  </li>
                  <li className="nav-item dropdown">
                    <Link className="nav-link dropdown-toggle" to="#section_5" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                    <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                      <li><Link className="dropdown-item active" to="/list">Topics Listing</Link></li>
                      <li><Link className="dropdown-item" to="/contact">Contact Form</Link></li>
                    </ul>
                  </li>
                </ul>
                <div className="d-none d-lg-block">
                  <Link to="#top" className="navbar-icon bi-person smoothscroll" />
                </div>
              </div>
            </div>
          </nav>
          <header className="site-header d-flex flex-column justify-content-center align-items-center">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-5 col-12">
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><Link to="index.html">Homepage</Link></li>
                      <li className="breadcrumb-item active" aria-current="page">Topics Listing</li>
                    </ol>
                  </nav>
                  <h2 className="text-white">Topics Listing</h2>
                </div>
              </div>
            </div>
          </header>
          <section className="section-padding">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12 text-center">
                  <h3 className="mb-4">Popular Topics</h3>
                </div>
                <div className="col-lg-8 col-12 mt-3 mx-auto">
                  <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                      <img src="images/topics/undraw_Remote_design_team_re_urdx.png" className="custom-block-image img-fluid" alt="" />
                      <div className="custom-block-topics-listing-info d-flex">
                        <div>
                          <h5 className="mb-2">Web Design</h5>
                          <p className="mb-0">Topic Listing includes home, listing, detail and contact pages. Feel free to modify this template for your custom websites.</p>
                          <Link to="topics-detail.html" className="btn custom-btn mt-3 mt-lg-4">Learn More</Link>
                        </div>
                        <span className="badge bg-design rounded-pill ms-auto">14</span>
                      </div>
                    </div>
                  </div>
                  <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                      <img src="images/topics/undraw_online_ad_re_ol62.png" className="custom-block-image img-fluid" alt="" />
                      <div className="custom-block-topics-listing-info d-flex">
                        <div>
                          <h5 className="mb-2">Advertising</h5>
                          <p className="mb-0">Visit TemplateMo website to download free CSS templates. Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus</p>
                          <Link to="topics-detail.html" className="btn custom-btn mt-3 mt-lg-4">Learn More</Link>
                        </div>
                        <span className="badge bg-advertising rounded-pill ms-auto">30</span>
                      </div>
                    </div>
                  </div>
                  <div className="custom-block custom-block-topics-listing bg-white shadow-lg mb-5">
                    <div className="d-flex">
                      <img src="images/topics/undraw_Podcast_audience_re_4i5q.png" className="custom-block-image img-fluid" alt="" />
                      <div className="custom-block-topics-listing-info d-flex">
                        <div>
                          <h5 className="mb-2">Podcast</h5>
                          <p className="mb-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit animi necessitatibus</p>
                          <Link to="topics-detail.html" className="btn custom-btn mt-3 mt-lg-4">Learn More</Link>
                        </div>
                        <span className="badge bg-music rounded-pill ms-auto">20</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-12">
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center mb-0">
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Previous">
                          <span aria-hidden="true">Prev</span>
                        </Link>
                      </li>
                      <li className="page-item active" aria-current="page">
                        <Link className="page-link" to="#">1</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">2</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">3</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">4</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#">5</Link>
                      </li>
                      <li className="page-item">
                        <Link className="page-link" to="#" aria-label="Next">
                          <span aria-hidden="true">Next</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
          <section className="section-padding section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <h3 className="mb-4">Trending Topics</h3>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-3 mb-4 mb-lg-0">
                  <div className="custom-block bg-white shadow-lg">
                    <Link to="topics-detail.html">
                      <div className="d-flex">
                        <div>
                          <h5 className="mb-2">Investment</h5>
                          <p className="mb-0">Lorem Ipsum dolor sit amet consectetur</p>
                        </div>
                        <span className="badge bg-finance rounded-pill ms-auto">30</span>
                      </div>
                      <img src="images/topics/undraw_Finance_re_gnv2.png" className="custom-block-image img-fluid" alt="" />
                    </Link>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-12 mt-lg-3">
                  <div className="custom-block custom-block-overlay">
                    <div className="d-flex flex-column h-100">
                      <img src="images/businesswoman-using-tablet-analysis.jpg" className="custom-block-image img-fluid" alt="" />
                      <div className="custom-block-overlay-text d-flex">
                        <div>
                          <h5 className="text-white mb-2">Finance</h5>
                          <p className="text-white">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi necessitatibus aperiam repudiandae nam omnis</p>
                          <Link to="topics-detail.html" className="btn custom-btn mt-2 mt-lg-3">Learn More</Link>
                        </div>
                        <span className="badge bg-finance rounded-pill ms-auto">25</span>
                      </div>
                      <div className="social-share d-flex">
                        <p className="text-white me-4">Share:</p>
                        <ul className="social-icon">
                          <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-twitter" />
                          </li>
                          <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-facebook" />
                          </li>
                          <li className="social-icon-item">
                            <Link to="#" className="social-icon-link bi-pinterest" />
                          </li>
                        </ul>
                        <Link to="#" className="custom-icon bi-bookmark ms-auto" />
                      </div>
                      <div className="section-overlay" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <footer className="site-footer section-padding">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-12 mb-4 pb-2">
                <Link className="navbar-brand mb-2" to="index.html">
                  <i className="bi-back" />
                  <span>Topic</span>
                </Link>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <h6 className="site-footer-title mb-3">Resources</h6>
                <ul className="site-footer-links">
                  <li className="site-footer-link-item">
                    <Link to="#" className="site-footer-link">Home</Link>
                  </li>
                  <li className="site-footer-link-item">
                    <Link to="#" className="site-footer-link">How it works</Link>
                  </li>
                  <li className="site-footer-link-item">
                    <Link to="#" className="site-footer-link">FAQs</Link>
                  </li>
                  <li className="site-footer-link-item">
                    <Link to="#" className="site-footer-link">Contact</Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
                <h6 className="site-footer-title mb-3">Information</h6>
                <p className="text-white d-flex mb-1">
                  <Link to="tel: 305-240-9671" className="site-footer-link">
                    305-240-9671
                  </Link>
                </p>
                <p className="text-white d-flex">
                  <Link to="mailto:info@company.com" className="site-footer-link">
                    info@company.com
                  </Link>
                </p>
              </div>
              <div className="col-lg-3 col-md-4 col-12 mt-4 mt-lg-0 ms-auto">
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    English</button>
                  <ul className="dropdown-menu">
                    <li><button className="dropdown-item" type="button">Thai</button></li>
                    <li><button className="dropdown-item" type="button">Myanmar</button></li>
                    <li><button className="dropdown-item" type="button">Arabic</button></li>
                  </ul>
                </div>
                <p className="copyright-text mt-lg-5 mt-4">Copyright © 2048 Topic Listing Center. All rights reserved.
                  <br /><br />Design: <Link rel="nofollow" to="https://templatemo.com" target="_blank">TemplateMo</Link></p>
              </div>
            </div>
          </div>
        </footer>
      </div>
  )
}
