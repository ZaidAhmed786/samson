import BreadcrumbSection from '@/component/breadcrumb/BreadcrumbSection'
import Layout from '@/component/layout/Layout'
import Head from 'next/head'
import React from 'react'

const cableTv = () => {
    return (
        <>
            <Head>
                <title>Beamen Tech LLC</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="shortcut icon" href="assets/img/favicon.png" type="image/x-icon" />
            </Head>
            <>
                <Layout>
                    <main>
                        <BreadcrumbSection title={"Privacy Policy"} />
                        <div style={{ width: "60%", margin: "auto", textAlign: "left", padding: '30px 0' }}>
                            <h1 >  <b>Privacy Policy</b></h1>
                           <p style={{ fontSize: '20px' }}>At Beamen Tech LLC, we take your privacy seriously. This Privacy Policy outlines how we collect, use, disclose, and protect your personal information when you visit our website or use our Internet, cable, and phone services. By accessing or using our services, you consent to the practices described in this policy.</p>
                            <br />
                            <b style={{ margin: '50px 0', fontSize: '20px'}}>Information We Collect</b>

                            <p style={{ fontSize: '20px' }}>We may collect various types of information from you, including:</p>
                            <li style={{ fontSize: '20px' }}><b>Personal Information:</b> This may include your name, contact information (such as email address and phone number), and billing details.</li>
                            <li style={{ fontSize: '20px' }}><b>Usage Information:</b> We collect information about how you use our website and services, including IP addresses, browser type, and device information.</li>
                            <li style={{ fontSize: '20px' }}><b>Cookies and Tracking Technologies:</b> We use cookies and similar technologies to enhance your browsing experience and collect data about your interactions with our website</li>
                            <b style={{ margin: '50px 0', fontSize: '20px'}}> How We Use Your Information</b>
                            <p style={{ fontSize: '20px' }}>We use your information for the following purposes:</p>
                            <li style={{ fontSize: '20px' }}> <b>Providing Services:</b> To deliver Internet, cable, and phone services, including billing and customer support.</li>
                            <li style={{ fontSize: '20px' }}> <b>Improving Services:</b> To enhance and customize your experience, develop new services, and conduct research and analysis.</li>
                            <li style={{ fontSize: '20px' }}> <b>Marketing:</b> To send you promotional materials, offers, and updates about our services, with the option to opt out at any time.</li>
                            <li style={{ fontSize: '20px' }}> <b>Legal Compliance:</b> To comply with legal obligations and resolve disputes.</li>
                            <b style={{ margin: '50px 0', fontSize: '20px'}}>Information Sharing
                            </b>
                            <p style={{ fontSize: '20px' }}> We do not sell your personal information to third parties. However, we may share your information with</p>
                            <li style={{ fontSize: '20px' }}> <b> Service Providers: </b> Third-party vendors and partners who assist us in delivering our services.</li>
                            <li style={{ fontSize: '20px' }}> <b>Legal Requirements:</b> When required by law, court order, or government authority.</li>
                            <b style={{ margin: '50px 0', fontSize: '20px'}}> Data Security</b>
                            <p style={{ fontSize: '20px' }}>We implement reasonable security measures to protect your personal information. However, please be aware that no method of transmission over the internet is entirely secure, and we cannot guarantee the absolute security of your data.</p>
                            <b style={{ margin: '50px 0', fontSize: '20px'}}>Children's Privacy</b>
                            <p style={{ fontSize: '20px' }}>Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children</p>

                            <b style={{ margin: '50px 0', fontSize: '20px'}}>Changes to this Policy</b>
                            <p style={{ fontSize: '20px' }}>We may update this Privacy Policy from time to time. Please review the "Last Updated" date at the beginning of this policy to stay informed of any changes.</p>

                        </div>
                    </main>
                </Layout>
            </>
        </>
    )
}

export default cableTv

