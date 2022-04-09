import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

import { Masthead } from '../../shared/'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
  })
)

export const AboutPageMasthead = () => {
  const {
    graphCmsAboutPageMasthead: { title, subtitle, imageAlt },
  } = useStaticQuery(graphql`
    query AboutPageMastheadQuery {
      graphCmsAboutPageMasthead {
        title
        subtitle
        heroImage {
          gatsbyImageData
        }
        imageAlt
      }
    }
  `)

  const classes = useStyles()

  return (
    <Masthead
      bgImage={
        <StaticImage
          alt={imageAlt}
          className={classes.image}
          formats={['auto', 'webp', 'avif']}
          layout='fullWidth'
          loading='eager'
          placeholder='none'
          src='https://media.graphcms.com/6tRyxN1S5y2NCPLNaT4X'
        />
      }
      scrollTarget='craft-section'
      subtitle={subtitle}
      title={title}
    />
  )
}
