import React from 'react'

import { Layout } from '../components/layout/'
import {
  CraftSection,
  LeatherSection,
  Masthead,
} from '../components/aboutPageComponents/'

const AboutPage = () => (
  <Layout>
    <Masthead />
    <CraftSection />
    <LeatherSection />
  </Layout>
)

export default AboutPage
