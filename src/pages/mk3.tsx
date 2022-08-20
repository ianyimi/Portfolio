import dynamic from "next/dynamic";

const Cruising = dynamic( import( "worlds/Cruising" ), { ssr: false } );

export default function StarterPage() {

	return <Cruising/>;

}


