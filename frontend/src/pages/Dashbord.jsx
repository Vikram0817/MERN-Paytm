import React from "react";
import Navbar from "../components/Navbar";
import YourBalance from "../components/YouBalance";
import FindUsers from "../components/FindUsers";

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

