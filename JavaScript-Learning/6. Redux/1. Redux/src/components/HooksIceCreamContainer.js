import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { buyIceCream } from '../redux';

export default function HooksIceCreamContainer(){

    const numOfIceCream = useSelector(state => state.iceCream.numOfIceCream);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Number of icecream - {numOfIceCream}</h2>
            <button onClick={() => dispatch(buyIceCream())}>Buy iceCream</button>
        </div>
    );
}