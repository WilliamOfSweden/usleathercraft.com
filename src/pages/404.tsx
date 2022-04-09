import React from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'

import { Layout } from '../components/layout/'

const NotFoundPage = () => (
  <Layout>
    <Box
      alignItems='center'
      display='flex'
      height='100vh'
      justifyContent='center'
    >
      <Typography align='center'>
        The website you are trying to reach could not be found.
      </Typography>
    </Box>
  </Layout>
)

export default NotFoundPage
