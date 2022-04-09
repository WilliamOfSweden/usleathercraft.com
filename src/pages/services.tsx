import React from 'react'

import { Layout } from '../components/layout/'
import {
  LeatherSection,
  Masthead,
  ServicesSection,
} from '../components/servicesPageComponents/'

const ServicesPage = () => (
  <Layout>
    <Masthead />
    <LeatherSection />
    <ServicesSection />
  </Layout>
)

export default ServicesPage
