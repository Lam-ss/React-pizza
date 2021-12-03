import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';


export const fetchPizzas = () => (dispatch) => {
    axios.get('http://localhost:3001/pizzas').then(({ data }) => {
        dispatch(setPizzas(data));
    });
}

// export const setLoaded = 



export const setPizzas = (items) => ({
    type: 'SET_PIZZAS',
    payload: items,
})