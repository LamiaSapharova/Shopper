// For Add item to Cart

 export const addCart=(product)=>{
    return{
        type:'ADDCART',
        payload:product
    }
 }
// For Delete item to Cart

 export const deletecart=(product)=>{
    return{
        type:'DELCART',
        payload:product
    }
 }
