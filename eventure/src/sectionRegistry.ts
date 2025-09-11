import React from 'react'
import ReviewSection from '@/components/landingPage/ReviewSection'

// Map "section type" string → React Component
const sectionRegistry: Record<string, React.ComponentType<any>> = {
  review: ReviewSection,
}

export default sectionRegistry
