import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

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

  return (
    <section>
      <h2>
        <span>{styledHeading}</span>
        {heading}
      </h2>
      <span>✻✻✻</span>
      <p>{body}</p>
      <StaticImage
        src='https://media.graphcms.com/7Cs9W2SKQz2Xnj5sdw80'
        alt={imageAlt[0]}
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
      <StaticImage
        src='https://media.graphcms.com/3fTHE6U7SikWSvyeqSCQ'
        alt={imageAlt[1]}
        loading='eager'
        formats={['auto', 'webp', 'avif']}
        placeholder='none'
        layout='fullWidth'
      />
    </section>
  )
}

export default AboutSection
