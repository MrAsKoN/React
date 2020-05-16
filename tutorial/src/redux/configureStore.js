import {createStore, combineReducers, applyMiddleware} from 'redux';
import {DISHES} from './dishes';
import {COMMENTS} from './comments';
import {PROMOTIONS} from './promotions';
import {LEADERS} from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export function ConfigureStore(){
    return createStore(
        combineReducers({
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }),
        applyMiddleware(thunk, logger)
    );
}


