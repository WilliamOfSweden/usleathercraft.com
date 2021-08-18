import React, { FC, useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ServicesSection: FC = () => {
  interface DataProps {
    allGraphCmsServicesPageServicePost: {
      edges: {
        node: {
          id: string
          heading: string
          images: {
            gatsbyImageData: IGatsbyImageData
          }[]
          imageAlts: string[]
          body: {
            markdownNode: {
              childMdx: {
                body: string
              }
            }
          }
        }
      }[]
    }
  }

  const {
    allGraphCmsServicesPageServicePost: { edges },
  } = useStaticQuery<DataProps>(graphql`
    query ServicesPageServicesSectionQuery {
      allGraphCmsServicesPageServicePost {
        edges {
          node {
            id
            heading
            images {
              gatsbyImageData
            }
            imageAlts
            body {
              markdownNode {
                childMdx {
                  body
                }
              }
            }
          }
        }
      }
    }
  `)

  const [state, setState] = useState<null | string>(null)

  return (
    <section>
      <h5>Choose a category that you want to know more about.</h5>
      {edges.map(edge => {
        return (
          <div key={edge.node.id}>
            <GatsbyImage
              alt={edge.node.imageAlts[0]}
              image={edge.node.images[0].gatsbyImageData}
              onClick={() => setState(edge.node.id)}
            />
            <h2>{edge.node.heading}</h2>
          </div>
        )
      })}

      {edges
        .filter(edge => edge.node.id === state)
        .map(edge => {
          return (
            <div key={edge.node.id}>
              <h2>{edge.node.heading}</h2>
              <MDXRenderer>
                {edge.node.body.markdownNode.childMdx.body}
              </MDXRenderer>
              <GatsbyImage
                alt={edge.node.imageAlts[1]}
                image={edge.node.images[1].gatsbyImageData}
              />
              <GatsbyImage
                alt={edge.node.imageAlts[2]}
                image={edge.node.images[2].gatsbyImageData}
              />
            </div>
          )
        })}
    </section>
  )
}

export default ServicesSection
