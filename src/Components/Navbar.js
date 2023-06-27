import React, { Component } from "react";
import { Link } from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="/Home">
              {/* svg not sized properly and bolt is not visible */}
              {/* <img src="" alt="logo" width={30} height={24} class="d-inline-block align-text-top"/> */}
            {/* <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"viewBox="0 0 59.54 59.54" width="100px" height="100px" fill="#ffffff">

              <g id="SVGRepo_bgCarrier" strokeWidth="0" transform="translate(14.88425,14.88425), scale(0.5)">

              <rect x="0" y="0" width="59.54" height="59.54" rx="29.77" fill="#f51800" strokewidth="0"/>

              </g>

              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.11907399999999999"/>

              <g id="SVGRepo_iconCarrier"> <polygon style={{fill:'#fbff00',stroke:'#000000',strokeWidth:'1.78611',strokeMiterlimit:'10', points:"30.384,1 20.384,18 26.384,18 18.384,34 24.384,34 17.384,54 37.384,28 32.384,28 41.384,11 37.384,11 43.384,1 "}}/> </g>

            </svg> */}
              {this.props.title}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" to="/Home">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/general">General</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item">
                  <Link className="nav-link" to="/technology">Technology</Link></li>
              </ul>
              <form className="d-flex" role="search">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button className="btn btn-outline-success" type="submit">
                  <strong>Search</strong>
                </button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navbar;
