import React, { Component } from 'react';
import logo from './logo.svg';
import { Navbar, NavbarBrand, Media } from 'reactstrap';
import Menu from './components/MenuComponent';
import './App.css';
import {Dishes} from './shared/dishes';

class App extends Component {
  constructor(props){
    super(props);
    
    this.state={
      dishes: Dishes
    };
  }
  render(){
    return (
      <div>
        <Navbar dark color='primary'>
          <div className='container'>
            <NavbarBrand href='#'>
              CompanyName
            </NavbarBrand>
          </div>
        </Navbar>
        <Menu dishes={this.state.dishes} />
      </div>
    );
  }
}

export default App;
