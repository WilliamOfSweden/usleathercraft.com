import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    deskTopOnly: {
      display: 'none',

      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },

    navLinks: {
      padding: theme.spacing(1.5, 2),
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

const DesktopNav: FC<Props> = ({ data }) => {
  const classes = useStyles()

  interface LinkProps {
    name: string

    link: string
  }

  return (
    <nav className={classes.deskTopOnly}>
      {data.site.siteMetadata.navLinks.map((link: LinkProps) => {
        return (
          <Button
            className={classes.navLinks}
            component={Link}
            key={link.link}
            to={link.link}
          >
            {link.name}
          </Button>
        )
      })}
    </nav>
  )
}

export default DesktopNav
