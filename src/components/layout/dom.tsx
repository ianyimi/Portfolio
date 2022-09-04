import { DomStyle } from '@/components/layout/dom.style'
import { setState } from '@/helpers/store'
import { useEffect, useRef } from 'react'

const Dom = ({ children }) => {
  const ref = useRef(null)
  useEffect(() => {
    setState({ dom: ref })
  }, [])

  return <DomStyle ref={ref}>{children}</DomStyle>
}

export default Dom
