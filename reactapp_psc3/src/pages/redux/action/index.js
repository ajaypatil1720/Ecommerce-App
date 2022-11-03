export const Additemtocart=(product)=>{
    return {
        type:"additem",
        payload:product
    }
}

export const Delitemtocart=(product)=>{
    return {
        type:"delitem",
        payload:product
    }
}