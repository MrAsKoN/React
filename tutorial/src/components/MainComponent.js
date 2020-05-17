import React, { Component } from 'react';
import Menu from './MenuComponent';
import  DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';
import {Switch, Route, Redirect, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {addComment, fetchDishes } from '../redux/ActionCreators';
import {Loading } from './LoadingComponent';
import {actions} from 'react-redux-form';
const mapStatetoProps=state=>{
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchtoProps= (dispatch)=>({
  addComment: (dishId,rating,author,comment) => dispatch(addComment(dishId,rating,author,comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: ()=> {dispatch(actions.reset('feedback'))}
});


class Main extends Component {
  constructor(props){
    super(props);
    
  }

  componentDidMount(){
    this.props.fetchDishes();
  }

  

  render(){
    const HomePage=() =>{
      return(<Home dish={this.props.dishes.dishes.filter((dish)=> dish.featured)[0]}
      dishesLoading={this.props.dishes.isLoading}
      dishesErrorMsg={this.props.dishes.errorMsg}
      promotion={this.props.promotions.filter((promo)=>promo.featured)[0]}
      leader={this.props.leaders.filter((leader)=>leader.featured)[0]}/>);
    }
    
    const DishWithId=({match})=>{
      return(
        <DishDetail dish={this.props.dishes.dishes.filter((dish)=>dish.id===parseInt(match.params.dishId,10))[0]}
          isLoading={this.props.dishes.isLoading}
          errorMsg={this.props.dishes.errorMsg}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
          addComment={this.props.addComment} />
      );    
    }


    return (
      <div>
        <Header/>
        <Switch>
          <Route path='/home' component={HomePage}></Route>
          <Route exact path='/menu' component={() => <Menu dishes={this.props.dishes}/>}></Route>
          <Route path='/menu/:dishId' component={DishWithId}></Route>
          <Route exact path='/contactus' component={()=><Contact resetFeedbackForm={this.props.resetFeedbackForm} />}/>
          <Route exact path='/aboutus' component={()=> <About leaders={this.props.leaders}/>}/>
          <Redirect to='/home'></Redirect>
        </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStatetoProps, mapDispatchtoProps)(Main));
