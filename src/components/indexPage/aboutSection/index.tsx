import React, { FC } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import PALETTE from '../../../styles/colorPalette'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

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
    },

    image: {
      width: `100%`,
      height: `100%`,
    },

    imagesWrapper: {
      paddingRight: `0 !important`,
    },

    rightImage: {
      paddingRight: `0 !important`,
    },

    paragraph: {
      maxWidth: `55ch`,
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

const AboutSection: FC = () => {
  const {
    graphCmsIndexPageAboutSection: { styledHeading, heading, body, imageAlt },
  } = useStaticQuery(graphql`
    query IndexPageAboutSectionQuery {
      graphCmsIndexPageAboutSection {
        styledHeading
        heading
        body
        imageAlt
      }
    }
  `)

  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      component='section'
      id='about-section'
      maxWidth='xl'
    >
      <Grid container spacing={3}>
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
        <Grid
          className={classes.imagesWrapper}
          container
          item
          xs={12}
          md={6}
          spacing={3}
        >
          <Grid item xs={6}>
            <StaticImage
              src='https://media.graphcms.com/7Cs9W2SKQz2Xnj5sdw80'
              alt={imageAlt[0]}
              loading='eager'
              formats={['auto', 'webp', 'avif']}
              placeholder='none'
              layout='fullWidth'
            />
          </Grid>
          <Grid className={classes.rightImage} item xs={6}>
            <StaticImage
              src='https://media.graphcms.com/3fTHE6U7SikWSvyeqSCQ'
              alt={imageAlt[1]}
              loading='eager'
              formats={['auto', 'webp', 'avif']}
              placeholder='none'
              layout='fullWidth'
            />
          </Grid>
        </Grid>
      </Grid>
    </Container>
  )
}

export default AboutSection
