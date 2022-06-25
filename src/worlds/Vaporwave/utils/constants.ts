export type Playlist = {
	id: string,
	name: string,
	palette: string[],
	palettes: string[][],
	backgroundColorIndex: number,
	mainColorIndex: number,
	secondaryColorIndex: number,
	outlineColorIndex?: number
}

export const playlists: Playlist[] = [
	{
		id: "lateNights",
		name: "Late Nights",
		palette: [],
		palettes: [
			parse( "https://coolors.co/69306d-0075a2-ea526f-f7fff7-d6d3f0" ),
			parse( "https://coolors.co/00120b-35605a-31e981-d8e4ff-6b818c" ),
			parse( "https://coolors.co/04052e-0d00a4-22007c-140152-02010a" ),
			parse( "https://coolors.co/f72585-7209b7-3a0ca3-4361ee-4cc9f0" ),
			parse( "https://coolors.co/2d00f7-f20089-6a00f4-e500a4-8900f2-db00b6-a100f2-d100d1-b100e8-bc00dd" ),
		],
		backgroundColorIndex: 0,
		mainColorIndex: 1,
		secondaryColorIndex: 2
	},
	{
		id: "beenTurnt",
		name: "Been Turnt",
		palette: [],
		palettes: [
			parse( "https://coolors.co/131112-ff0022-e3b505-f7f7ff-6622cc" ),
			parse( "https://coolors.co/ffffff-000000-ffffff-ffffff-000000" ),
			parse( "https://coolors.co/780000-c1121f-fdf0d5-003049-669bbc" ),
			parse( "https://coolors.co/0b0c0c-fbe134-2a2e34-e9eaec-e4b61a" ),
			parse( "https://coolors.co/0b0c0c-d10000-2a2e34-e9eaec-fb4b4e" ),
		],
		backgroundColorIndex: 0,
		mainColorIndex: 1,
		secondaryColorIndex: 2,
		outlineColorIndex: 3,
	},
	{
		id: "theCookout",
		name: "The Cookout",
		palette: [],
		palettes: [
			parse( "https://coolors.co/202020-ffd100-ffee32-d6d6d6-333533" ),
			parse( "https://coolors.co/00120b-009ffd-7b0828-fe7f2d-fcca46" ),
			parse( "https://coolors.co/000000-ef3054-feefe5-246eb9-a42cd6" ),
			parse( "https://coolors.co/9b2226-ee9b00-ca6702-bb3e03-ae2012" ),
			parse( "https://coolors.co/7400b8-2f145a-5e60ce-5390d9-4ea8de-48bfe3-56cfe1-64dfdf-72efdd-80ffdb" ),
		],
		backgroundColorIndex: 0,
		mainColorIndex: 1,
		secondaryColorIndex: 2
	}
];

function parse( url: string ): string[] {

	return url.substring( 19 ).split( "-" ).map( hex => `#${hex}` );

}
