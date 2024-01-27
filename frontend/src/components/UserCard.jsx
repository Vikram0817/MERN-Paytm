import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { transferTo } from "../states";
import { useRecoilState } from "recoil";

export default function UserCard({index, fullName, id, username}){

    const [tranferToUser, setTransferToUser] = useRecoilState(transferTo);

    const navigate = useNavigate();

    function handleSend(){
        navigate("/send_money")
        setTransferToUser(username)
    }

    return(
        <div className="flex justify-between w-11/12 m-auto mt-5">
            <span className="flex items-center">
                <p className="bg-gray-200 rounded-2xl p-2 text-sm">U{index}</p>
                <p className="text-bold text-md ml-4">{username}</p>
            </span>
            <button onClick={handleSend} className="bg-black text-white p-2 rounded-md text-sm hover:bg-teal-500">Send Money</button>
        </div>
    )
}