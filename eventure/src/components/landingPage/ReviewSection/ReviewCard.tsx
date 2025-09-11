import React from 'react'

interface ReviewCardProps {
  name: string
  rating: number
  comment: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, comment }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      <h3 className="font-semibold">{name}</h3>
      <p className="text-yellow-500">⭐ {rating}/5</p>
      <p className="text-gray-600 mt-2">{comment}</p>
    </div>
  )
}

export default ReviewCard
