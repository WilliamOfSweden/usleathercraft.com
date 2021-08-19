import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import { StaticImage } from 'gatsby-plugin-image'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import ScrollButton from '../../global/scrollButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(8),
      position: 'relative',
    },

    contentWrapper: {
      alignItems: `center`,
      display: `flex`,
      height: `100%`,
      justifyContent: `center`,
      width: `100%`,
      position: `absolute`,
      top: 0,
      left: 0,
    },

    h1: {
      fontSize: `calc(1rem + 4vw)`,
      letterSpacing: `4px`,
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      textTransform: `uppercase`,
    },

    image: {
      height: `60vh`,
      minHeight: `360px`,
      width: `100%`,

      [theme.breakpoints.up('md')]: {
        height: `70vh`,
        minHeight: `600px`,
      },

      [theme.breakpoints.up('lg')]: {
        height: `85vh`,
      },
    },

    leftArrow: {
      height: 0,
      width: 0,
      borderLeft: '15px solid beige',
      borderTop: `7px solid transparent`,
      borderBottom: `7px solid transparent`,
      marginRight: `-2px`,
    },

    rightArrow: {
      height: 0,
      width: 0,
      borderRight: '15px solid beige',
      borderTop: `7px solid transparent`,
      borderBottom: `7px solid transparent`,
      marginLeft: `-2px`,
    },

    span: {
      display: `block`,
      flex: 2,
      textAlign: `center`,
    },
  })
)

const Masthead: FC = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container} component='section' maxWidth='xl'>
      <StaticImage
        alt='Vintage phone placed on wooden table.'
        className={classes.image}
        formats={['auto', 'webp', 'avif']}
        layout='fullWidth'
        loading='eager'
        placeholder='none'
        quality={100}
        src='https://media.graphcms.com/UKcusJfUT4uH2s17wGQp'
      />

      <Box className={classes.contentWrapper}>
        <Box display='flex' flexDirection='column' px={2}>
          <Typography
            align='center'
            className={classes.h1}
            component='h1'
            variant='h1'
          >
            Let's Connect
          </Typography>

          <Box display='flex' justifyContent='center' marginBottom={1.67}>
            <Box
              display='flex'
              justifyContent='center'
              maxWidth='70vw'
              width='100%'
            >
              <Box display='flex' alignItems='center' flex={5} width='100%'>
                <Box className={classes.leftArrow} />

                <Box height='2px' bgcolor='beige' width='100%' />
              </Box>

              <span className={classes.span}>✻</span>

              <Box display='flex' alignItems='center' flex={5} width='100%'>
                <Box height='2px' bgcolor='beige' width='100%' />

                <Box className={classes.rightArrow} />
              </Box>
            </Box>
          </Box>

          <Typography align='center'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Asperiores, autus.
          </Typography>
        </Box>
      </Box>
      <ScrollButton scrollTarget='contact-section' />
    </Container>
  )
}

export default Masthead
