import React from 'react'

interface DefaultSectionProps {}

const DefaultSection: React.FC<DefaultSectionProps> = ({}) => {
  return (
    <div className="bg-[#a67c52] py-12 px-4">
      <h2 className="text-center text-white text-2xl font-semibold mb-8"></h2>
    </div>
  )
}

export default DefaultSection
