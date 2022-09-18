import {useRouter} from 'next/router'
import {setState} from '@/helpers/store'
import {useEffect} from 'react'
import Header from '@/config'
import Dom from '@/components/layout/dom'
import '@/styles/index.css'
import dynamic from 'next/dynamic'
import {Loader} from "@react-three/drei"

const LCanvas = dynamic(() => import('@/components/layout/canvas'), {
  ssr: true,
})

function App({Component, pageProps = {title: 'index'}}) {
  const router = useRouter()
  
  useEffect(() => {
    setState({router})
  }, [router])
  
  return (
    <>
      <Header title={pageProps.title}/>
      <Dom>
        <Component {...pageProps} />
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
