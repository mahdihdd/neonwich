"use client"
import React, { useState } from 'react'

export default function CallPhoneFooter() {
    const [showPhoneNumber, setShowPhoneNumber] = useState(false);
      const phoneNumber = "09962812008";
    
      const handleIconClick = () => {
        if (showPhoneNumber === false) {
          window.location.href = `tel:${phoneNumber}`;
        }
        setShowPhoneNumber(!showPhoneNumber);
      };
    
  return (
    <p className='cursor-pointer' onClick={handleIconClick}>0996 281 2008</p>
  )
}
