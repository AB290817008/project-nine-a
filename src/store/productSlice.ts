import { createSlice } from "@reduxjs/toolkit";


export interface ProductInterface {
    id: string
    title: string
    description: string
    price: number
    imageUrl: string
    added?: boolean
}

const INITIAL_STATE: ProductInterface[] = [{
    id: "123",
    title: "Blue t-shirt",
    description: "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: "/blue-tshirt.png",
    price: 399
},
{
    id: "456",
    title: "Yellow t-shirt",
    description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: "/yellow-tshirt.png",
    price: 499
},
{
    id: "789",
    title: "Red t-shirt",
    description: "The only product on our site that might actually be worth buying",
    imageUrl: "/red-tshirt.png",
    price: 799
}
]

export const productSlice = createSlice({
    name: "Product",
    initialState:INITIAL_STATE,
    reducers:{
        addProduct:(state,action)=>{
            
            return state.map(item=>{
                if(item.id!==action.payload.id){
                    return item;
                }

                return {
                    ...item,
                    added:true
                }
                
            })
        },
        removeProduct:(state,action)=>{
            return state.map(item=>{
                if(item.id!==action.payload.id){
                    return item;
                }
                
                return {
                    ...item,
                    added:false
                }
            })
        }
    }
});

export const {addProduct,removeProduct}=productSlice.actions
export default productSlice.reducer
