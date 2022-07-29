import dynamic from "next/dynamic";

const InfiniteScroll = dynamic( import( "worlds/InfiniteScroll" ), { ssr: false } );

export default function StarterPage() {

	return <InfiniteScroll/>;

}


