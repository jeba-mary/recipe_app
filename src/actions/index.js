import axios from 'axios';
import { FETCH_RECIPES } from './types';



export const fetchRecipes = () => async dispatch => {
  const response = await axios.get('http://starlord.hackerearth.com/recipe');

  dispatch({ type: FETCH_RECIPES, payload: response.data });
};
