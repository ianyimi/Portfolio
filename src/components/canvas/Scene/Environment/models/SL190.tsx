/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import * as THREE from 'three';
import React, {useEffect, useRef} from 'react';
import {useGLTF, useAnimations} from '@react-three/drei';
import {GLTF} from 'three/examples/jsm/loaders/GLTFLoader';
import {AnimationClip} from "three";
import {useStore} from "@/utils/store";

type GLTFResult = GLTF & {
  nodes: {
    Alarm02: THREE.Mesh
    Alarm03: THREE.Mesh
    Alarm04: THREE.Mesh
    Alarm05: THREE.Mesh
    Anten: THREE.Mesh
    Anten01: THREE.Mesh
    Anten02: THREE.Mesh
    Anten03: THREE.Mesh
    Ararm_01: THREE.Mesh
    Back_Bumper: THREE.Mesh
    Back_Bumper_Plastic_Band: THREE.Mesh
    Becker_Europa: THREE.Mesh
    Blinker: THREE.Mesh
    Blinker_Plastic_Frame: THREE.Mesh
    Blinker_Steal_Frame: THREE.Mesh
    Body: THREE.Mesh
    Box001: THREE.Mesh
    Brake__Light: THREE.Mesh
    Brake__Light_Frame: THREE.Mesh
    Brake_Light_plastic: THREE.Mesh
    Brake_Light_Screw: THREE.Mesh
    Brake_Light_Screw001: THREE.Mesh
    Brake_Light_Screw002: THREE.Mesh
    Brake_Light_Screw003: THREE.Mesh
    Bulb: THREE.Mesh
    Bulb001: THREE.Mesh
    Bumper: THREE.Mesh
    Bumper_plastic: THREE.Mesh
    Car_Key: THREE.Mesh
    Chair_Plastics: THREE.Mesh
    Cover_Steel: THREE.Mesh
    Dashboard_Back_Body: THREE.Mesh
    Dashboard_Glasses: THREE.Mesh
    Dashboard_Handle: THREE.Mesh
    Dashboard_Plastic_Opaque: THREE.Mesh
    Dashboard_Screw: THREE.Mesh
    Dashboard_Steel001: THREE.Mesh
    Door_Glass_Border: THREE.Mesh
    Door_Interior_Steel001: THREE.Mesh
    Door_Leather: THREE.Mesh
    Door_Side: THREE.Mesh
    Exhast00: THREE.Mesh
    Exhast01: THREE.Mesh
    Exhast02: THREE.Mesh
    Floor: THREE.Mesh
    Front_Light_Screw: THREE.Mesh
    Front_Light: THREE.Mesh
    Fuel: THREE.Mesh
    Mesh071: THREE.Mesh
    Mesh071_1: THREE.Mesh
    Gaz_Tank_Cover: THREE.Mesh
    Gear_Handle: THREE.Mesh
    Gear_Handle_Plastic: THREE.Mesh
    Gear_Knob: THREE.Mesh
    Glass_Plastic: THREE.Mesh
    Grille: THREE.Mesh
    Grille02: THREE.Mesh
    Handle: THREE.Mesh
    Handle_Tape: THREE.Mesh
    Headlight: THREE.Mesh
    Hood_Logo: THREE.Mesh
    Keychain_Leather: THREE.Mesh
    Keys_: THREE.Mesh
    km: THREE.Mesh
    km_gauge: THREE.Mesh
    License_Plate003: THREE.Mesh
    License_Plate2: THREE.Mesh
    Light_Frame: THREE.Mesh
    Light_Frame001: THREE.Mesh
    Light_Steel: THREE.Mesh
    Light_Steel001: THREE.Mesh
    Logo_Back: THREE.Mesh
    Moquet001: THREE.Mesh
    Night_Light: THREE.Mesh
    Night_Light__Frame: THREE.Mesh
    Night_Light001: THREE.Mesh
    Oil: THREE.Mesh
    Pedal: THREE.Mesh
    Pedal_Plastic: THREE.Mesh
    Pedal_Plastic_Washer: THREE.Mesh
    Plastic_Tape: THREE.Mesh
    Pointer: THREE.Mesh
    Pointer02: THREE.Mesh
    Pointer03: THREE.Mesh
    Pointer04: THREE.Mesh
    Pointer05: THREE.Mesh
    Pointer06: THREE.Mesh
    Ponter3: THREE.Mesh
    Radiator: THREE.Mesh
    Roof_Cover_Tape: THREE.Mesh
    Side_Mirror: THREE.Mesh
    Side_Mirror_Plastic: THREE.Mesh
    Side_Steel: THREE.Mesh
    Side_Steel001: THREE.Mesh
    Speedometer: THREE.Mesh
    Speedometer_Light: THREE.Mesh
    Steering_Wheel: THREE.Mesh
    Steering__Wheel_Telescope: THREE.Mesh
    Watch: THREE.Mesh
    Water: THREE.Mesh
    Wheel_System: THREE.Mesh
    White_Plastic_Key: THREE.Mesh
    Mesh090: THREE.Mesh
    Mesh090_1: THREE.Mesh
    Windshield_Plastic: THREE.Mesh
    Windshield_Washer_Plastic: THREE.Mesh
    Windshield_Washer_Steel: THREE.Mesh
    Windshield01: THREE.Mesh
    Windward_Steel: THREE.Mesh
    FR_WHEELSPOKES: THREE.Mesh
    FR_WHEELTIRE: THREE.Mesh
    FR_WHEELCALIPER: THREE.Mesh
    FR_WHEELSPOKESPLATE: THREE.Mesh
    FL_WHEELCALIPER: THREE.Mesh
    FL_WHEELSPOKES: THREE.Mesh
    FL_WHEELTIRE: THREE.Mesh
    FL_WHEELSPOKESPLATE: THREE.Mesh
    BR_WHEELSPOKES: THREE.Mesh
    BR_WHEELTIRE: THREE.Mesh
    BR_WHEELCALIPER: THREE.Mesh
    BR_WHEELSPOKESPLATE: THREE.Mesh
    BL_WHEELCALIPER: THREE.Mesh
    BL_WHEELSPOKES: THREE.Mesh
    BL_WHEELTIRE: THREE.Mesh
    BL_WHEELSPOKESPLATE: THREE.Mesh
  }
  materials: {
    BlackBody: THREE.MeshStandardMaterial
    Metal: THREE.MeshStandardMaterial
    Becker: THREE.MeshStandardMaterial
    BackLights: THREE.MeshStandardMaterial
    ['Brown Leather']: THREE.MeshStandardMaterial
    DarkMetal: THREE.MeshStandardMaterial
    FrontLights: THREE.MeshStandardMaterial
    BenzLogo: THREE.MeshStandardMaterial
    Keychain: THREE.MeshStandardMaterial
    ['License Plate']: THREE.MeshStandardMaterial
    Floor: THREE.MeshStandardMaterial
    ['Material.001']: THREE.MeshPhysicalMaterial
    ['Material.004']: THREE.MeshStandardMaterial
    Tire: THREE.MeshStandardMaterial
    RedBody: THREE.MeshStandardMaterial
  }
}

