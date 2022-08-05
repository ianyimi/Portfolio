import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../worlds/utils/styles";
import Head from "next/head";

export default function App( { Component, pageProps }: AppProps ) {

	return (
		<>
			<Head>
				<title>Isaiah Anyimi</title>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<script src="../utils/syncscroll.js"/>
			</Head>
			<Global styles={globalStyles}/>
			<Component {...pageProps} />
		</>
	);

}


