import React, { FC } from 'react'
import { useStaticQuery, graphql } from 'gatsby'

const ServicesSection: FC = () => {
  interface DataProps {
    allGraphCmsIndexPageServicePost: {
      edges: {
        node: {
          id: string
          heading: string
          body: string
        }
      }[]
    }
  }

  const {
    allGraphCmsIndexPageServicePost: { edges },
  } = useStaticQuery<DataProps>(graphql`
    query IndexServicesSectionQuery {
      allGraphCmsIndexPageServicePost {
        edges {
          node {
            id
            heading
            body
          }
        }
      }
    }
  `)

  return (
    <section>
      <h2>Our Services</h2>
      {edges.map(edge => {
        return (
          <div key={edge.node.id}>
            <h3>{edge.node.heading}</h3>
            <p>{edge.node.body}</p>
          </div>
        )
      })}
      <button>Distinct Services</button>
    </section>
  )
}

export default ServicesSection
