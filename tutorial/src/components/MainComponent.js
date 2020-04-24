import React, { Component } from 'react';
import Menu from './MenuComponent';
import  DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Dishes} from '../shared/dishes';

class Main extends Component {
  constructor(props){
    super(props);
    
    this.state={
      dishes: Dishes,
      selectedDish: null
    };
  }

  render(){
    const HomePage=() =>{
      return(<Home/>);
    }
    
    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes}/>}></Route>
          <Redirect to='/home'></Redirect>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default Main;
