import { ADD_ITEM, CURRENT_ITEM, CLEAR } from "../actions/dataActions";

const initialState = {
    items: [],
    currentNumber: '',
    images: []
}

export default function dataActions(state = {...initialState}, action){
    switch(action.type){
        case ADD_ITEM:

            var payload = action.payload;
            console.log(payload);
            console.log(state);
            var items = state.items;
            var currentNumber = payload.number;
            
            items.push(currentNumber);
            var images = [];
            for(var i = 1; i<= currentNumber; i++){
                var item = {
                    src: window.location.href+'images/placeholder/'+i+'.png',
                    altText: i,
                    caption: i
                }
                images.push(item);
            }

            return {
                ...state,
                items,
                images
            }
            break;
        case CURRENT_ITEM:
            var payload = action.payload;
            var currentNumber = payload.number;
            return {
                ...state,
                currentNumber
            }

            break;

        case CLEAR:
            return {
                ...initialState
            }
            break;
        default:
            return state;
    }
    return state;
}