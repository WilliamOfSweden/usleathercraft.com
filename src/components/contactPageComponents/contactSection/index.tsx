import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import { ContactForm } from './contactForm'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      paddingTop: theme.spacing(8),
      position: 'relative',
    },
  })
)

export const ContactSection = () => {
  const classes = useStyles()

  return (
    <Container
      className={classes.container}
      component='section'
      id='contact-section'
      maxWidth='md'
    >
      <ContactForm />
    </Container>
  )
}
