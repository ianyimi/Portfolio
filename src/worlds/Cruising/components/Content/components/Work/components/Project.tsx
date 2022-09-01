import { motion, useScroll } from "framer-motion";

export default function Project( props: { index: number } ) {

	const { index } = props;
	const { scrollY } = useScroll();

	scrollY.onChange( l => console.log( l ) );

	return (
		<motion.div>

		</motion.div>
	);

}
