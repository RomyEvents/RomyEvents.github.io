import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/organiser/__layout/createEvents')({
  component: RouteComponent,
})

function RouteComponent() {
  const [eventType, setEventType] = useState<'venue' | 'online'>('venue')
  const [ticketType, setTicketType] = useState<'paid' | 'free'>('paid')

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-8 font-sans">
      {/* Header */}
      <h1 className="text-2xl font-bold">Create Your Event</h1>

      {/* Upload photo section */}
      <div className="relative w-full h-64 rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center bg-gray-100">
        <img
          src="https://i.imgur.com/SdlO2kS.png"
          alt="Event"
          className="object-cover w-full h-full"
        />
        <button className="absolute bg-white p-4 rounded shadow-lg flex flex-col items-center justify-center text-gray-700 hover:bg-gray-50">
          <span className="text-xl">🖼️</span>
          <span className="text-sm">Upload photos and videos</span>
        </button>
      </div>

      {/* Event Overview */}
      <div className="border border-gray-200 rounded-lg p-4 space-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-semibold text-lg">Event Overview</h2>
          <button className="text-xl">+</button>
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Event Title</label>
          <input
            type="text"
            placeholder="Be clear and descriptive with a title..."
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div>
          <label className="block font-medium text-sm mb-1">Summary</label>
          <textarea
            placeholder="Short description (140 chars max)"
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            rows={3}
          />
        </div>
      </div>

      {/* Date and Location */}
      <div className="border border-gray-200 rounded-lg p-4 space-y-4">
        <h2 className="font-semibold text-lg mb-2">Date and Location</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium text-sm mb-1">
              Date and Time
            </label>
            <input
              type="date"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">Start Time</label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
          <div>
            <label className="block font-medium text-sm mb-1">End Time</label>
            <input
              type="time"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>

        <div className="mt-4">
          <label className="block font-medium text-sm mb-2">Location</label>
          <div className="flex gap-4 mb-2">
            <button
              className={`px-4 py-2 rounded border ${eventType === 'venue' ? 'bg-blue-600 text-white' : 'bg-white'}`}
              onClick={() => setEventType('venue')}
            >
              Venue
            </button>
            <button
              className={`px-4 py-2 rounded border ${eventType === 'online' ? 'bg-blue-600 text-white' : 'bg-white'}`}
              onClick={() => setEventType('online')}
            >
              Online event
            </button>
          </div>
          {eventType === 'venue' && (
            <input
              type="text"
              placeholder="Type in address"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          )}
          {/* Placeholder for map */}
          <div className="mt-2 w-full h-48 bg-gray-200 rounded flex items-center justify-center text-gray-500">
            Map Preview
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="border border-gray-200 rounded-lg p-4">
        <label className="block font-medium text-sm mb-1">Overview</label>
        <textarea
          placeholder="Provide more details (max 140 words)"
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
          rows={4}
        />
      </div>

      {/* Create Tickets */}
      <div className="border border-gray-200 rounded-lg p-4 space-y-4">
        <h2 className="font-semibold text-lg">Create Tickets</h2>
        <div className="flex gap-4 mb-2">
          <button
            className={`flex-1 px-4 py-2 rounded border flex items-center justify-center gap-2 ${ticketType === 'paid' ? 'bg-blue-600 text-white' : 'bg-white'}`}
            onClick={() => setTicketType('paid')}
          >
            🪙 Paid
          </button>
          <button
            className={`flex-1 px-4 py-2 rounded border flex items-center justify-center gap-2 ${ticketType === 'free' ? 'bg-blue-600 text-white' : 'bg-white'}`}
            onClick={() => setTicketType('free')}
          >
            🎟️ Free
          </button>
        </div>

        <div className="space-y-2">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="number"
            placeholder="Available quantity"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <input
            type="text"
            placeholder="Price"
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
          <div className="grid grid-cols-2 gap-4">
            <input
              type="date"
              placeholder="Sale starts"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
            <input
              type="date"
              placeholder="Sale ends"
              className="w-full border border-gray-300 rounded px-3 py-2"
            />
          </div>
        </div>
      </div>

      {/* Event Organiser */}
      <div className="border border-gray-200 rounded-lg p-4 space-y-2">
        <label className="block font-medium text-sm">Category</label>
        <select className="w-full border border-gray-300 rounded px-3 py-2">
          <option value="">Select category</option>
        </select>

        <label className="block font-medium text-sm">Organised by</label>
        <input
          type="text"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>

      {/* Publish button */}
      <div className="text-right">
        <button className="px-6 py-2 bg-black text-white rounded">
          Publish
        </button>
      </div>
    </div>
  )
}
