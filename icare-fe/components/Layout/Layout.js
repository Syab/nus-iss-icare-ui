import React from 'react'
import NavBar from "../NavBar/NavBar";

function Layout({children}){
    return (
        <div>
            <main>
                <NavBar />
                {children}
            </main>
        </div>
    )
}

export default Layout;