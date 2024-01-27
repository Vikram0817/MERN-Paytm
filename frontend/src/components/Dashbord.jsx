import React from "react";
import Navbar from "./Navbar";
import YourBalance from "./YouBalance";
import FindUsers from "./FindUsers";
import UserCard from "./UserCard";
import SendMoneyModel from "./SendMoneyModel";

export default function Dashbord() {

    // const [showModel, setShowModel] = useState(false);

    return(
        <>
            <Navbar></Navbar>
            <YourBalance></YourBalance>
            <FindUsers></FindUsers>
        </>
    )
}

