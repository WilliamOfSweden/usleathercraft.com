import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout/'
import Masthead from '../components/aboutPage/masthead/'

const AboutPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
    </Layout>
  )
}

export default AboutPage
