import { PageProps } from 'gatsby'
import React, { FC } from 'react'
import Layout from '../components/layout'

const IndexPage: FC<PageProps> = () => {
  return (
    <Layout>
      <div>Hello, world!</div>
    </Layout>
  )
}

export default IndexPage
