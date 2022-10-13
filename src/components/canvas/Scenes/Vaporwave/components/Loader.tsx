import * as THREE from "three";
import {useStore} from "@/utils/store";

function start(url: string, itemsLoaded: number, itemsTotal: number) {
  
  // console.log( 'Started loading file: ' + url + '.Loaded ' + itemsLoaded + ' of ' + itemsTotal + ' files.' );
  // console.log( itemsTotal );
  
}

export default function Loader() {
  
  // console.log( THREE.DefaultLoadingManager );
  THREE.DefaultLoadingManager.onStart = start;
  
  const progress = useStore(state => state.progress);
  
  return (
    <></>
  );
  
}
