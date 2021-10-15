import React from 'react'

import Layout from '../components/layout/'
import Masthead from '../components/servicesPage/masthead/'
import LeatherSection from '../components/servicesPage/leatherSection/'
import ServicesSection from '../components/servicesPage/servicesSection/'

const ServicesPage = () => {
  return (
    <Layout>
      <Masthead />
      <LeatherSection />
      <ServicesSection />
    </Layout>
  )
}

export default ServicesPage
