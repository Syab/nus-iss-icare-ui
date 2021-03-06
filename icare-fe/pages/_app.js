import React, {useEffect,Fragment} from "react";
import '../styles/globals.css'
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";

function MyApp(props) {
    const { Component, pageProps, ...rest } = props;
    useEffect(()=>{
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles){
            jssStyles.parentElement.removeChild(jssStyles)
        }
    }, [])

      return (
          <Fragment>
              <Head>
                  <title>iCare Platform</title>
                  <meta name="description" content="Generated by create next app" />
                  <link rel="icon" href="/favicon.ico" />\
              </Head>
              <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster:300,400,500,700&display=swap" />
              <CssBaseline />
              <Component {...pageProps} />
          </Fragment>
          )
}

export default MyApp;
