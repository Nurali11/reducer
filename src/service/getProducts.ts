import axios from "axios"
import { useEffect, useState } from "react"


export const getproducts = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get("https://dummyjson.com/products").then(res => setData(res.data.products))
    },[])
    return data
}