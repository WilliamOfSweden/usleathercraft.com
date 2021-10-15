import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import { StaticImage } from 'gatsby-plugin-image'
import Box from '@material-ui/core/Box'
import Logo from './logo'

import ScrollButton from '../../global/scrollButton'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(8),
      position: 'relative',
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
  })
)

const Masthead = () => {
  const {
    graphCmsIndexPageMasthead: { imageAlt },
  } = useStaticQuery(graphql`
    query IndexPageMastheadQuery {
      graphCmsIndexPageMasthead {
        imageAlt
      }
    }
  `)

  const classes = useStyles()

  return (
    <Container className={classes.container} component='section' maxWidth='xl'>
      <StaticImage
        alt={imageAlt}
        className={classes.image}
        src='https://media.graphcms.com/output=format:jpg/2vRigXbYTEOftZp6lstt'
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <Box className={classes.contentWrapper}>
        <Logo />
      </Box>
      <ScrollButton scrollTarget='services-section' />
    </Container>
  )
}

export default Masthead
