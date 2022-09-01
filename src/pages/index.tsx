import dynamic from "next/dynamic";

const Vaporwave = dynamic( import( "worlds/Vaporwave" ), { ssr: false } );
const InfiniteScroll = dynamic( import( "worlds/InfiniteScroll" ), { ssr: false } );
const Cruising = dynamic( import( "worlds/Cruising" ), { ssr: false } );

export default function StarterPage() {

	// return <Vaporwave/>;
	// return <InfiniteScroll/>;
	return <Cruising/>;

}


