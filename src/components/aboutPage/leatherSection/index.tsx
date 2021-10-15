import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import { GatsbyImage } from 'gatsby-plugin-image'

import PALETTE from '../../../styles/colorPalette'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      marginTop: theme.spacing(4),
      position: `relative`,
      '&::after': {
        content: '" "',
        display: 'block',
        height: `100%`,
        width: `calc(100% - 20px)`,
        borderBottom: `2px solid ${theme.palette.primary.light}`,
        position: `absolute`,
        top: 0,
        left: 8,
      },
    },
    container: {
      paddingBottom: theme.spacing(3),
      paddingTop: theme.spacing(9.65),
      marginTop: `5rem`,
    },
    image: {
      width: `100%`,
      height: `100%`,
    },
    imagesWrapper: {
      paddingRight: `0 !important`,
    },
    outerGrid: {
      [theme.breakpoints.up('md')]: {
        flexDirection: `row-reverse`,
      },
    },
    paragraph: {
      maxWidth: `55ch`,
    },
    rightImage: {
      paddingRight: `0 !important`,
    },
    span: {
      fontFamily: 'dancing script',
      fontSize: `4.5rem`,
      letterSpacing: 0,
      textTransform: 'none',
      color: PALETTE.accentColor,
    },
    textWrapper: {
      alignItems: `center`,
      display: `flex`,
      flexDirection: 'column',
      justifyContent: `center`,
      marginBottom: theme.spacing(9.65),
      [theme.breakpoints.up('md')]: {
        marginBottom: 0,
      },
      [theme.breakpoints.up('md')]: {
        marginBottom: theme.spacing(13),
      },
    },
  })
)

const LeatherSection = () => {
  const {
    graphCmsAboutPageLeatherSection: {
      styledHeading,
      heading,
      body,
      image: { gatsbyImageData },
      imageAlt,
    },
  } = useStaticQuery(graphql`
    query AboutPageLeatherSectionQuery {
      graphCmsAboutPageLeatherSection {
        styledHeading
        heading
        body
        image {
          gatsbyImageData
        }
        imageAlt
      }
    }
  `)

  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      component='section'
      id='info-section'
      maxWidth='xl'
    >
      <Grid className={classes.outerGrid} container spacing={3}>
        <Grid className={classes.textWrapper} item xs={12} md={6}>
          <Typography component='h2' variant='h2' align='center'>
            <span className={classes.span}>{styledHeading}</span>
            <br />
            {heading}
          </Typography>
          <Box component='span' mb={3.2} mt={2.6} textAlign='center'>
            ✻✻✻
          </Box>
          <Typography
            align='center'
            className={classes.paragraph}
            variant='body1'
          >
            {body}
          </Typography>
        </Grid>
        <Grid className={classes.imagesWrapper} item xs={12} md={6}>
          <GatsbyImage alt={imageAlt} image={gatsbyImageData} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default LeatherSection
