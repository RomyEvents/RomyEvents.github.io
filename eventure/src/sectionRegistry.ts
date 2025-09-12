import React from 'react'
import ReviewSection from '@/components/landingPage/ReviewSection'
import DefaultSection from './components/landingPage/DefaultSection'
// Map "section type" string → React Component
const sectionRegistry: Record<string, React.ComponentType<any>> = {
  review: ReviewSection,
  default: DefaultSection,
}

export default sectionRegistry
