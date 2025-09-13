import { useState, useEffect, useRef } from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/__layout/applications')({
  component: RouteComponent,
})

function RouteComponent() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef])

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev)
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8 max-w-4xl w-full">
      <h1 className="text-4xl font-bold mb-8">Organizer Management</h1>

      {/* Applications Table */}
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto">
          <thead>
            <tr className="border-b-2">
              <th className="py-4 px-2 font-normal text-gray-500">
                Applications
              </th>
              <th className="py-4 px-2 font-normal text-gray-500">Email</th>
              <th className="py-4 px-2 font-normal text-gray-500">Website</th>
              <th className="py-4 px-2 font-normal text-gray-500"></th>
              <th className="py-4 px-2 font-normal text-gray-500"></th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-4 px-2 flex items-center space-x-4">
                <span className="text-red-500 font-bold">1</span>
                <div className="flex items-center space-x-3">
                  <img
                    src="https://placehold.co/40x40/f0ad4e/ffffff?text=AWS"
                    className="rounded-full h-10 w-10 border-2 border-yellow-500"
                    alt="AWS logo"
                  />
                  <span className="text-lg font-bold">Amazon Events</span>
                </div>
              </td>
              <td className="py-4 px-2 text-gray-700">marketing@amazon.com</td>
              <td className="py-4 px-2">
                <a
                  href="https://aws.amazon.com/events/"
                  className="text-blue-600 hover:underline"
                >
                  https://aws.amazon.com/events/
                </a>
              </td>
              <td className="py-4 px-2">
                <button className="bg-gray-200 text-gray-700 font-medium py-2 px-4 rounded-full shadow-sm hover:bg-gray-300 transition-colors">
                  Click for more details
                </button>
              </td>
              <td className="py-4 px-2 relative" ref={dropdownRef}>
                <button
                  onClick={toggleDropdown}
                  className="text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                    />
                  </svg>
                </button>
                <div
                  className={`absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg ${isDropdownOpen ? '' : 'hidden'}`}
                >
                  <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="dropdown-btn"
                  >
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      role="menuitem"
                    >
                      Approve
                    </button>
                    <div className="h-px bg-gray-200 w-full my-1"></div>
                    <button
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      role="menuitem"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default RouteComponent
