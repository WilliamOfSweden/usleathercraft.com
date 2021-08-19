import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import useMobileNavStore from '../../../stores/mobileNavStore'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    mobileOnly: {
      display: 'flex',
      marginRight: theme.spacing(-1.5),

      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
)

const MobileNavToggler: FC = () => {
  const classes = useStyles()

  interface StateProps {
    toggleActiveMobileNav: () => void
  }

  const toggle = useMobileNavStore(
    (state: StateProps) => state.toggleActiveMobileNav
  )

  return (
    <IconButton
      aria-label='open drawer'
      edge='start'
      className={classes.mobileOnly}
      color='primary'
      onClick={toggle}
    >
      <MenuIcon />
    </IconButton>
  )
}

export default MobileNavToggler
