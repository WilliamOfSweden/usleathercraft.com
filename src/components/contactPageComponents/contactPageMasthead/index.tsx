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

export const ContactPageMasthead = () => {
  const {
    graphCmsContactPageMasthead: { title, subtitle, imageAlt },
  } = useStaticQuery(graphql`
    query ContactPageMastheadQuery {
      graphCmsContactPageMasthead {
        title
        subtitle
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
          quality={100}
          src='https://media.graphcms.com/UKcusJfUT4uH2s17wGQp'
        />
      }
      scrollTarget='contact-section'
      subtitle={subtitle}
      title={title}
    />
  )
}
