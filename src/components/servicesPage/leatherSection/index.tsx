import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const LeatherSection: FC = () => {
  const {
    graphCmsServicesPageLeatherSection: {
      styledHeading,
      heading,
      body,
      imageAlt,
    },
  } = useStaticQuery(graphql`
    query ServicesPageLeatherSectionQuery {
      graphCmsServicesPageLeatherSection {
        styledHeading
        heading
        body
        imageAlt
      }
    }
  `)

  return (
    <section>
      <h2>
        <span>{styledHeading}</span>
        {heading}
      </h2>
      <p>{body}</p>
      <StaticImage
        src='https://media.graphcms.com/I1OXljs2T0eME020atxS'
        alt={imageAlt}
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
    </section>
  )
}

export default LeatherSection
