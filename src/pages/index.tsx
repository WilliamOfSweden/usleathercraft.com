import React from 'react'

import { Layout } from '../components/layout'
import {
  AboutSection,
  Masthead,
  ServicesSection,
} from '../components/indexPageComponents/'

const IndexPage = () => (
  <Layout>
    <Masthead />
    <ServicesSection />
    <AboutSection />
  </Layout>
)

export default IndexPage
