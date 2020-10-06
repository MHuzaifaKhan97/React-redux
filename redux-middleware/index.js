const redux = require('redux');
const reduxLogger = require('redux-logger');
const applyMiddleWare = redux.applyMiddleware;

const logger = reduxLogger.createLogger()

const initialStateCake = {
    noOfCake: 10,
}

const initialStateIceCream = {
    noOfIcecreams: 30
}


const BUY_CAKE = "BUY_CAKE";
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'Cake Buy Successfully'
    }
}

function buyIcecream() {
    return {
        type: BUY_ICECREAM,
        info: 'Iceream Buy Successfully'
    }
}
const cakeReducer = (state = initialStateCake, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            noOfCake: state.noOfCake - 1
        }
        default: return state;
    }
}
const icecreamReducer = (state = initialStateIceCream, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            noOfIcecreams: state.noOfIcecreams - 1
        }
        default: return state;
    }
}

const rootReducer = redux.combineReducers({
    cake:cakeReducer,
    iceCream:icecreamReducer
})
const store = redux.createStore(rootReducer,applyMiddleWare(logger));

console.log("Initil State: ", store.getState())

const unsubscribe = store.subscribe(() =>{})

store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyIcecream())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

unsubscribe()