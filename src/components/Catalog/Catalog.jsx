import React from "react"
import img1 from '../images/long-girl_dugro1.png'
import img2 from '../images/bird-2_tkp6jm.png'
import img3 from '../images/Plain-shirt_nejuvy.png'
import img4 from '../images/plainshirt-2_kboujs.png'
import img5 from '../images/shirt-red_ozzu74.png'
import img6 from '../images/cap_psbpex.png'
import img7 from '../images/bird-shirt_dd54zl.png'
import img8 from '../images/shirt-red_ozzu74.png'
import img9 from '../images/cap_psbpex.png'
import img10 from '../images/bird-shirt_dd54zl.png'
import img11 from '../images/shirt-red_ozzu74.png'
import img12 from '../images/cap_psbpex.png'
import img13 from '../images/bird-shirt_dd54zl.png'

function Catalog () {
    return (
        <>
    <section>
      <div className="container pt-3">
        <nav style={{"--bs-breadcrumb-divider":'>'}} aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Catalog</li>
          </ol>
        </nav>
      </div>
    </section>

    <section>
      <div className="container">
        {/*---------------SEction-one---------------*/}    
        <div className="main pt-5">
          <div className="sectionone">
            <div className="content">
              <h5 className="mb-3">COLLECTIONS</h5>
                <li>Accessories</li>
                <li>Jeans</li>
                <li>Men</li>
                <li>New Collection</li>
                <li>Sale</li>
                <li>T-Shirts</li>
            </div>
            <div className="img">
              <img src={img1}/>
              <p>NEW COLLECTION<br/><small>OF FASHION CLOTHES</small></p>
            </div>
            <div className="Products pt-3">
              <h5>PRODUCTS</h5>
              <div className="product1 pt-3">
                <img src={img2} width="125px"/>
                <div className="tag">
                  <p>Indigo Drak T-shirt <br/> $26.00 <strike> $39.00</strike></p>
                  <button type="button" className="btn btn-dark">APERCU</button>
                </div>
              </div>
              <div className="product2 pt-3">
                <img src={img3} width="125px"/>
                <div className="tag">
                  <p>Pigeon T-shirt <br/> $12.00 <strike> $20.00</strike></p>
                  <button type="button" className="btn btn-dark">APERCU</button>
                </div>
              </div>
              <div className="product3 pt-3">
                <img src={img4} width="125px"/>
                <div className="tag">
                  <p>Dot T-shirt Cred <br/> $22.00 <strike> $60.00</strike></p>
                  <button type="button" className="btn btn-dark">APERCU</button>
                </div>
              </div>
            </div>
          </div>
  
          {/*--------------Section-two-----------------*/}
          <div className="sectiontwo">
            <h1 className="pb-2">PRODUITS</h1>
            <div className="d-grid gap-2 d-md-block">
              <button className="btn btn-dark" type="button">TOUS</button>
              <button className="btn btn-secondary" type="button">Brand</button>
              <button className="btn btn-secondary" type="button">Clothes</button>
              <button className="btn btn-secondary" type="button">Fashion</button>
              <button className="btn btn-secondary" type="button">Trend</button>
              <button className="btn btn-secondary" type="button">Urban</button>
            </div>
            <div className="container pt-3">
              <nav className="navbar navbar-expand-lg navbar-light bg-light ">
                <div className="container-fluid">
                  <a className="navbar-brand" href="#">
                    <span><i className="fa-solid fa-bars"></i></span>
                    <span><i className="fa-solid fa-list"></i></span>
                  </a>
                  <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                      <li className="nav-item dropdown">
                          <label >Select:</label>
                          <select name="dropdown-item" id="dropdown" placeholder="Categories">
                            <option value="T-shirts">T-shirts</option>
                            <option value="Jeans">Jeans</option>
                            <option value="Collections">Collections</option>
                          </select>
                      </li>
                    </ul>
                  </div>
                  <div className="nav-item ">
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                      <small>20 article(s)</small>&nbsp;
                      <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                          <li className="nav-item dropdown">
                              <label>Amount:</label>
                              <select name="dropdown-item" id="dropdown" >
                                <option value="one">1</option>
                                <option value="two">2</option>
                                <option value="three">3</option>
                                <option value="four">4</option>
                                <option value="five">5</option>
                                <option value="six">6</option>
                                <option value="seven">7</option>
                                <option value="eight">8</option>
                                <option value="nine">9</option>
                              </select>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="row mx-auto pt-3">
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img5} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h6 className="card-subtitle mb-2 text-muted">USA</h6>
                      <p className="card-text">MEN TEE TOPS</p>
                      <small>$26.00-$55.0</small>
                    </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img6} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                       <h6 className="card-subtitle mb-2 text-muted">Italy</h6>
                       <p className="card-text">INDIGO STRAPBACK</p>
                       <small>$30.00</small>
                   </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img7} className="card-img-top" alt="..."/>
                   <div className="card-body text-center">
                     <h6 className="card-subtitle mb-2 text-muted">USA</h6>
                     <p className="card-text">INDIGO DARK T-SHIRT</p>
                     <small className="card-price">$26.00</small>
                    </div>
                </div>
              </div>
            </div>
            <div className="row mx-auto pt-3">
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img8} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h6 className="card-subtitle mb-2 text-muted">USA</h6>
                      <p className="card-text">MEN TEE TOPS</p>
                      <small>$26.00-$55.0</small>
                    </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img9} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                       <h6 className="card-subtitle mb-2 text-muted">Italy</h6>
                       <p className="card-text">INDIGO STRAPBACK</p>
                       <small>$30.00</small>
                   </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img10} className="card-img-top" alt="..."/>
                   <div className="card-body text-center">
                     <h6 className="card-subtitle mb-2 text-muted">USA</h6>
                     <p className="card-text">INDIGO DARK T-SHIRT</p>
                     <small className="card-price">$26.00</small>
                    </div>
                </div>
              </div>
            </div>
            <div className="row mx-auto pt-3">
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img11} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                      <h6 className="card-subtitle mb-2 text-muted">USA</h6>
                      <p className="card-text">MEN TEE TOPS</p>
                      <small>$26.00-$55.0</small>
                    </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img12} className="card-img-top" alt="..."/>
                    <div className="card-body text-center">
                       <h6 className="card-subtitle mb-2 text-muted">Italy</h6>
                       <p className="card-text">INDIGO STRAPBACK</p>
                       <small>$30.00</small>
                   </div>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="card-three" style={{width: "100%"}}>
                  <img src={img13} className="card-img-top" alt="..."/>
                   <div className="card-body text-center">
                     <h6 className="card-subtitle mb-2 text-muted">USA</h6>
                     <p className="card-text">INDIGO DARK T-SHIRT</p>
                     <small className="card-price"><strike className="text-muted">$39.00</strike> $26.00</small>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

        </>
    )
}

export default Catalog