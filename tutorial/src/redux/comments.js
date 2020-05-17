import * as ActionTypes from './ActionTypes';

export const COMMENTS=(state= {
        errorMsg: null,
        comments: []
    }, action)=>{
    switch(action.type){
        case ActionTypes.ADD_COMMENTS :
            return {...state,isLoading:false,errorMsg:null,comments:action.payload};
        case ActionTypes.ADD_COMMENT:
            var comment=action.payload;
            return {...state, comments: state.comments.concat(comment)};
        case ActionTypes.COMMENTS_FAILED:
            return {...state,isLoading:false,errorMsg: action.payload,comments:[]};    
        default:
            return state;
    }
}