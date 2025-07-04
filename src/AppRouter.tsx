import { IonRouterOutlet } from '@ionic/react'
import { IonReactRouter } from '@ionic/react-router'
import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import HomeScreen from './screen/HomeScreen'
import RestaurantMenuScreen from './screen/RestaurantMenuScreen'
import CartScreen from './screen/CartScreen'

const AppRouter = () => {
  return (
    <>
      <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <HomeScreen />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route  exact path="/restaurant-menu/:restaurantId">
        <RestaurantMenuScreen/>
        </Route>
         <Route  exact path="/cart-screen">
        <CartScreen/>
        </Route>
      </IonRouterOutlet>
    </IonReactRouter>
    </>
  )
}

export default AppRouter
