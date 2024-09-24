// src/store/cartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Products {
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
  items: Products[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Products>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
