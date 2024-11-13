import React from 'react'
import { InfiniteMovingCards } from '../ui/InfiniteCard'
import { testimonials } from '@/data'

const Testimonial = () => {
    return (
        <div className="py-5">
            <h1 className="heading py-10 text-[30px] md:text-5xl lg:text-6xl">
                Customer{" "}
                <span className="text-purple">Testimonial</span>
            </h1>
            <div className="flex flex-col items-center max-lg:mt-10">
                <InfiniteMovingCards
                    items={testimonials}
                    direction='right'
                    speed='slow'
                />
            </div>
        </div>
    )
}

export default Testimonial