import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/servicesPage/masthead/'

const ServicesPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
    </Layout>
  )
}

export default ServicesPage
