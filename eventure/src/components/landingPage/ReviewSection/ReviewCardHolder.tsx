import React from 'react'
import ReviewCard from './ReviewCard'

interface Review {
  name: string
  rating: number
  comment: string
}

interface ReviewCardHolderProps {
  reviews: Review[]
}

const ReviewCardHolder: React.FC<ReviewCardHolderProps> = ({ reviews }) => {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <ReviewCard key={index} {...review} />
      ))}
    </div>
  )
}

export default ReviewCardHolder
