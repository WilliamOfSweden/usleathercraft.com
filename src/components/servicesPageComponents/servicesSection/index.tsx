import React, { Fragment, useState } from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import { IGatsbyImageData, GatsbyImage } from 'gatsby-plugin-image'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'

import PALETTE from '../../../styles/colorPalette'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    actionText: {
      marginBottom: theme.spacing(8),
      paddingTop: theme.spacing(2),
    },
    btn: {
      marginLeft: `auto`,
      marginRight: `auto`,
      marginTop: theme.spacing(8),
      maxWidth: `200px`,
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
      marginTop: theme.spacing(15),
    },
    divider: {
      borderTop: `2px dashed ${PALETTE.altColorOne}`,
      marginBottom: theme.spacing(7),
    },
    h2: {
      color: `beige`,
      fontFamily: 'source sans pro',
      fontWeight: 700,
      letterSpacing: `2px`,
      marginTop: theme.spacing(1),
      textTransform: 'uppercase',
    },
    imagesWrapper: {
      paddingRight: `0 !important`,
      marginTop: theme.spacing(9),
      [theme.breakpoints.up('md')]: {
        marginTop: 0,
      },
    },
    gridItem: {
      height: `100%`,
    },
    image: {
      width: `100%`,
      cursor: `pointer`,
      maxHeight: `300px`,
    },
    paragraph: {
      [theme.breakpoints.up('md')]: {
        '& > p': {
          textAlign: 'justify',
        },
      },
    },
    rightImage: {
      paddingRight: `0 !important`,
    },
    servicesContainer: {
      paddingBottom: theme.spacing(5),
    },
    textWrapper: {
      display: `flex`,
      flexDirection: 'column',
    },
  })
)

export const ServicesSection = () => {
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
            markdown: string
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
              markdown
            }
          }
        }
      }
    }
  `)

  const [category, setCategory] = useState<null | string>(null)

  const handleClick = (category: string) => () => {
    setCategory(category)
    scrollTo('#info-section')
  }

  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      component='section'
      maxWidth='xl'
      id='services-section'
    >
      <Divider className={classes.divider} />
      <Typography align='center' className={classes.actionText} variant='h5'>
        Choose a category that you want to know more about.
      </Typography>
      <Grid
        alignItems='stretch'
        className={classes.servicesContainer}
        container
        spacing={8}
      >
        {edges.map(edge => {
          return (
            <Grid
              className={classes.gridItem}
              key={edge.node.id}
              item
              onClick={handleClick(edge.node.id)}
              xs={12}
              md={6}
              lg={4}
            >
              <GatsbyImage
                alt={edge.node.imageAlts[0]}
                className={classes.image}
                image={edge.node.images[0].gatsbyImageData}
              />
              <Typography className={classes.h2} component='h2' variant='h6'>
                {edge.node.heading}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
      <Divider className={classes.divider} id='services-divider' />
      {!category && (
        <Typography align='center' variant='h5'>
          Choose one of the above categories to read more about it.
        </Typography>
      )}
      <Grid container id='info-section' spacing={3}>
        {edges
          .filter(edge => edge.node.id === category)
          .map(edge => {
            return (
              <Fragment key={edge.node.id}>
                <Grid
                  className={classes.textWrapper}
                  item
                  xs={12}
                  md={6}
                >
                  <Typography
                    className={classes.h2}
                    component='h2'
                    variant='h2'
                  >
                    {edge.node.heading}
                  </Typography>
                  <Typography className={classes.paragraph} variant='body1'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: edge.node.body.markdown,
                      }}
                    />
                  </Typography>
                  <Button className={classes.btn} size='large'>
                    Contact Us
                  </Button>
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
                    <GatsbyImage
                      style={{ height: `100%` }}
                      alt={edge.node.imageAlts[1]}
                      image={edge.node.images[1].gatsbyImageData}
                    />
                  </Grid>
                  <Grid className={classes.rightImage} item xs={6}>
                    <GatsbyImage
                      style={{ height: `100%` }}
                      alt={edge.node.imageAlts[2]}
                      image={edge.node.images[2].gatsbyImageData}
                    />
                  </Grid>
                </Grid>
              </Fragment>
            )
          })}
      </Grid>
    </Container>
  )
}
