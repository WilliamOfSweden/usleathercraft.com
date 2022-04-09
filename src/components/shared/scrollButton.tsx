import React, { Fragment } from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import KeyboardArrowDownOutlinedIcon from '@material-ui/icons/KeyboardArrowDownOutlined'
import scrollTo from 'gatsby-plugin-smoothscroll'

const useStyles = makeStyles(() =>
  createStyles({
    arrow: {
      bottom: 5,
      left: 0,
      marginLeft: `auto`,
      marginRight: `auto`,
      position: `absolute`,
      right: 0,
      zIndex: 2,
      cursor: `pointer`,
    },
    buttonWrapper: {
      bottom: -10,
      left: 0,
      marginLeft: `auto`,
      marginRight: `auto`,
      position: `absolute`,
      right: 0,
      zIndex: 1,
      cursor: `pointer`,
    },
  })
)

interface Props {
  scrollTarget: string
}

export const ScrollButton = ({ scrollTarget }: Props) => {
  const classes = useStyles()

  return (
    <Fragment>
      <KeyboardArrowDownOutlinedIcon
        className={classes.arrow}
        color='primary'
        onClick={() => scrollTo(`#${scrollTarget}`)}
        fontSize='large'
      />
      <svg
        className={classes.buttonWrapper}
        enableBackground='new 0 0 160.7 61.5'
        height='61'
        id='button-wrapper'
        onClick={() => scrollTo(`#${scrollTarget}`)}
        version='1.1'
        viewBox='0 0 160.7 61.5'
        width='192'
        x='0px'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        xmlSpace='preserve'
        y='0px'
      >
        <path
          fill='#3f200d'
          d='M80.3,61.5c0,0,22.1-2.7,43.1-5.4s41-5.4,36.6-5.4c-21.7,0-34.1-12.7-44.9-25.4S95.3,0,80.3,0c-15,0-24.1,12.7-34.9,25.4S22.3,50.8,0.6,50.8c-4.3,0-6.5,0,3.5,1.3S36.2,56.1,80.3,61.5z'
        />
      </svg>
    </Fragment>
  )
}
