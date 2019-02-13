import {createStore,combineReducers} from 'redux'
import React from 'react'


// Expenses Reducers
const expesnsesReducerDefaultState =[];
const expensesReducer = (state = expesnsesReducerDefaultState,action) => {
 switch (action.type){
     default:
     return state;
 }
};
// Store Creation

const store = createStore(expensesReducer);
console.log(store.getState());

const demoState = {
    expenses:[{
        id: 'iasjdiaosdj',
        description: 'Abelhas',
        node: 'Ursos comem mel, humanos também',
        amount: 56000,
        createdAt: 0
    }],
    filters:{
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate:undefined
    }
}

export default class Destructuring extends React.Component{
    render(){
 
        return('hey')
}}