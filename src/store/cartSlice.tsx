import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Product {
  id: number;
  brand: string;
  model: string;
  size: string;
  price: number;
  stock: number;
  season: string;
  fuel: string;
  speed: string;
  grip: string;
  noise: string;
  image: string;
  width: number;
  recommended:number;
  profile: number;
  inches: number;
  load: string;
  euClass: string;
  delay: number;
  description: string;
  category: string;
}

interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload); // Add the product to the cart
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
