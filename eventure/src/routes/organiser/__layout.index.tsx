import { useState, useRef, useEffect } from 'react'
import { createFileRoute } from '@tanstack/react-router'

// Define route
export const Route = createFileRoute('/organiser/__layout/')({
  component: RouteComponent,
})

// Event type
interface Event {
  dateMonth: string
  dateDay: number
  name: string
  sold: string
  gross: string
  status: string
}

// Sample events data
const eventsData: Event[] = [
  {
    dateMonth: 'Aug',
    dateDay: 26,
    name: 'School party',
    sold: '0/22',
    gross: '$0.00',
    status: 'Online',
  },
  {
    dateMonth: 'Sep',
    dateDay: 12,
    name: 'Stargazing',
    sold: '15/30',
    gross: '$450.00',
    status: 'Offline',
  },
]

function RouteComponent() {
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null)
  const menuRefs = useRef<(HTMLDivElement | null)[]>([])

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        openMenuIndex !== null &&
        menuRefs.current[openMenuIndex] &&
        !menuRefs.current[openMenuIndex]?.contains(e.target as Node)
      ) {
        setOpenMenuIndex(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [openMenuIndex])

  return (
    <div className="w-full mx-auto p-8 bg-white font-sans">
      <h1 className="text-4xl font-bold mb-6">Organiser Dashboard</h1>
      <h2 className="text-2xl font-semibold mb-4">Events</h2>

      <div className="overflow-x-auto border rounded-lg">
        <table className="min-w-full text-left border-collapse">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-4 py-2">Event</th>
              <th className="px-4 py-2">Sold</th>
              <th className="px-4 py-2">Gross</th>
              <th className="px-4 py-2">Status</th>
              <th className="px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {eventsData.map((event, index) => (
              <tr key={index} className="hover:bg-gray-50">
                {/* Event info */}
                <td className="px-4 py-4 flex items-center gap-2">
                  <div className="text-red-600 text-sm font-mono">
                    <div>{event.dateMonth}</div>
                    <div>{event.dateDay}</div>
                  </div>
                  <span className="font-bold text-black">{event.name}</span>
                </td>

                <td className="px-4 py-4 text-center">{event.sold}</td>
                <td className="px-4 py-4 text-center">{event.gross}</td>
                <td className="px-4 py-4 text-center">{event.status}</td>

                {/* Dropdown menu */}
                <td className="px-4 py-4 text-center relative">
                  <button
                    className="text-gray-700 text-xl"
                    onClick={(e) => {
                      e.stopPropagation() // Prevent triggering document click
                      setOpenMenuIndex(openMenuIndex === index ? null : index)
                    }}
                  >
                    ⋮
                  </button>

                  <div
                    ref={(el) => {
                      menuRefs.current[index] = el
                    }}
                    className={`absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg transition-transform ${
                      openMenuIndex === index ? 'block' : 'hidden'
                    }`}
                  >
                    <ul>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Edit
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Duplicate
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Boost event
                      </li>
                      <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                        Cancel event
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RouteComponent
