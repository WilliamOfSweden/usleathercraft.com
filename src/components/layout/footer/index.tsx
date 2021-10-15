import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'

import PALETTE from '../../../styles/colorPalette'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    adress: {
      fontStyle: `normal`,
      letterSpacing: `1px`,
      lineHeight: theme.spacing(0.2),
      textAlign: 'center',
    },
    flexItem: {
      flex: 1,
    },
    footer: {
      marginTop: theme.spacing(10),
      paddingBottom: theme.spacing(4),
    },
    lowerDivider: {
      borderTop: `2px dashed ${PALETTE.altColorOne}`,
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      width: `100%`,
    },
    divider: {
      borderTop: `2px dashed ${PALETTE.altColorOne}`,
      marginTop: theme.spacing(4),
      marginBottom: theme.spacing(4),
      width: `100%`,
    },
    signature: {
      color: PALETTE.accentColor,
      fontFamily: 'dancing script',
      fontSize: `1.2rem`,
    },
  })
)

const Footer = () => {
  const classes = useStyles()

  return (
    <footer className={classes.footer}>
      <Container maxWidth='xl'>
        <Divider className={classes.divider} />
        <Box justifyContent='space-between' display='flex'>
          <Typography
            align='center'
            // className={classes.flexItem}
            variant='body2'
          >
            © {new Date().getFullYear()} US LEATHER CRAFT
          </Typography>
          <Typography variant='body2'>
            Website developed by{' '}
            <a
              className={classes.signature}
              href='https://daghouz.com'
              rel='noreferrer noopener'
              target='_blank'
            >
              {' '}
              William Daghouz
            </a>
          </Typography>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
