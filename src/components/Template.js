import {createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
/* In redux think middleware we can pass in actions that aren't plain objects to dispatch
 to use it we have to call applyMiddleware with thunkmiddleware in the argument
 then we can create action creator that returns a function with the dipatch and getstate functions
 as the first andf second parameter */
function jokereducer(state={}, action) {
    switch (action.type) {
        case 'SET_JOKE' :
            return action.joke;
            default :
            return state;
    }
}
//in the thunkMiddleware we pass in functions to dispatch instead of usual plain objects without functions
//In the function we call dispatch with plain objects to do the synchronous actions
let store = createStore(jokereducer, applyMiddleware(thunkMiddleware))
//fetchJoke function is a action creator
//fetchjoke returns an aync function that has the redux dispatch function as a parameter
function fetchJoke() {
    return async dispatch => {
        const response = await fetch ('https://api.incdb.com/jokes/random')
        const joke = await response.json()
        dispatch({type: 'SET_JOKE', joke})
    }//once we get the joke from api we call dispatch in the returned function
}


//we can return any function but we need to use thunks for aync functions since they don't return plain objects
//oridinary action creators must return plain objects but if we use redux thunk middleware we 
//return a function that calls dispatch and getstate

//then we dispatch async action and get the value as follows
(async()=> {
    await store.dispatch(fetchJoke())
    console.log(store.getState().value.joke)
})();
//we called dispatch with the promise that the fetchjoke function returned
//then we used  store.getState().value.joke to get the jokes's value from the store

/** we can write a function check the state before getting data */

function shouldFetchJoke(state) {
    return !state.value || !state.value.joke;
}
function fetchJoke() {
    return async (dispatch, getState) => {
        if (shouldFetchJoke(getState()))
        {
        const response = await fetch ('https://api.incdb.com/jokes/random')
        const joke = await response.json()
        dispatch({type: 'SET_JOKE', joke})
    }//once we get the joke from api we call dispatch in the returned function
}
}
/* first we defined shouldFetchJoke to check the state.value or state.value.joke to see if the value has set
 the we change the fetchJoke to call shouldFetchJoke. Then use getState parameter to get the state and check if joke is already exists in the store with shouldfetchJoke */