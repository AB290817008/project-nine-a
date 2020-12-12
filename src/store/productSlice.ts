import { createSlice } from "@reduxjs/toolkit";
import Bananas from "./Bananas.jpg";
import Mangoes from "./Mangoes.jpg";
import Apples from "./Apples.jpg";

export interface ProductInterface {
  id: string;
  title: string;
  description: string;
  price: number;
  imageUrl: string;
  added?: boolean;
}

const INITIAL_STATE: ProductInterface[] = [
  {
    id: "123",
    title: "Apple",
    description:
      "Apples are among the world's most popular fruits. They grow on the apple tree (Malus domestica), originally from Central Asia",
    imageUrl: Apples,
    price: 1000,
  },
  {
    id: "456",
    title: "Mango",
    description:
      "Mangoes are tropical stone fruits, plump and oval in shape and about the size of a grapefruit. They have an inedible skin that ranges in colour from yellow to green through to red-green, depending on the variety.",
    imageUrl: Mangoes,
    price: 1500,
  },
  {
    id: "789",
    title: "Banana",
    description:
      "A banana is an elongated, edible fruit – botanically a berry – produced by several kinds of large herbaceous flowering plants in the genus Musa. In some countries, bananas used for cooking may be called 'plantains', distinguishing them from dessert bananas.",
    imageUrl: Bananas,
    price: 500,
  },
];

export const productSlice = createSlice({
  name: "Product",
  initialState: INITIAL_STATE,
  reducers: {
    addProduct: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          added: true,
        };
      });
    },
    removeProduct: (state, action) => {
      return state.map((item) => {
        if (item.id !== action.payload.id) {
          return item;
        }

        return {
          ...item,
          added: false,
        };
      });
    },
  },
});

export const { addProduct, removeProduct } = productSlice.actions;
export default productSlice.reducer;
