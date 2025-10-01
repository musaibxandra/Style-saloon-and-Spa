import React from 'react'
import { Feature1 } from './ui/feature-1'

const Header = () => {
  return (
    <div>
      <Feature1
      title="Indulge in Radiant Beauty & Relaxation"
      description="Experience our premium salon & spa services designed to rejuvenate your mind, body, and soul."
      buttonSecondary={{
        label: "Book Your Appointment",
        href: "https://shadcnblocks.com"
    }}
    />
    </div>
  )
}

export default Header
