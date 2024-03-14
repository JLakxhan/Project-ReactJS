import React from 'react';
import { cardData } from './data';
import './CardSection.css';

const CardSection = () => {
  return (
    <div className="card-section-container">
      <div>
        <h4 className='pt-3 pb-1 my-1 text-center'>Items</h4>
        <div className="container" style={{ width: "600px", height: "420px", overflowY: "auto", scrollbarColor: "red" }}>
          <div className="row">


            {cardData.map((card) => (
              <div className="col-md-4" key={card.id}>
                <div className="card mb-3 shadow-sm">
                  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-bs-interval="1000">
                        <img src={card.img[0]} className="d-block w-100" alt="dfbsd"/>
                      </div>
                      <div className="carousel-item" data-bs-interval="2000">
                        <img src={card.img[1]} className="d-block w-100" alt="..."/>
                      </div>
                      <div className="carousel-item">
                        <img src={card.img[2]} className="d-block w-100" alt="..."/>
                      </div>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{card.title}</h5>
                    <p className="card-text">{card.price}</p>
                    {/* <a href="/" className="btn btn-primary text-center">Go somewhere</a> */}
                  </div>
                </div>
              </div>
            ))}


            
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardSection;
