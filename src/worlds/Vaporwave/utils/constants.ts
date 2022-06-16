import { Vector3 } from "three";
import { parse } from "coolors-io";

export function hexToVec3( hex: string ): Vector3 {

	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec( hex );
	return result ? new Vector3(
		Math.floor( parseInt( result[ 1 ], 16 ) / 255 * 1000 ) / 1000,
		Math.floor( parseInt( result[ 2 ], 16 ) / 255 * 1000 ) / 1000,
		Math.floor( parseInt( result[ 3 ], 16 ) / 255 * 1000 ) / 1000
	) : new Vector3( 0., 0., 0. );

}

export type Playlist = {
  id: string,
  name: string,
  palette: string[],
  palettes: string[][],
  backgroundColorIndex: number,
  mainColorIndex: number,
  secondaryColorIndex: number
}

export const playlists: Playlist[] = [
	{
		id: "lateNights",
		name: "Late Nights",
		palette: [],
		palettes: [
			// parse( "https://coolors.co/202020-ffee32-ffd100-d6d6d6-333533" ),
			// parse( "https://coolors.co/f4f4f8-2ab7ca-fe4a49-133c55-22577a" ),
			// parse( "https://coolors.co/69306d-809bce-ea526f-f7fff7-0e103d" ),
			parse( "https://coolors.co/69306d-0075a2-ea526f-f7fff7-d6d3f0" ),
			// parse( "https://coolors.co/69306d-0075a2-d6d3f0-f7fff7-ea526f" ),
		],
		backgroundColorIndex: 0,
		mainColorIndex: 1,
		secondaryColorIndex: 2
	},
	{
		id: "beenTurnt",
		name: "Been Turnt",
		palette: [],
		palettes: [],
		backgroundColorIndex: 0,
		mainColorIndex: 1,
		secondaryColorIndex: 2
	},
	{
		id: "theCookout",
		name: "The Cookout",
		palette: [],
		palettes: [
			parse( "https://coolors.co/d6d6d6-ffee32-ffd100-202020-333533" ),
		],
		backgroundColorIndex: 0,
		mainColorIndex: 1,
		secondaryColorIndex: 2
	}
];

export const palettes = [
	// parse( "https://coolors.co/231942-5e548e-9f86c0-be95c4-e0b1cb" ),
	// parse( "https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c" ),
	// parse( "https://coolors.co/c200fb-ec0868-fc2f00-ec7d10-ffbc0a" ),
	// parse( "https://coolors.co/0a090c-f0edee-07393c-2c666e-90ddf0" ),
	// parse( "https://coolors.co/040f0f-248232-2ba84a-2d3a3a-fcfffc" ),
	// parse( "https://coolors.co/d6d6d6-ffee32-ffd100-202020-333533" ),
	parse( "https://coolors.co/202020-ffee32-ffd100-d6d6d6-333533" ),
	// parse( "https://coolors.co/ffedd8-f3d5b5-e7bc91-d4a276-bc8a5f-a47148-8b5e34-6f4518-603808-583101" ),
	// parse( "https://coolors.co/e6eed6-00af54-d72638-01baef-090c02" ),
	// parse( "https://coolors.co/5adbff-c1292e-235789-090c02-f1d302" ),
];

export const Works = [
	{
		name: "About Me",
		desc: " hobbies, pastimes, socials, etc",
		url: ""
	},
	{
		name: "Muse x Chad Knight",
		desc: "",
		url: "https://muse.place/chadknight/seasons"
	},
	{
		name: "Web3 & EtherRealms",
		desc: "",
		url: ""
	},
	{
		name: "Station",
		desc: "",
		url: "https://etherrealms.org/station"
	},
	{
		name: "Winter Temple",
		desc: "",
		url: "https://etherrealms.org/wintertemple"
	},
	{
		name: "About Me",
		desc: "",
		url: ""
	},
];
