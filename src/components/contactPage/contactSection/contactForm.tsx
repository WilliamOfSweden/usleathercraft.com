import React, { FC } from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    textField: {
      display: `flex`,
      marginBottom: theme.spacing(2),
    },

    textArea: {
      display: `flex`,
      marginBottom: theme.spacing(2),
      marginTop: theme.spacing(4),
    },

    btn: {
      marginTop: `2rem`,
      letterSpacing: `1px`,
    },
  })
)

interface Props {
  hidden?: boolean
}

const ContactForm: FC<Props> = ({ hidden }) => {
  const classes = useStyles()

  return (
    <form
      name='contact-form'
      method='POST'
      encType='application/x-www-form-urlencoded'
      data-netlify='true'
      data-netlify-honeypot='bot-field'
      id='contact-form'
      hidden={hidden}
    >
      {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
      <input type='hidden' name='form-name' value='contact-form' />

      <p hidden>
        <label>
          Don’t fill this out: <input name='bot-field' />
        </label>
      </p>

      <TextField
        autoComplete='name'
        className={classes.textField}
        label='Name'
        name='name'
        required
        type='text'
        variant='outlined'
      />

      <TextField
        autoComplete='email'
        className={classes.textField}
        label='Email'
        name='email'
        required
        type='email'
        variant='outlined'
      />

      <TextField
        autoComplete='tel-national'
        className={classes.textField}
        label='Phone'
        name='phone'
        type='phone'
        variant='outlined'
      />

      <TextField
        className={classes.textArea}
        id='outlined-textarea'
        label='Message'
        name='message'
        multiline
        required
        rows={4}
        variant='outlined'
      />

      <Button
        className={classes.btn}
        color='primary'
        fullWidth
        name='send'
        size='large'
        type='submit'
        variant='contained'
      >
        Send
      </Button>
    </form>
  )
}

export default ContactForm
