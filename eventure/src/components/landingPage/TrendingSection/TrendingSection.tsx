import { Icon } from '@mui/material'
import React from 'react'

interface Event {
  id: string
  title: string
  date: string
  location: string
  icon?: string
  height?: number
  image?: string | null // event cover image
}

interface EventListProps {
  header: string
  events: Event[]
  height?: number
  backgroundColor?: string
}

const EventList: React.FC<EventListProps> = ({
  header,
  events,
  backgroundColor,
  height,
}) => {
  return (
    <div
      className="py-12 px-4 flex flex-col items-center"
      style={{
        backgroundColor: backgroundColor || undefined,
        height: height ? `${height}px` : 'auto',
      }}
    >
      <h2 className="text-center text-3xl font-bold mb-10">{header}</h2>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-6 w-full max-w-6xl">
        {events.map((event) => (
          <div
            key={event.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            {/* Event Image */}
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="h-40 w-full object-cover"
              />
            )}

            {/* Event Details */}
            <div className="p-4 flex-1 flex flex-col">
              {event.icon && (
                <div className="mb-2">
                  <Icon sx={{ fontSize: 28, color: '#a67c52' }}>
                    {event.icon}
                  </Icon>
                </div>
              )}
              <h3 className="text-lg font-semibold mb-1">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="text-sm text-gray-800">{event.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EventList
