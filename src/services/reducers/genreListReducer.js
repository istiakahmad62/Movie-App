import { GENRE_LIST_REQUEST } from '../types';

const initialState = {
    genre_list: [
        {id: 0, name: ''}
    ]
}

export default function(state=initialState, action){
    console.log("Reducer: ", state)
    switch(action.type){
        case GENRE_LIST_REQUEST:
            let exist_genre = state.genre_list.find(item => item.id === action.genre_id)
            if(exist_genre){
                return state
            }
            else{
                return {
                    ...state,
                    genre_list: [...state.genre_list, {id: action.genre_id, name: action.genre_name}]
                }
            }
        default:
            return state;
    }
}