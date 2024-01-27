import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { transferTo } from "../states";

export default function SendMoneyModel(){

    const [amount, setAmount] = useState(0);
    const transferToUser = useRecoilValue(transferTo);

    const token = localStorage.getItem("myToken");

    async function handleTransaction(){
        const res = await fetch(`http://localhost:3000/api/v1/account/transfer`, {
            method: "POST",
            body: JSON.stringify({
                to: transferToUser,
                amount: Number(amount)
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        if(!res.ok){
            const data = await res.json();
            alert(data.msg);
            return;
        }
        const data = await res.json();
        alert(data.msg);
    }


    return(
        <div className="flex justify-center h-screen items-center">
        <div className="p-8 flex flex-col border shadow-lg w-2/5 max-w-96">
            <h2 className="text-bold text-2xl m-auto mb-6">Send Money</h2>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="teal" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="border-black w-8 h-8 mr-2 border-2 rounded-full p-1">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                </svg>
                <p className="text-xl text-bold">{transferToUser}</p>
            </div>
            <p className="font-medium mt-2 mb-2">Amount (in Rs)</p>
            <input value={amount} onChange={e => setAmount(e.target.value)} className="border border-inherit mb-3 p-2" type="number" placeholder="Enter Amount" />
            <button onClick={handleTransaction} className="bg-teal-500 rounded-md drop-shadow p-2">Initiate Transfer</button>
        </div>
        </div>

    )
}