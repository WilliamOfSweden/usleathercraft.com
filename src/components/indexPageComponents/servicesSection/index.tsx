import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import { useStaticQuery, graphql } from 'gatsby'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { Link } from 'gatsby'

import PALETTE from '../../../styles/colorPalette'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      textAlign: 'center',
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
      paddingBottom: theme.spacing(15),
      paddingTop: theme.spacing(15),
    },
    divider: {
      borderTop: `2px dashed ${PALETTE.altColorOne}`,
      marginTop: theme.spacing(7),
      width: `100%`,
      maxWidth: `60ch`,
      [theme.breakpoints.up('md')]: {
        display: `none`,
      },
    },
    h2: {
      marginBottom: theme.spacing(10),
    },
    h3: {
      color: PALETTE.altColorOne,
      fontFamily: 'cabin sketch',
      fontSize: `2.5rem`,
      marginBottom: theme.spacing(1),
    },
    paragraph: {
      maxWidth: `55ch`,
    },
    textWrapper: {
      alignItems: `center`,
      display: `flex`,
      flexDirection: `column`,
    },
  })
)

export const ServicesSection = () => {
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

  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      component='section'
      maxWidth='xl'
      id='services-section'
    >
      <Typography
        align='center'
        className={classes.h2}
        component='h2'
        variant='h2'
      >
        OUR SERVICES
      </Typography>
      <Grid container spacing={5}>
        {edges.map(edge => {
          return (
            <Grid
              className={classes.textWrapper}
              key={edge.node.id}
              item
              xs={12}
              md={6}
              lg={3}
            >
              <Typography align='center' className={classes.h3} component='h3'>
                {edge.node.heading}
              </Typography>
              <Typography
                align='center'
                className={classes.paragraph}
                variant='body1'
              >
                {edge.node.body}
              </Typography>
            </Grid>
          )
        })}
      </Grid>
      <Box display='flex' justifyContent='center' marginTop={7}>
        <Button
          className={classes.btn}
          component={Link}
          size='large'
          to='/services'
        >
          Distinct Services
        </Button>
      </Box>
    </Container>
  )
}
