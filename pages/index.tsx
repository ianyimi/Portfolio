import dynamic from 'next/dynamic'
// Step 5 - delete Instructions components
// import Shader from '@/components/canvas/Shader/Shader'
import Loading from "@/components/dom/Overlay";
import {isMobile} from "react-device-detect";

// Dynamic import is used to prevent a payload when the website start that will include three.js r3f etc...
// WARNING ! errors might get obfuscated by using dynamic import.
// If something goes wrong go back to a static import to show the error.
// https://github.com/pmndrs/react-three-next/issues/49
const Scene = dynamic(() => import('@/components/canvas/Scene'), {
  ssr: false,
})

// dom components goes here
const Page = (props) => {
  return (
    <>
      <Loading/>
    </>
  )
}

// canvas components goes here
// It will receive same props as Page component (from getStaticProps, etc.)
Page.r3f = (props) => (
  <>
    {/* @ts-ignore */}
    <Scene/>
  </>
)

export default Page

export async function getStaticProps() {
  return {
    props: {
      title: 'Isaiah Anyimi - Portfolio',
    },
  }
}
