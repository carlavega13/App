import { create } from 'zustand'
import { HOST } from "../HOST"
import axios from "axios"

export const store=create(()=>({
    user:{},
    login:async(userLog)=>{
        const response=await axios.post(`${HOST}login`,userLog)
        console.log(response.data);
        user=response.data
    }
}))