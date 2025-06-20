import { IonContent,IonPage} from '@ionic/react';
import './HomeScreen.scss';
import FilterComponent from '../components/homeComponent/FilterComponents';
import HomeBanner from '../components/homeComponent/HomeBanner';


const HomeScreen: React.FC = () => {
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
        </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default HomeScreen;
