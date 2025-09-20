import React from 'react'

interface ReviewCardProps {
  name: string
  rating: number
  comment: string
}

const ReviewCard: React.FC<ReviewCardProps> = ({ name, rating, comment }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg flex flex-col justify-between w-80 hover:scale-105 transition-transform duration-300">
      <div>
        <h3 className="font-semibold text-lg text-gray-800 mb-2">{name}</h3>
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-400">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg
                key={i}
                className={`w-5 h-5 ${i < rating ? 'fill-current' : 'text-gray-300'}`}
                viewBox="0 0 20 20"
              >
                <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.564-.955L10 0l2.947 5.955 6.564.955-4.756 4.635 1.123 6.545z" />
              </svg>
            ))}
          </div>
          <span className="ml-2 text-gray-600 text-sm">{rating}/5</span>
        </div>
        <p className="text-gray-600 text-sm line-clamp-4">{comment}</p>
      </div>
      <div className="mt-4">
        <button className="text-sm text-blue-600 hover:underline">
          Read more
        </button>
      </div>
    </div>
  )
}

export default ReviewCard
