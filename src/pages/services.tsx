import React from 'react'

import { Layout } from '../components/layout/'
import {
  LeatherSection,
  ServicesPageMasthead,
  ServicesSection,
} from '../components/servicesPageComponents/'

const ServicesPage = () => (
  <Layout>
    <ServicesPageMasthead />
    <LeatherSection />
    <ServicesSection />
  </Layout>
)

export default ServicesPage
