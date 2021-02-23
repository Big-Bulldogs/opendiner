export const SELECTEDITEMS="SELECTEDITEMS"
export const setItems=(res)=>{
    console.log(res)
    return {
        type: SELECTEDITEMS,
        value: res
    }
}
