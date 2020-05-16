import {createStore, combineReducers} from 'redux';
import {DISHES} from './dishes';
import {COMMENTS} from './comments';
import {PROMOTIONS} from './promotions';
import {LEADERS} from './leaders';

export function ConfigureStore(){
    return createStore(
        combineReducers({
            dishes: DISHES,
            comments: COMMENTS,
            promotions: PROMOTIONS,
            leaders: LEADERS
        })
    );
}


