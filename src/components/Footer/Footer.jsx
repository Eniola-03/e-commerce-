

import React from "react";

function Footer (){
    return(
       <>
           <footer>
      <div className="container pt-5 pb-3">
        <div className="row">
          <div className="col-12 col-md-3 columncontent">
            <h5 className="mb-3">Categories</h5>
            <li>Accessories</li>
            <li>jeans</li>
            <li>Men</li>
            <li>New collection</li>
            <li>Sale</li>
            <li>T-shirt</li>
          </div>
          <div className="col-12 col-md-3 columncontent">
            <h5 className="mb-3">Information</h5>
            <li>About us</li>
            <li>Catalog</li>
            <li>Contact us</li>
            <li>Collections</li>
            <li>Password Page</li>
            <li>Privacy policy</li>
            <li>Blog</li>
          </div>
          <div className="col-12 col-md-3 columncontent">
            <h5 className="mb-3">Account</h5>
            <li>My Account</li>
            <li>Log in</li>
            <li>My Addresses</li>
            <li>My Orders</li>
            <li>Password page</li>
            <li>Contact Us</li>
            <li>Latest News</li>
          </div>
          <div className="col-12 col-md-3 columncontent">
            <h5 className="mb-3">Follow Us</h5>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Google+</li>
            <li>Youtube</li>
            <li>Instagram</li>
          </div>
        </div>
        <div className="endnote pt-2">
          <div className="note">
            <small><span><i className="fa-regular fa-copyright"></i>urban people. Commerce electronique propulse par Shopify</span></small>
          </div>
          <div className="logo">
            <span><i className="fa-brands fa-cc-mastercard"></i></span>
            <span><i className="fa-brands fa-cc-paypal"></i></span>
            <span><i className="fa-brands fa-cc-visa"></i></span>
          </div>
        </div>
      </div>
    </footer>

       </>
    )
}

export default Footer