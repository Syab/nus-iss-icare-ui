import React from 'react';
import NaviBar from "../NavBar/NaviBar";

function Layout({children}){
    return (
        <div>
            <main>
                <NaviBar/>
                    {children}
            </main>
        </div>
    )
}

export default Layout;