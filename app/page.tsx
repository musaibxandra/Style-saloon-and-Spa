import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Sessions from '@/components/Sessions'
import HowItWorks from '@/components/Steps'
import React from 'react'

const pageLayout = () => {
  return (
    <main className=''>
      <Navbar />
      <Header />
      <HowItWorks />
      <Sessions />
      <Footer />
    </main>
  )
}

export default pageLayout
