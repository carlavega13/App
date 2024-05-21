import { useEffect } from "react"
import store from "../../Zustand/store"

const TransactionsList=()=>{
    const{user, transactions,getAllTransactions}=store(s=>s)
    useEffect(()=>{
   
    },[transactions])
    console.log(transactions);
return (
    <div>
        <button onClick={()=>getAllTransactions(user?.id)}>sdsasda</button>
        list
    </div>
)    
}
export default TransactionsList