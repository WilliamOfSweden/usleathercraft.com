import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout'
import Masthead from '../components/indexPage/masthead/'
import ServicesSection from '../components/indexPage/servicesSection/'

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
      <ServicesSection />
    </Layout>
  )
}

export default IndexPage
