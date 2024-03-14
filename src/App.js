import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import CardSection from "./CardSection";

function App() {
  return (
    <div className="app-container">
      <div className="box">
        <Navbar />

        <div className="content-box">
          <div className="contact-item">
            <FontAwesomeIcon icon={faUser} />
          </div>
          <select className="dropdown">
            <option value="option1">Please Select</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>

          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>

          <select className="dropdown">
            <option value="option1">Please Select</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>

        <div className="content">
          <select className="small-dropdown">
            <option value="option1">Please Select</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
          </select>
          <select className="small-dropdown">
            <option value="option1">Please Select</option>
            <option value="option2">B</option>
            <option value="option3">C</option>
          </select>
          <select className="small-dropdown">
            <option value="option1">Please Select</option>
            <option value="option2">Y</option>
            <option value="option3">Z</option>
          </select>
        </div>

        <div className="right-side">
          <div className="dropdowns">
            <select className="dropdown">
              <option value="option1">Please Select</option>
            </select>
            <select className="dropdown">
              <option value="option1">Please Select</option>
            </select>
            <select className="dropdown">
              <option value="option1">Please Select</option>
            </select>
          </div>
        </div>

        <div className="table-heading">
          <div>Product</div>
          <div>Quantity</div>
          <div>Unit Price</div>
          <div>Line Price</div>
        </div>

        {/* Message for selecting product items */}
        <div className="select-product-message">
          Please Select Product Items
        </div>

        <CardSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
