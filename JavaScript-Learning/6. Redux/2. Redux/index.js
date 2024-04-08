const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const reduxLogger = require('redux-logger');
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

// Action------------------------------------------------Action //

// 1. Constant       ---> Create a constant!
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// 2. Function       ---> Create a function!
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    };
}

function buyIceCream() {
    return {
        type: BUY_ICECREAM,
        info: 'First redux action'
    };
}

// Action------------------------------------------------Action //


// Reducer----------------------------------------------Reducer //

const initialCakeState = {
    numOfCakes: 10,
};

const initialIceCreamState = {
    numOfIceCreams: 20,
};

const cakeReducer = (state = initialCakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: 
            return { 
                ...state,
                numOfCakes: state.numOfCakes - 1 
            };
        default: 
            return state;
    }
};

const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: 
            return { 
                ...state,
                numOfIceCreams: state.numOfIceCreams - 1 
            };
        default: 
            return state;
    }
};

// Reducer----------------------------------------------Reducer //


// Store--------------------------------------------------Store //
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
});

const store = createStore(rootReducer, applyMiddleware(logger));
// Store--------------------------------------------------Store //


console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()));
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
unsubscribe();
