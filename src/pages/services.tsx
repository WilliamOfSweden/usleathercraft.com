import React, { FC } from 'react'
import { PageProps } from 'gatsby'
import Layout from '../components/layout/'
import Masthead from '../components/servicesPage/masthead/'
import LeatherSection from '../components/servicesPage/leatherSection/'

const ServicesPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
      <LeatherSection />
    </Layout>
  )
}

export default ServicesPage
