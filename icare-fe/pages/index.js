import React, {useEffect, Component} from "react";
import {useSession, signIn, signOut} from "next-auth/client";
import {Button} from "evergreen-ui";
import { useRouter } from 'next/router'
// import styles from '../styles/Page.module.css'

const Index = props => {
    const router = useRouter();
    useEffect(() => {
      router.push("/login")
          .then(()=>console.log("login page"))
          .catch((err)=> console.log(err))
    })
    const [ session, loading ] = useSession();
    // const handleOnClick = () =>{
    //     signIn('credentials')
    //
    // }
    return (
        <div>
        {/*    hi*/}
        {/*    {session && <>*/}
        {/*        <h1>Signed in as {session.user.name} </h1> <br/>*/}
        {/*        <h1>Signed in as {session.user.email} </h1> <br/>*/}
        {/*        <button onClick={signOut}>Sign out</button>*/}
        {/*    </>*/}
        {/*    }*/}
        {/*<Button onClick={handleOnClick}>SIGNIN</Button>*/}
        </div>
    )
}

export default Index