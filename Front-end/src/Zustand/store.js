import { create } from 'zustand'
import { HOST } from "../HOST"
import axios from "axios"
import zukeeper from "zukeeper"
const store=create(zukeeper(set=>({
    user:{},
    login:async(userLog)=>{
        const response=await axios.post(`${HOST}login`,userLog)
   set(state=>({user:response.data}))

    }
})))

window.store=store
export default store