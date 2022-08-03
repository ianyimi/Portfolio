import { Bloom, EffectComposer, SSR } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";

export default function PostProcessing() {

	return (
		<EffectComposer autoClear={false}>
			<Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6}/>
			<Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5}/>
			<SSR/>
		</EffectComposer>
	);

}
