import { IonContent,IonPage} from '@ionic/react';
import './HomeScreen.scss';
import FilterComponent from '../components/homeComponent/FilterComponent';
import HomeBanner from '../components/homeComponent/HomeBanner';
import RestaurantCard from '../components/homeComponent/RestaurantCard';
import { useEffect, useState } from 'react';
import { getAllRestaurant } from '../services/api';
import { IRestaurant } from '../interfaces/restaurant';
import { Link } from 'react-router-dom';

const HomeScreen: React.FC = () => {
  const[allResturant,setAllRestuarant]=useState<IRestaurant[]>()
  useEffect(()=>{
    void getAllRestaurant().then((response)=>{
      setAllRestuarant(response)
    })

  },[])
  return (
    <IonPage>
      <IonContent fullscreen>
        <div className='home_screen'>
          <div className='header_section'>
            <FilterComponent/>
          </div>
          <div className="body_section">
            <div className="banner_section">
              <HomeBanner/>
            </div>
            <div className="restaurant_section">
              {allResturant && allResturant.map((restuarant,restaurantIndex) => {
                return(<div key ={restaurantIndex}>
                  <Link to={`restaurant-menu/${restuarant._id}`}>
                   <RestaurantCard resturantData={restuarant}/>
                   </Link>
                </div>)
              })}
             
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
