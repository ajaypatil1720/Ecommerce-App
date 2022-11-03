const cart=[];
 const handlecart=(state=cart,action)=>{
    const product=action.payload;

    switch(action.type){
        case "additem":
            //check if product already exist

            const exist=state.find((x)=>x.id===product.id);
            if(exist){
                //increase the qty
                return state.map((x)=>x.id===product.id?{...x,qty:x.qty+1}:x);
            }
            else{
                const product=action.payload;
                return [
                    ...state,
                    {
                        ...product,qty:1
                    }
                ]
            }

            break;

            case "delitem":
                const exit1=state.find((x)=>x.id===product.id);
                if(exit1.qty==1){
                    return state.filter((x)=>x.id!==product.id);
                }else{
                    return state.map((x)=>x.id===product.id?{...x,qty:x.qty-1}:x);
                }
                break;

            default:
                return state;
                break;
    }

}

export default handlecart;