import React from "react";
import "./HomeBanner.scss";
import { useHistory } from "react-router";
const HomeBanner: React.FC = () => {
  const history = useHistory();
  return (
    <>
      <div className="home_banner">
        <div className="bg_layout"></div>
        <div className="banner_content">
          <div className="left_content">
            <div className="title">
              Celebrate Love at
              <br /> GovernmentGrove
            </div>
            <div className="text">
              Treat your special someone
              <br /> to our exclusive Valentine's
              <br /> menu
            </div>
          </div>
          <div className="right_content">
            <div className="cart_button" onClick={()=>{history.push("/cart-screen")}}>Go To Cart</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeBanner;
