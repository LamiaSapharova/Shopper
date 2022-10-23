// import { addCart } from "../index/addCart";
const cart = [];
const handleCart = (state = cart, action) => {
  const product = action.payload;
  switch (action.type) {
    case 'ADDCART':
      //Product elave olunubsa daha etme elave
      const exist = state.find((x) => x.id === product.id);
      if (exist) {
        // product sayini artirmaq
        return state.map((x) =>
          x.id === product.id ? { ...x, qty: x.qty + 1 } : x
        );
      } else {
        const product = action.payload;
        return [
          ...state,
          {
            ...product,
            qty: 1,
          },
        ];
      }

    case 'DELCART':
      const existfordel = state.find((x) => x.id === product.id);
      if (existfordel.qty === 1) {
        return state.filter((x) => x.id !== existfordel.id);
      } else {
        return state.map((x) => 
          x.id === product.id ? { ...x, qty: x.qty - 1 } : x
        );
      }

    default:
       return state
      break;
  }
};
export default handleCart;
