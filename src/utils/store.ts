import {Vector3} from "three";
import create from "zustand";
import {MotionValue, useMotionValue, useSpring} from "framer-motion";
import produce from "immer";
import {addEffect} from "@react-three/fiber";

export type StoreState = {
  enter: boolean,
  toggleEnter: () => void,
  skyColor: string,
  fog: { near: number, far: number, color: string, accent: string },
  storyControls: any,
  setControls: (controls: any) => void,
  currentSection: { name: string, poi: number, delay: number } | null,
  previousSection: { name: string, poi: number, delay: number } | null,
  setCurrentSection: (section: { name: string, poi: number, delay: number } | null, prevId?: number) => void,
  animating: boolean,
  setAnimationStatus: (status: boolean) => void,
  loaded: string[],
  progress: MotionValue,
  objectRendered: (id: string) => void,
  loadTotal: string[],
  objectQueued: (id: string) => void,
  hexToVec3: (color: string) => Vector3,
}

export const useStore = create<StoreState>()((set: any, get: any) => {
  
  return {
    enter: false,
    toggleEnter: () => set(() => ({enter: true})),
    skyColor: "#B0BAB8",
    fog: {
      near: 10,
      far: 20,
      // color: "#BCC8C6",
      color: "#C2C8C7",
      // color: "#f03030",
      accent: "#B0BAB8"
    },
    storyControls: undefined,
    setControls: (controls: any) => {
      
      set(() => ({storyControls: controls}));
      
    },
    sectionDelays: [500, 0, 0],
    currentSection: {name: "Home", poi: 0, delay: 1000},
    previousSection: null,
    setCurrentSection: (section: { name: string, poi: number, delay: number } | null, prevId?: number) => set(() => ({
      previousSection: prevId ? prevId : get().currentSection,
      currentSection: section
    })),
    animating: false,
    setAnimationStatus: (status: boolean) => set(() => ({animating: status})),
    loaded: [],
    progress: useSpring(useMotionValue(0)),
    objectRendered: (id: string) => {
      
      if (get().loaded.includes(id) || id === "") return;
      // console.log("loaded: " + (get().loaded.length + 1) + "/" + get().loadTotal.length);
      const newLoaded = get().loaded;
      newLoaded.push(id);
      get().progress.set(get().loaded.length >= get().loadTotal ? 100 : (get().loaded.length / get().loadTotal.length).toFixed(2));
      set(
        () => ({
          loaded: newLoaded,
        })
      );
      
    },
    loadTotal: [],
    objectQueued: (id: string) => {
      
      if (get().loadTotal.includes(id) || id === "") return;
      // console.log("queueing: " + (get().loadTotal.length + 1) + " items");
      const newLoadTotal = get().loadTotal;
      newLoadTotal.push(id);
      set(
        () => ({
          loadTotal: newLoadTotal,
        })
      );
      
    },
    hexToVec3: (hex: string) => {
      
      const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? new Vector3(
        Math.floor(parseInt(result[1], 16) / 255 * 1000) / 1000,
        Math.floor(parseInt(result[2], 16) / 255 * 1000) / 1000,
        Math.floor(parseInt(result[3], 16) / 255 * 1000) / 1000
      ) : new Vector3(0., 0., 0.);
      
    }
  };
  
});
