import React from 'react'
import ReviewCard from './ReviewCard'

interface Review {
  name: string
  rating: number
  comment: string
}

interface ReviewCardHolderProps {
  reviews: Review[]
  header: string
}

const ReviewCardHolder: React.FC<ReviewCardHolderProps> = ({
  reviews,
  header,
}) => {
  return (
    <div className="bg-[#a67c52] py-12 px-4">
      <h2 className="text-center text-white text-2xl font-semibold mb-8">
        {header}
      </h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-thin scrollbar-thumb-[#5a3e2b] scrollbar-track-[#d6bfa0] px-2">
        {reviews.map((review, index) => (
          <div
            className="flex-shrink-0 w-80 max-h-[400px] mt-4 mb-4"
            key={index}
          >
            <ReviewCard {...review} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ReviewCardHolder
