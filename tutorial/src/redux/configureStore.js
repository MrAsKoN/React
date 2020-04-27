import {createStore} from 'redux';
import { Reducer, initialState} from './Reducer';

export function ConfigureStore(){
    return createStore(Reducer,initialState);
}


