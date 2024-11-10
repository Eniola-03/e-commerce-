import { Link } from "react-router-dom";
import React from "react";

function Navbar() {
    return (
        <>
        <div>
        <header>
           <div className="primary-navbar">
            <div className="container pt-2">
                <div className="bg_dark text-white">
                    <div className="call-on">
                        <p>Order online or call us (1800)000 8088</p>
                    </div>
                    <div className="call-on">
                        <span><i className="fa-solid fa-magnifying-glass"></i>Search</span> &nbsp;
                        <span><i className="fa-solid fa-user"></i></span> &nbsp;
                        <span><i className="fa-solid fa-heart"></i>Wishlist</span> &nbsp;
                        <span>Usd<i className="fa-solid fa-angle-down"></i></span> &nbsp;
                    </div>
                </div>
            </div>
         </div>

          <div className="Secondary-navbar">
            <div className="container">
                <div className="nav-bar">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                          <a className="navbar-brand" href="#">Urban People</a>
                          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                          </button>
                          <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav mx-auto">
                              <li className="nav-item">
                                <Link to='/' className="nav-link active" aria-current="page" href="index.html">Home</Link>
                              </li>
                              <li className="nav-item">
                                <Link to='/catalog' className="nav-link active" aria-current="page" href="catalog.html">Catalog</Link>
                              </li>
                              <li className="nav-item">
                                <Link to='/collections' className="nav-link active" aria-current="page" href="collections.html">Collections</Link>
                              </li>
                              <li className="nav-item">
                                <Link to='/blog' className="nav-link active" aria-current="page" href="blog.html">Blog</Link>
                              </li>
                              <li className="nav-item">
                                <Link to='/sale' className="nav-link active" aria-current="page" href="sale.html">Sale</Link>
                              </li>
                              <li className="nav-item">
                                <Link to='/contactus' className="nav-link active" aria-current="page" href="contactus.html">Contact us</Link>
                              </li>
                              
                            </ul>

                            <div className="cart"><span><i className="fa-solid fa-bag-shopping"></i></span> 0 article(s) </div>
                          </div>
                        </div>
                </nav>
                    
                </div>     
              </div>
           </div>
        
        </header>

        </div>
    </>
    )
}

export default Navbar