import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import ElevationScroll from './elevationScroll'
import Slide from '@material-ui/core/Slide'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Toolbar from '@material-ui/core/Toolbar'
import Box from '@material-ui/core/Box'

import DesktopNav from './desktopNav'
import MobileNavToggler from './mobileNavToggler'
import MobileNav from './MobileNav'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    container: {
      [theme.breakpoints.up('md')]: {
        paddingRight: theme.spacing(1),
      },
    },
  })
)

const Header = () => {
  const data = useStaticQuery(graphql`
    query navLinkQuery {
      site {
        siteMetadata {
          navLinks {
            name
            link
          }
        }
      }
    }
  `)

  const classes = useStyles()

  const trigger = useScrollTrigger({ threshold: 0 })

  return (
    <ElevationScroll>
      <Slide appear={false} direction='down' in={!trigger}>
        <AppBar className={classes.appBar} color='default'>
          <Container className={classes.container} maxWidth='xl'>
            <Toolbar disableGutters>
              <Box flexGrow={1} display='flex' alignItems='center' px={5} />
              <DesktopNav data={data} />
              <MobileNavToggler />
              <MobileNav data={data} />
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </ElevationScroll>
  )
}

export default Header
