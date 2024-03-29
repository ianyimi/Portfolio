import {useRouter} from 'next/router'
import {setState} from '@/helpers/store'
import {useEffect} from 'react'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'
import {isMobile} from "react-device-detect";
import {Analytics} from '@vercel/analytics/react';
import {Loader} from "@react-three/drei"

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

function App({Component, pageProps = {title: 'index'}}) {
  const router = useRouter()
  
  useEffect(() => {
    if (isMobile) window.location.replace("https://ianyimi.carrd.co");
    setState({router})
  }, [router])
  
  return (
    <>
      <Header title={pageProps.title}/>
      <Dom>
        <Component {...pageProps} />
        <Analytics/>
      </Dom>
      {Component?.r3f && (
        <div>
          {/* @ts-ignore */}
          <LCanvas>
            {Component.r3f(pageProps)}
          </LCanvas>
          {/*<Loader dataInterpolation={(p) => `Loading ${p.toFixed(2)}%`}/>*/}
        </div>
      )}
    </>
  )
}

export default App
