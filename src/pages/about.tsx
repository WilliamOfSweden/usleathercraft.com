import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout/'
import Masthead from '../components/aboutPage/masthead/'
import CraftSection from '../components/aboutPage/craftSection/'
import LeatherSection from '../components/aboutPage/leatherSection'

const AboutPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
      <CraftSection />
      <LeatherSection />
    </Layout>
  )
}

export default AboutPage
