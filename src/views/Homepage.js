import React from "react";
import HomeHeader from "components/Headers/HomeHeader";
import HomeMenu from "components/Bodys/HomeMenu";
import HomeBody from "components/Bodys/HomeBody"

function Homepage() {
    
    return (
        <>
            <HomeHeader />
            <div className="main">
                <HomeMenu />
                <HomeBody />
            </div>
        </>
    );
}

export default Homepage;
