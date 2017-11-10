import { createStore, combineReducers } from 'redux';

console.log('Test');

const userInfoReducer = (state = {}, action) => {
    
    switch(action.type){
        case "UPDATE_USER_NAME":
            return {... state, name: action.payload }
        case "UPDATE_USER_AGE":
            return {... state, age: action.payload }        
        default:
            return state
    }
}

const preferredGreeting = (state = {}, action) => {
    return state;
}

const reducers = combineReducers({
    userInfoReducer: userInfoReducer,
    preferredGreeting: preferredGreeting
})

const applicationStore = createStore(reducers, {
    userInfoReducer: {
        name: "Nick",
        age: 33,
        email: "nickc@magenic.com"
    },
    preferredGreeting: "hello"
});

console.log(applicationStore.getState());

applicationStore.subscribe(() => {
    console.log("Store has been updated", applicationStore.getState());
})


applicationStore.dispatch({type: "UPDATE_USER_NAME", payload: "Morty"});
applicationStore.dispatch({type: "UPDATE_USER_AGE", payload: "14"});