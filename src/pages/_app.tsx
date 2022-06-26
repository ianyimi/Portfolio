import { AppProps } from "next/app";
import { Global } from "@emotion/react";
import { globalStyles } from "../worlds/utils/styles";
import Head from "next/head";

export default function App( { Component, pageProps }: AppProps ) {

	return (
		<>
			<Head>
				<title>Isaiah Anyimi</title>
			</Head>
			<Global styles={globalStyles}/>
			<Component {...pageProps} />
		</>
	);

}


