import React from 'react'

import { Layout } from '../components/layout/'
import {
  AboutPageMasthead,
  CraftSection,
  LeatherSection,
} from '../components/aboutPageComponents/'

const AboutPage = () => (
  <Layout>
    <AboutPageMasthead />
    <CraftSection />
    <LeatherSection />
  </Layout>
)

export default AboutPage
