'use client'
import React from 'react'
import { CustomButtonProps } from '../Types'
import Image from 'next/image'

const CustomButton = ({title, containerStyles, handleClick, rightIcon, textStyles} : CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={"button"}
      className={`custom-btn ${containerStyles}`}
      onClick={handleClick} // Directly passing the handleClick function
    >
      <span className={`flex-1 ${textStyles}`}>
        {title}
      </span>
      {rightIcon && (
        <div className='w-6 h-6 relative'>
          <Image 
            src={rightIcon}
            alt='rightIcon'
            fill 
            className='object-contain'
          />
        </div>
      )}
    </button>
  )
}

export default CustomButton
