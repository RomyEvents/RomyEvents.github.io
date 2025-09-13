import React from 'react'
import ReviewSection from '@/components/landingPage/ReviewSection'
import DefaultSection from './components/landingPage/DefaultSection'
import TrendingSection from './components/landingPage/TrendingSection'
import UserBaseSection from './components/landingPage/UserBaseSection'
// Map "section type" string → React Component
const sectionRegistry: Record<string, React.ComponentType<any>> = {
  review: ReviewSection,
  default: DefaultSection,
  trending: TrendingSection,
  userBase: UserBaseSection,
}

export default sectionRegistry
