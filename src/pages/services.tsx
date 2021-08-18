import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/servicesPage/masthead/'
import LeatherSection from '../components/servicesPage/leatherSection/'
import ServicesSection from '../components/servicesPage/servicesSection/'

const ServicesPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
      <LeatherSection />
      <ServicesSection />
    </Layout>
  )
}

export default ServicesPage
