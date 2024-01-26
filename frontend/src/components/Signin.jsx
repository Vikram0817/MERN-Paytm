import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { usernameState, firstNameState, lastNameState, passwordState } from "../states";

export default function Signin(){
    
    const [username, setUsername] = useRecoilState(usernameState);
    const [password, setPassword] = useRecoilState(passwordState);
    
    const navigate = useNavigate();

    async function handleSignin(){
        try {
            const res = await fetch("http://localhost:3000/api/v1/user/signin", {
                method: "POST",
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    "Content-Type": "application/json"
                }
            })
    
            if(!res.ok){
                alert(`HTTP error! status ${res.status}`);
                return
            }
            
            const data = await res.json();

            alert(data.msg);
            localStorage.setItem("myToken", res.token);
    
            navigate("/dashbord");
        }catch(err) {
            console.log("Request Crashed!");
        }
    }
    
    return (
        <div className="h-screen flex justify-center items-center">
        <div className="border-2 border-black rounded-2xl p-6 flex flex-col justify-center">
            <div className="text-center">
                <h1 className="text-3xl text-bold mb-2">Sign-In</h1>
                <p className="m-auto w-5/6 mb-2 text-gray-700">Enter your Credentials to access your account</p>
            </div>
            <label htmlFor="username">Username</label>
            <input className="border-2 p-1 mb-2" type="text" value={username} onChange={e => setUsername(e.target.value)}/>
            
            <label htmlFor="password">Password</label>
            <input className="border-2 p-1 mb-2" type="text" value={password} onChange={e => setPassword(e.target.value)}/>
            
            <button onClick={handleSignin} className="border-black border-2 rounded-xl bg-black text-white mt-2 mb-2 w-1/2 m-auto hover:bg-teal-400">Sign-In</button>
            <div className="flex justify-center">
                <p className="mr-2">Don't have an account?</p>
                <a className="underline hover:text-teal-400 cursor-pointer">Sign-Up</a>
            </div>
        </div>
    </div>
    )
}