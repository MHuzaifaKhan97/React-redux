const redux = require('redux');

// Initial State
const initialState = {
    noOfCakes:10
}

const BUY_CAKE = "BUY_CAKE";

// Action Creation
function buyCake(){
    return {
        type:BUY_CAKE,
        info:"First Redux Action",
    } 
}

const cakeReducer = (state = initialState,action) => {
    switch(action.type){
        case BUY_CAKE : return {
            ...state, // if more than one state, and we just changed noOfCakes
            noOfCakes:state.noOfCakes - 1
        }
        default: return state;
    }
}

// Create Store
const store = redux.createStore(cakeReducer)
console.log('Initial State: ',store.getState());

const unsubscribe = store.subscribe(() => console.log("Updated State: ",store.getState()))

store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()