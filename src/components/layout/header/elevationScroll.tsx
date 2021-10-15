import React, { ReactElement } from 'react'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'

interface Props {
  children: ReactElement
}

const ElevationScroll = ({ children }: Props) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: !trigger ? 0 : 8,
  })
}

export default ElevationScroll
