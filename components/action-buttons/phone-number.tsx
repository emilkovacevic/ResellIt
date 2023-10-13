'use client'

import { useState } from 'react'

interface PhoneNumber {
  phone?: string
}

const PhoneNumber = ({ phone }: PhoneNumber) => {
  const [showNumber, setShowNumber] = useState(false)

  return (
    <button
      onClick={() => setShowNumber(true)}
      className={`mx-2 px-2 py-1 ${
        showNumber
          ? 'text-primary'
          : 'bg-accent hover:bg-primary hover:text-primary-foreground'
      }`}
    >
      {showNumber ? (
        phone?.length ? (
          <a className="hover:underline" href={`tel:+${phone}`}>
            {phone}
          </a>
        ) : (
          'not listed'
        )
      ) : (
        'Show Number'
      )}
    </button>
  )
}

export default PhoneNumber
