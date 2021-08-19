import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout/'
import Masthead from '../components/contactPage/masthead'
import ContactSection from '../components/contactPage/contactSection'

const ContatPage: FC<PageProps> = () => {
  return (
    <Layout>
      <Masthead />
      <ContactSection />
    </Layout>
  )
}

export default ContatPage
