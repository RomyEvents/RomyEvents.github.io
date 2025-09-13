import { Icon } from '@mui/material'
import React from 'react'

interface DefaultSectionProps {
  header: string
  icon: string
  description: string
  backgroundImage: string | null
  height: number | null
  backgroundColor: string | null
}

const DefaultSection: React.FC<DefaultSectionProps> = ({
  header,
  icon,
  description,
  backgroundImage,
  height,
  backgroundColor,
}) => {
  return (
    <div
      className={`py-12 px-4 bg-center bg-no-repeat flex flex-col items-center ${
        backgroundImage ? 'bg-cover' : ''
      }`}
      style={{
        backgroundImage: backgroundImage
          ? `url(${backgroundImage})`
          : undefined,
        backgroundColor: backgroundColor || undefined,
        height: height ? `${height}px` : 'auto',
      }}
    >
      {/* Centered icon */}
      {icon && (
        <div className="mb-4">
          <Icon sx={{ fontSize: 48, color: 'white' }}>{icon}</Icon>
        </div>
      )}

      <h2 className="text-center text-white text-2xl font-semibold mb-8 whitespace-pre-line">
        {header}
      </h2>

      <div className="text-white text-center whitespace-pre-line">
        {description}
      </div>
    </div>
  )
}

export default DefaultSection
