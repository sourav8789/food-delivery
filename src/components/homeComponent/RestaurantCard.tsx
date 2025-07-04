import React from 'react'
import "./RestaurantCard.scss"
import { FaStar } from "react-icons/fa";
import { IRestaurant } from '../../interfaces/restaurant';
interface IRestaurantCardProps{resturantData:IRestaurant}
const RestaurantCard:React.FC<IRestaurantCardProps>= ({resturantData}) => {
  return (
    <>
    <div className='restaurant_card'>
        <div className="image_section">
            <img src={resturantData.image} alt="food" />
        </div>
        <div className="content_section">
            <div className="title">{resturantData.name}
                
            </div>
            <div className="description">
                {resturantData.description}
            </div>
            <div className="rating_section">
                <div className="offer">
                    {resturantData.currentOffer}
                </div>
                <div className="rating">
                    <FaStar/>
                    <span>{resturantData.rating}</span>
                </div>
            </div>
        </div>
        
      
    </div>
    </>
  )
}

export default RestaurantCard
