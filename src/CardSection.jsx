import React from 'react';
import { cardData } from './data';


const CardSection = () => {
  return (
    <div>
      <h2 className='p-5 my-3 text-center fs-2'>Items</h2>
      <div className="container text-bg-dark" style={{ width: "800px", height: "700px", overflowY: "auto", scrollbarColor: "red" }}>
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
                  <p className="card-text">{card.desc}</p>
                  <a href="/" className="btn btn-primary text-center">Go somewhere</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CardSection;
