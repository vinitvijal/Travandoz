import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
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
                <a className="nav-link click-scroll" href="#section_1">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_2">Services</a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_3">What we do</a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_4">FAQs</a>
              </li>
              <li className="nav-item">
                <a className="nav-link click-scroll" href="#section_5">Contact</a>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="navbarLightDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">Pages</Link>
                <ul className="dropdown-menu dropdown-menu-light" aria-labelledby="navbarLightDropdownMenuLink">
                  <li><Link className="dropdown-item" to="list">Topics Listing</Link></li>
                  <li><Link className="dropdown-item" to="contact">Contact Form</Link></li>
                </ul>
              </li>
            </ul>
            <div className="d-none d-lg-block">
              <Link to="#top" className="navbar-icon bi-person smoothscroll" />
            </div>
          </div>
        </div>
      </nav>
  )
}
