import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const CraftSection: FC = () => {
  const {
    graphCmsAboutPageCraftSection: {
      styledHeading,
      heading,
      body,
      images,
      imagesAlt,
    },
  } = useStaticQuery(graphql`
    query AboutPageCraftSectionQuery {
      graphCmsAboutPageCraftSection {
        styledHeading
        heading
        body
        images {
          gatsbyImageData
        }
        imagesAlt
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
      <GatsbyImage alt={imagesAlt[0]} image={images[0].gatsbyImageData} />
      <GatsbyImage alt={imagesAlt[1]} image={images[1].gatsbyImageData} />
    </section>
  )
}

export default CraftSection