const FILE_URL = "https://dqeczc7c9n9n1.cloudfront.net/models/sl1908-1661159658/SL1908.glb.gz";

type ActionName =
  | 'Action.012'
  | 'Action.013'
  | 'Action.014'
  | 'Action.015'
  | 'Action.016'
  | 'Action.017'
  | 'Action.018'
  | 'Action.019'
type GLTFActions = Record<ActionName, THREE.AnimationAction>

export default function Model(props: JSX.IntrinsicElements['group']) {
  
  const group = useRef<THREE.Group>(null);
  const {nodes, materials, animations} = useGLTF(FILE_URL) as unknown as GLTFResult;
  const {actions} = useAnimations<AnimationClip>(animations, group);
  const setCurrentSection = useStore(state => state.setCurrentSection);
  
  useEffect(() => {
    
    if (!actions) return;
    for (const action of Object.values(actions)) {
      
      if (!action) continue;
      action.setEffectiveTimeScale(2).play();
      // action.play();
      
    }
    
    // setCurrentSection( { name: "Home", poi: 0, delay: 1000 } );
    
  }, [actions]);
  
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene" rotation-y={Math.PI / 2}>
        <group name="Car01" scale={0.01}>
          <mesh
            name="Alarm02"
            geometry={nodes.Alarm02.geometry}
            material={nodes.Alarm02.material}
            position={[-26.9637, 89.8797, 37.6078]}
          />
          <mesh
            name="Alarm03"
            geometry={nodes.Alarm03.geometry}
            material={nodes.Alarm03.material}
            position={[-28.9863, 84.6153, 36.1849]}
          />
          <mesh
            name="Alarm04"
            geometry={nodes.Alarm04.geometry}
            material={nodes.Alarm04.material}
            position={[-25.6278, 84.6485, 36.2149]}
          />
          <mesh
            name="Alarm05"
            geometry={nodes.Alarm05.geometry}
            material={nodes.Alarm05.material}
            position={[-4.542, 75.1077, 38.2828]}
          />
          <mesh
            name="Anten"
            geometry={nodes.Anten.geometry}
            material={nodes.Anten.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Anten01"
            geometry={nodes.Anten01.geometry}
            material={nodes.Anten01.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Anten02"
            geometry={nodes.Anten02.geometry}
            material={nodes.Anten02.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Anten03"
            geometry={nodes.Anten03.geometry}
            material={nodes.Anten03.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Ararm_01"
            geometry={nodes.Ararm_01.geometry}
            material={nodes.Ararm_01.material}
            position={[-26.6772, 94.013, 38.5373]}
          />
          <mesh
            name="Back_Bumper"
            geometry={nodes.Back_Bumper.geometry}
            material={nodes.Back_Bumper.material}
            position={[-56.3866, 40.1075, -193.7649]}
          />
          <mesh
            name="Back_Bumper_Plastic_Band"
            geometry={nodes.Back_Bumper_Plastic_Band.geometry}
            material={nodes.Back_Bumper_Plastic_Band.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Becker_Europa"
            geometry={nodes.Becker_Europa.geometry}
            material={materials.Becker}
            position={[-56.6559, 82.9871, 39.5945]}
          />
          <mesh
            name="Blinker"
            geometry={nodes.Blinker.geometry}
            material={nodes.Blinker.material}
            position={[-56.2956, 48.4477, 200.4403]}
          />
          <mesh
            name="Blinker_Plastic_Frame"
            geometry={nodes.Blinker_Plastic_Frame.geometry}
            material={nodes.Blinker_Plastic_Frame.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Blinker_Steal_Frame"
            geometry={nodes.Blinker_Steal_Frame.geometry}
            material={nodes.Blinker_Steal_Frame.material}
            position={[-56.2983, 48.45, 196.9534]}
          />
          <mesh
            name="Body"
            geometry={nodes.Body.geometry}
            material={materials.RedBody}
            position={[-56.2726, 69.7049, 2.7146]}
          />
          <mesh
            name="Box001"
            geometry={nodes.Box001.geometry}
            material={nodes.Box001.material}
            position={[-53.7996, 75.1334, 39.9714]}
          />
          <mesh
            name="Brake__Light"
            geometry={nodes.Brake__Light.geometry}
            material={materials.BackLights}
            position={[-56.5074, 50.8569, -198.6385]}
          />
          <mesh
            name="Brake__Light_Frame"
            geometry={nodes.Brake__Light_Frame.geometry}
            material={nodes.Brake__Light_Frame.material}
            position={[-56.5117, 50.4714, -197.9231]}
          />
          <mesh
            name="Brake_Light_plastic"
            geometry={nodes.Brake_Light_plastic.geometry}
            material={nodes.Brake_Light_plastic.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Brake_Light_Screw"
            geometry={nodes.Brake_Light_Screw.geometry}
            material={nodes.Brake_Light_Screw.material}
            position={[-123.533, 59.7923, -195.3924]}
          />
          <mesh
            name="Brake_Light_Screw001"
            geometry={nodes.Brake_Light_Screw001.geometry}
            material={nodes.Brake_Light_Screw001.material}
            position={[-123.713, 41.4516, -200.3867]}
          />
          <mesh
            name="Brake_Light_Screw002"
            geometry={nodes.Brake_Light_Screw002.geometry}
            material={nodes.Brake_Light_Screw002.material}
            position={[10.4671, 59.7923, -195.455]}
          />
          <mesh
            name="Brake_Light_Screw003"
            geometry={nodes.Brake_Light_Screw003.geometry}
            material={nodes.Brake_Light_Screw003.material}
            position={[10.6428, 41.4516, -200.4496]}
          />
          <mesh
            name="Bulb"
            geometry={nodes.Bulb.geometry}
            material={nodes.Bulb.material}
            position={[-124.3275, 2.9924, -20.4097]}
          />
          <mesh
            name="Bulb001"
            geometry={nodes.Bulb001.geometry}
            material={nodes.Bulb001.material}
            position={[9.6505, 2.9924, -20.4721]}
          />
          <mesh
            name="Bumper"
            geometry={nodes.Bumper.geometry}
            material={nodes.Bumper.material}
            position={[-56.2129, 42.412, 193.5029]}
          />
          <mesh
            name="Bumper_plastic"
            geometry={nodes.Bumper_plastic.geometry}
            material={nodes.Bumper_plastic.material}
            position={[-56.2129, 42.412, 193.5029]}
          />
          <mesh
            name="Car_Key"
            geometry={nodes.Car_Key.geometry}
            material={nodes.Car_Key.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Chair_Plastics"
            geometry={nodes.Chair_Plastics.geometry}
            material={nodes.Chair_Plastics.material}
            position={[-56.6371, 26.0611, -2.3397]}
          />
          <mesh
            name="Cover_Steel"
            geometry={nodes.Cover_Steel.geometry}
            material={nodes.Cover_Steel.material}
            position={[-123.9803, 83.0702, -59.9371]}
          />
          <mesh
            name="Dashboard_Back_Body"
            geometry={nodes.Dashboard_Back_Body.geometry}
            material={nodes.Dashboard_Back_Body.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Dashboard_Glasses"
            geometry={nodes.Dashboard_Glasses.geometry}
            material={nodes.Dashboard_Glasses.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Dashboard_Handle"
            geometry={nodes.Dashboard_Handle.geometry}
            material={nodes.Dashboard_Handle.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Dashboard_Plastic_Opaque"
            geometry={nodes.Dashboard_Plastic_Opaque.geometry}
            material={nodes.Dashboard_Plastic_Opaque.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Dashboard_Screw"
            geometry={nodes.Dashboard_Screw.geometry}
            material={nodes.Dashboard_Screw.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Dashboard_Steel001"
            geometry={nodes.Dashboard_Steel001.geometry}
            material={nodes.Dashboard_Steel001.material}
            position={[-56.3558, 82.8296, 46.525]}
          />
          <mesh
            name="Door_Glass_Border"
            geometry={nodes.Door_Glass_Border.geometry}
            material={nodes.Door_Glass_Border.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Door_Interior_Steel001"
            geometry={nodes.Door_Interior_Steel001.geometry}
            material={nodes.Door_Interior_Steel001.material}
            position={[-56.3834, 58.1327, -17.4648]}
          />
          <mesh
            name="Door_Leather"
            geometry={nodes.Door_Leather.geometry}
            material={nodes.Door_Leather.material}
            position={[-56.3852, 77.2575, -1.0079]}
          />
          <mesh
            name="Door_Side"
            geometry={nodes.Door_Side.geometry}
            material={nodes.Door_Side.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Exhast00"
            geometry={nodes.Exhast00.geometry}
            material={nodes.Exhast00.material}
            position={[-63.0941, 32.2832, -41.3224]}
          />
          <mesh
            name="Exhast01"
            geometry={nodes.Exhast01.geometry}
            material={nodes.Exhast01.material}
            position={[-1.1542, 26.0883, -199.0214]}
          />
          <mesh
            name="Exhast02"
            geometry={nodes.Exhast02.geometry}
            material={nodes.Exhast02.material}
            position={[-14.3208, 27.9076, -189.3669]}
          />
          <mesh
            name="Floor"
            geometry={nodes.Floor.geometry}
            material={nodes.Floor.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Front_Light_Screw"
            geometry={nodes.Front_Light_Screw.geometry}
            material={nodes.Front_Light_Screw.material}
            position={[-125.721, 55.9532, 195.3767]}
          />
          <mesh
            name="Front_Light"
            geometry={nodes.Front_Light.geometry}
            material={nodes.Front_Light.material}
            position={[-125.5444, 67.498, 187.8559]}
          />
          <mesh
            name="Fuel"
            geometry={nodes.Fuel.geometry}
            material={nodes.Fuel.material}
            position={[-36.2698, 81.2323, 36.6515]}
          />
          <group name="Gas_Tank" position={[-105.6622, 48.3014, -197.2948]}>
            <mesh name="Mesh071" geometry={nodes.Mesh071.geometry} material={nodes.Mesh071.material}/>
            <mesh name="Mesh071_1" geometry={nodes.Mesh071_1.geometry} material={nodes.Mesh071_1.material}/>
          </group>
          <mesh
            name="Gaz_Tank_Cover"
            geometry={nodes.Gaz_Tank_Cover.geometry}
            material={nodes.Gaz_Tank_Cover.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Gear_Handle"
            geometry={nodes.Gear_Handle.geometry}
            material={nodes.Gear_Handle.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Gear_Handle_Plastic"
            geometry={nodes.Gear_Handle_Plastic.geometry}
            material={nodes.Gear_Handle_Plastic.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Gear_Knob"
            geometry={nodes.Gear_Knob.geometry}
            material={nodes.Gear_Knob.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Glass_Plastic"
            geometry={nodes.Glass_Plastic.geometry}
            material={nodes.Glass_Plastic.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Grille"
            geometry={nodes.Grille.geometry}
            material={nodes.Grille.material}
            position={[-56.235, 54.7111, 203.3852]}
          />
          <mesh
            name="Grille02"
            geometry={nodes.Grille02.geometry}
            material={nodes.Grille02.material}
            position={[-56.235, 54.7111, 203.3852]}
          />
          <mesh
            name="Handle"
            geometry={nodes.Handle.geometry}
            material={nodes.Handle.material}
            position={[-56.3794, 66.7078, -37.9603]}
          />
          <mesh
            name="Handle_Tape"
            geometry={nodes.Handle_Tape.geometry}
            material={nodes.Handle_Tape.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Headlight"
            geometry={nodes.Headlight.geometry}
            material={materials.FrontLights}
            position={[-56.1846, 66.8104, 194.3171]}
          />
          <mesh
            name="Hood_Logo"
            geometry={nodes.Hood_Logo.geometry}
            material={materials.BenzLogo}
            position={[-56.1968, 79.9263, 178.9371]}
          />
          <mesh
            name="Keychain_Leather"
            geometry={nodes.Keychain_Leather.geometry}
            material={materials.Keychain}
            position={[-29.4328, 71.7706, 38.593]}
          />
          <mesh
            name="Keys_"
            geometry={nodes.Keys_.geometry}
            material={nodes.Keys_.material}
            position={[-32.8096, 77.7249, 41.6601]}
          />
          <mesh
            name="km"
            geometry={nodes.km.geometry}
            material={nodes.km.material}
            position={[-33.2015, 90.2903, 38.4318]}
          />
          <mesh
            name="km_gauge"
            geometry={nodes.km_gauge.geometry}
            material={nodes.km_gauge.material}
            position={[-33.1128, 89.5054, 37.8958]}
          />
          <mesh
            name="License_Plate003"
            geometry={nodes.License_Plate003.geometry}
            material={nodes.License_Plate003.material}
            position={[-56.2445, 34.9726, 207.8449]}
          />
          <mesh
            name="License_Plate2"
            geometry={nodes.License_Plate2.geometry}
            material={nodes.License_Plate2.material}
            position={[-56.4335, 51.7636, -197.8129]}
          />
          <mesh
            name="Light_Frame"
            geometry={nodes.Light_Frame.geometry}
            material={nodes.Light_Frame.material}
            position={[-123.5096, 51.3549, -197.6409]}
          />
          <mesh
            name="Light_Frame001"
            geometry={nodes.Light_Frame001.geometry}
            material={nodes.Light_Frame001.material}
            position={[10.4684, 51.3549, -197.7032]}
          />
          <mesh
            name="Light_Steel"
            geometry={nodes.Light_Steel.geometry}
            material={nodes.Light_Steel.material}
            position={[-123.5027, 50.848, -196.9712]}
          />
          <mesh
            name="Light_Steel001"
            geometry={nodes.Light_Steel001.geometry}
            material={nodes.Light_Steel001.material}
            position={[10.4753, 50.848, -197.0336]}
          />
          <mesh
            name="Logo_Back"
            geometry={nodes.Logo_Back.geometry}
            material={nodes.Logo_Back.material}
            position={[-56.4363, 70.9653, -179.649]}
          />
          <mesh
            name="Moquet001"
            geometry={nodes.Moquet001.geometry}
            material={materials.Floor}
            position={[-56.8609, 55.4386, -2.4795]}
          />
          <mesh
            name="Night_Light"
            geometry={nodes.Night_Light.geometry}
            material={nodes.Night_Light.material}
            position={[-125.3206, 28.6613, -203.1118]}
          />
          <mesh
            name="Night_Light__Frame"
            geometry={nodes.Night_Light__Frame.geometry}
            material={nodes.Night_Light__Frame.material}
            position={[-125.3206, 28.6341, -203.1118]}
          />
          <mesh
            name="Night_Light001"
            geometry={nodes.Night_Light001.geometry}
            material={nodes.Night_Light001.material}
            position={[12.215, 28.6744, -203.1759]}
          />
          <mesh
            name="Oil"
            geometry={nodes.Oil.geometry}
            material={nodes.Oil.material}
            position={[-16.7382, 81.2109, 37.0577]}
          />
          <mesh
            name="Pedal"
            geometry={nodes.Pedal.geometry}
            material={nodes.Pedal.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Pedal_Plastic"
            geometry={nodes.Pedal_Plastic.geometry}
            material={nodes.Pedal_Plastic.material}
            position={[-20.6833, 48.43, 66.2069]}
          />
          <mesh
            name="Pedal_Plastic_Washer"
            geometry={nodes.Pedal_Plastic_Washer.geometry}
            material={nodes.Pedal_Plastic_Washer.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Plastic_Tape"
            geometry={nodes.Plastic_Tape.geometry}
            material={nodes.Plastic_Tape.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Pointer"
            geometry={nodes.Pointer.geometry}
            material={nodes.Pointer.material}
            position={[-44.9807, 85.0689, 38.6203]}
          />
          <mesh
            name="Pointer02"
            geometry={nodes.Pointer02.geometry}
            material={nodes.Pointer02.material}
            position={[-26.8173, 90.023, 37.7783]}
          />
          <mesh
            name="Pointer03"
            geometry={nodes.Pointer03.geometry}
            material={nodes.Pointer03.material}
            position={[-36.3145, 80.273, 36.5315]}
          />
          <mesh
            name="Pointer04"
            geometry={nodes.Pointer04.geometry}
            material={nodes.Pointer04.material}
            position={[-36.3145, 80.273, 36.5315]}
          />
          <mesh
            name="Pointer05"
            geometry={nodes.Pointer05.geometry}
            material={nodes.Pointer05.material}
            position={[-73.2423, 81.2266, 40.6273]}
          />
          <mesh
            name="Pointer06"
            geometry={nodes.Pointer06.geometry}
            material={nodes.Pointer06.material}
            position={[-26.8173, 90.023, 37.7783]}
          />
          <mesh
            name="Ponter3"
            geometry={nodes.Ponter3.geometry}
            material={nodes.Ponter3.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Radiator"
            geometry={nodes.Radiator.geometry}
            material={nodes.Radiator.material}
            position={[-56.2726, 57.2834, 2.7146]}
          />
          <mesh
            name="Roof_Cover_Tape"
            geometry={nodes.Roof_Cover_Tape.geometry}
            material={nodes.Roof_Cover_Tape.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Side_Mirror"
            geometry={nodes.Side_Mirror.geometry}
            material={materials['Material.001']}
            position={[17.3486, 92.8391, 32.9527]}
          />
          <mesh
            name="Side_Mirror_Plastic"
            geometry={nodes.Side_Mirror_Plastic.geometry}
            material={nodes.Side_Mirror_Plastic.material}
            position={[16.1539, 81.7543, 46.7595]}
          />
          <mesh
            name="Side_Steel"
            geometry={nodes.Side_Steel.geometry}
            material={nodes.Side_Steel.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Side_Steel001"
            geometry={nodes.Side_Steel001.geometry}
            material={nodes.Side_Steel001.material}
            position={[11.668, 0.022, -2.4435]}
          />
          <mesh
            name="Speedometer"
            geometry={nodes.Speedometer.geometry}
            material={nodes.Speedometer.material}
            position={[-20.5616, 89.3377, 38.2631]}
          />
          <mesh
            name="Speedometer_Light"
            geometry={nodes.Speedometer_Light.geometry}
            material={nodes.Speedometer_Light.material}
            position={[-73.2437, 81.223, 40.8377]}
          />
          <mesh
            name="Steering_Wheel"
            geometry={nodes.Steering_Wheel.geometry}
            material={nodes.Steering_Wheel.material}
            position={[-26.6376, 84.6545, 23.9198]}
          />
          <mesh
            name="Steering__Wheel_Telescope"
            geometry={nodes.Steering__Wheel_Telescope.geometry}
            material={nodes.Steering__Wheel_Telescope.material}
            position={[-24.9952, 81.6277, 33.6752]}
          />
          <mesh
            name="Watch"
            geometry={nodes.Watch.geometry}
            material={nodes.Watch.material}
            position={[-73.2412, 81.2209, 40.7702]}
          />
          <mesh
            name="Water"
            geometry={nodes.Water.geometry}
            material={nodes.Water.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Wheel_System"
            geometry={nodes.Wheel_System.geometry}
            material={nodes.Wheel_System.material}
            position={[-55.2922, 22.413, 134.0194]}
          />
          <mesh
            name="White_Plastic_Key"
            geometry={nodes.White_Plastic_Key.geometry}
            material={nodes.White_Plastic_Key.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <group name="Windshield" position={[-56.3864, 89.7727, 2.1353]}>
            <mesh name="Mesh090" geometry={nodes.Mesh090.geometry} material={nodes.Mesh090.material}/>
            <mesh name="Mesh090_1" geometry={nodes.Mesh090_1.geometry} material={nodes.Mesh090_1.material}/>
          </group>
          <mesh
            name="Windshield_Plastic"
            geometry={nodes.Windshield_Plastic.geometry}
            material={nodes.Windshield_Plastic.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Windshield_Washer_Plastic"
            geometry={nodes.Windshield_Washer_Plastic.geometry}
            material={nodes.Windshield_Washer_Plastic.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Windshield_Washer_Steel"
            geometry={nodes.Windshield_Washer_Steel.geometry}
            material={nodes.Windshield_Washer_Steel.material}
            position={[-124.3112, 0.022, -2.3801]}
          />
          <mesh
            name="Windshield01"
            geometry={nodes.Windshield01.geometry}
            material={materials['Material.004']}
            position={[-56.3568, 105.082, 32.6844]}
          />
          <mesh
            name="Windward_Steel"
            geometry={nodes.Windward_Steel.geometry}
            material={nodes.Windward_Steel.material}
            position={[-56.2755, 56.8318, -3.7753]}
          />
        </group>
        <group name="Empty" position={[0, 1.1839, 0]} scale={1.7189}/>
        <group name="Sun" position={[-0.0484, 0.2532, 1.3405]}/>
        <mesh
          name="FR_WHEELSPOKES"
          geometry={nodes.FR_WHEELSPOKES.geometry}
          material={nodes.FR_WHEELSPOKES.material}
          position={[-1.4123, 0.2493, 1.315]}
          rotation={[0, 0.0076, 0]}
          scale={0.01}
        />
        <mesh
          name="FR_WHEELTIRE"
          geometry={nodes.FR_WHEELTIRE.geometry}
          material={nodes.FR_WHEELTIRE.material}
          position={[-1.4123, 0.2493, 1.315]}
          rotation={[0, 0.0076, 0]}
          scale={0.01}
        />
        <mesh
          name="FR_WHEELCALIPER"
          geometry={nodes.FR_WHEELCALIPER.geometry}
          material={nodes.FR_WHEELCALIPER.material}
          position={[-1.4152, 0.2493, 1.315]}
          rotation={[0, 0.0076, -0.0007]}
          scale={0.01}
        />
        <mesh
          name="FR_WHEELSPOKESPLATE"
          geometry={nodes.FR_WHEELSPOKESPLATE.geometry}
          material={nodes.FR_WHEELSPOKESPLATE.material}
          position={[-1.4152, 0.2493, 1.315]}
          rotation={[0, 0.0076, -0.0007]}
          scale={0.01}
        />
        <mesh
          name="FL_WHEELCALIPER"
          geometry={nodes.FL_WHEELCALIPER.geometry}
          material={nodes.FL_WHEELCALIPER.material}
          position={[0.2819, 0.2493, 1.315]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
        <mesh
          name="FL_WHEELSPOKES"
          geometry={nodes.FL_WHEELSPOKES.geometry}
          material={nodes.FL_WHEELSPOKES.material}
          position={[0.2819, 0.2493, 1.315]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
        <mesh
          name="FL_WHEELTIRE"
          geometry={nodes.FL_WHEELTIRE.geometry}
          material={nodes.FL_WHEELTIRE.material}
          position={[0.2819, 0.2493, 1.315]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
        <mesh
          name="FL_WHEELSPOKESPLATE"
          geometry={nodes.FL_WHEELSPOKESPLATE.geometry}
          material={nodes.FL_WHEELSPOKESPLATE.material}
          position={[0.2819, 0.2493, 1.315]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
        <mesh
          name="BR_WHEELSPOKES"
          geometry={nodes.BR_WHEELSPOKES.geometry}
          material={nodes.BR_WHEELSPOKES.material}
          position={[-1.4123, 0.2493, -1.0457]}
          rotation={[0, 0.0076, 0]}
          scale={0.01}
        />
        <mesh
          name="BR_WHEELTIRE"
          geometry={nodes.BR_WHEELTIRE.geometry}
          material={nodes.BR_WHEELTIRE.material}
          position={[-1.4123, 0.2493, -1.0457]}
          rotation={[0, 0.0076, 0]}
          scale={0.01}
        />
        <mesh
          name="BR_WHEELCALIPER"
          geometry={nodes.BR_WHEELCALIPER.geometry}
          material={nodes.BR_WHEELCALIPER.material}
          position={[-1.4152, 0.2493, -1.0457]}
          rotation={[0, 0.0076, -0.0007]}
          scale={0.01}
        />
        <mesh
          name="BR_WHEELSPOKESPLATE"
          geometry={nodes.BR_WHEELSPOKESPLATE.geometry}
          material={nodes.BR_WHEELSPOKESPLATE.material}
          position={[-1.4152, 0.2493, -1.0457]}
          rotation={[0, 0.0076, -0.0007]}
          scale={0.01}
        />
        <mesh
          name="BL_WHEELCALIPER"
          geometry={nodes.BL_WHEELCALIPER.geometry}
          material={nodes.BL_WHEELCALIPER.material}
          position={[0.2819, 0.2493, -1.0457]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
        <mesh
          name="BL_WHEELSPOKES"
          geometry={nodes.BL_WHEELSPOKES.geometry}
          material={nodes.BL_WHEELSPOKES.material}
          position={[0.2819, 0.2493, -1.0457]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
        <mesh
          name="BL_WHEELTIRE"
          geometry={nodes.BL_WHEELTIRE.geometry}
          material={nodes.BL_WHEELTIRE.material}
          position={[0.2819, 0.2493, -1.0457]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
        <mesh
          name="BL_WHEELSPOKESPLATE"
          geometry={nodes.BL_WHEELSPOKESPLATE.geometry}
          material={nodes.BL_WHEELSPOKESPLATE.material}
          position={[0.2819, 0.2493, -1.0457]}
          rotation={[0, -0.0076, 3.1414]}
          scale={0.01}
        />
      </group>
    </group>
  );
  
}

useGLTF.preload(FILE_URL);