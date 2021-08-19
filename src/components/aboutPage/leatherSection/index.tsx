import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const LeatherSection: FC = () => {
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

  return (
    <section>
      <h2>
        <span>{styledHeading}</span>
        {heading}
      </h2>
      <span>✻✻✻</span>
      <p>{body}</p>
      <GatsbyImage alt={imageAlt} image={gatsbyImageData} />
    </section>
  )
}

export default LeatherSection
