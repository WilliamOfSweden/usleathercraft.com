import React, { FC, useEffect } from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'
import useMobileNavStore from '../../../stores/mobileNavStore'
import useWindowSize from '../../../hooks/useWindowSize'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import List from '@material-ui/core/List'
import { Link } from 'gatsby'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const useStyles = makeStyles(() =>
  createStyles({
    list: {
      width: 237,
    },
  })
)

interface Props {
  data: {
    site: {
      siteMetadata: {
        navLinks: {
          name: string

          link: string
        }[]
      }
    }
  }
}

const MobileNav: FC<Props> = ({ data }) => {
  const classes = useStyles()

  const active = useMobileNavStore((state: StateProps) => state.activeMobileNav)

  const toggle = useMobileNavStore(
    (state: StateProps) => state.toggleActiveMobileNav
  )

  const closeNav = useMobileNavStore(
    (state: StateProps) => state.resetActiveMobileNav
  )

  const [width] = useWindowSize()

  useEffect(() => {
    if (width > 960) {
      closeNav()
    }
  })

  interface StateProps {
    activeMobileNav: boolean

    toggleActiveMobileNav: () => void

    resetActiveMobileNav: () => void
  }

  interface LinkProps {
    name: string

    link: string
  }

  return (
    <SwipeableDrawer
      anchor={'right'}
      open={active && width < 960}
      onOpen={toggle}
      onClose={toggle}
    >
      <nav>
        <List className={classes.list}>
          {data.site.siteMetadata.navLinks.map((link: LinkProps) => {
            return (
              <Link key={link.link} to={link.link}>
                <ListItem button onClick={closeNav}>
                  <ListItemText primary={link.name} />
                </ListItem>
              </Link>
            )
          })}
        </List>
      </nav>
    </SwipeableDrawer>
  )
}

export default MobileNav
