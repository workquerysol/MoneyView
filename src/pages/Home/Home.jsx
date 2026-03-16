import React from 'react'
import Hero from '../../components/Hero/Hero'
import BrokerPartners from '../../components/BrokerPartners/BrokerPartners'
import Services from '../../components/Services/Services'
import WhyUs from '../../components/WhyUs/WhyUs'
import Testimonials from '../../components/Testimonials/Testimonials'
import CTA from '../../components/CTA/CTA'

export default function Home() {
  return (
    <>
      <Hero />
      <BrokerPartners />
      <Services />
      <WhyUs />
      <Testimonials />
      <CTA />
    </>
  )
}
