import React from 'react'
import { HoverEffect } from '../ui/CardHoverEffect'
import { services } from '@/data'

const Services = () => {
  return (
      <div className='py-20'>
          <h1 className="heading">
                My{" "}
                <span className="text-purple">Perice List</span>
            </h1>
          <div className='max-w-5xl mx-auto px-8'>
              <HoverEffect
                  items={services}
              />
              
          </div>
    </div>
  )
}

export default Services