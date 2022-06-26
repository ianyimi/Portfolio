import Ball from "./Ball";
import { useTexture } from "@react-three/drei";

const TEXTURES = [
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble1.jpg",
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble2.jpg",
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble3.jpg",
	"https://dqeczc7c9n9n1.cloudfront.net/images/marble4.jpg",
];

export default function Works() {

	const tex = useTexture( TEXTURES[ 0 ] );
	const tex2 = useTexture( TEXTURES[ 1 ] );
	const tex3 = useTexture( TEXTURES[ 2 ] );
	const tex4 = useTexture( TEXTURES[ 3 ] );

	return (
		<group>
			<Ball
				position={[ 0.075, 0.05, - 1.15 ]}
				texture={tex}
				index={0}
			/>
			<Ball
				position={[ - 0.025, 0.1, - 1.75 ]}
				texture={tex2}
				index={1}
			/>
			<Ball
				position={[ - 0.05, 0.075, - 1.5 ]}
				texture={tex3}
				index={2}
			/>
			<Ball
				position={[ - 0.1, 0.125, - 1.25 ]}
				texture={tex4}
				index={3}
			/>
		</group>
	);

}
