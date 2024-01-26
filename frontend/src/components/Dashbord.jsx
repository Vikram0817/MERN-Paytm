import React from "react";
import Navbar from "./Navbar";
import YourBalance from "./YouBalance";
import FindUsers from "./FindUsers";

export default function Dashbord() {
    return(
        <>
            <Navbar></Navbar>
            <YourBalance></YourBalance>
            <FindUsers></FindUsers>
        </>
    )
}

