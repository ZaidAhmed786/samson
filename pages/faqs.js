import Layout from '@/component/layout/Layout'
import FaqMain from '@/component/main/FaqMain'
import Head from 'next/head'
import React from 'react'

const faq = () => {
  return (
    <>
        <Head>
        <title>Nafiab - FAQ</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon"/>
        </Head>
        <Layout>
            <FaqMain/>
        </Layout>
    </>
  )
}

export default faq