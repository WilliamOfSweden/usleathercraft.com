import React from 'react'

import { Layout } from '../components/layout/'
import {
  ContactSection,
  ContactPageMasthead,
} from '../components/contactPageComponents/'

const ContactPage = () => (
  <Layout>
    <ContactPageMasthead />
    <ContactSection />
  </Layout>
)

export default ContactPage
