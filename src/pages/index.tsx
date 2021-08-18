import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout'
import Masthead from '../components/indexPage/masthead/'
import ServicesSection from '../components/indexPage/servicesSection/'
import AboutSection from '../components/indexPage/aboutSection/'

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
      <ServicesSection />
      <AboutSection />
    </Layout>
  )
}

export default IndexPage
