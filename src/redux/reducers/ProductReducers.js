import  actionTypes  from "../actions/actionTypes";

const initialState = {
  products: [],
};

const ProductReducers = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_PRODUCTS:
        return {
            ...state,
            products: action.payload
        };
    case actionTypes.SELECTED_PRODUCTS:
        return{
            ...state, 
            products:action.payload
        }
    default:
        return state;
  }
};

export default ProductReducers