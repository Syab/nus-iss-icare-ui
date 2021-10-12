import React, {useEffect, Component} from "react";
import { useRouter } from 'next/router'
// import styles from '../styles/Page.module.css'

const Index = props => {
    const router = useRouter();
    useEffect(() => {
      router.push("/login")
          .then(()=>console.log("login page"))
          .catch((err)=> console.log(err))
    })
    return <div/>
}

export default Index