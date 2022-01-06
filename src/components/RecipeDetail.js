import { useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
const RecipeDetail = ()=> {
    useEffect(()=> {
        console.log('useEffct')
    },[]);
    const getDetails=async ()=>{
        const response = await (fetch)
    }
    return(
        <div>REcipe page</div>
    )
}
export default RecipeDetail;