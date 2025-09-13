import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/admin/__layout/accounts')({
  component: RouteComponent,
})

function RouteComponent() {
  const users = [
    {
      id: 1,
      name: 'Lionel Pessi',
      email: 'lpessi@gmail.com',
      role: 'Attendee',
      gender: 'Male',
      age: 38,
      status: 'ACTIVE',
    },
    {
      id: 2,
      name: 'Cristiano Penaldo',
      email: 'cpepe@gmail.com',
      role: 'Organizer | Al-Nasdem.inc',
      gender: 'Male',
      age: 36,
      status: 'ACTIVE',
    },
    {
      id: 3,
      name: 'Wayne Pooney',
      email: 'WayneP@gmail.com',
      role: 'Attendee',
      gender: 'Male',
      age: 27,
      status: 'SUSPENDED',
    },
    {
      id: 4,
      name: 'Lebron Pames',
      email: 'LebronPames@gmail.com',
      role: 'Attendee',
      gender: 'Male',
      age: 18,
      status: 'SUSPENDED',
    },
    {
      id: 5,
      name: 'Stephy Purry',
      email: 'PurryS@gmail.com',
      role: "Organizer | Steph's & co",
      gender: 'Female',
      age: 18,
      status: 'ACTIVE',
    },
    {
      id: 6,
      name: 'James Parden',
      email: 'Parden.James@gmail.com',
      role: 'Organizer | Boozers',
      gender: 'Male',
      age: 21,
      status: 'SUSPENDED',
    },
  ]
  type User = {
    status: 'ACTIVE' | 'INACTIVE' | string
    name: string
    email: string
    role: string
    gender: string
    age: number
  }
  interface UserCardProps {
    user: User
  }
  const UserCard: React.FC<UserCardProps> = ({ user }) => {
    const isActive = user.status === 'ACTIVE'
    const statusColor = isActive ? 'bg-amber-600' : 'bg-gray-400'

    return (
      <div className="bg-white border border-gray-300 p-4 rounded-sm">
        <div className="mb-3">
          <span
            className={`${statusColor} text-white px-3 py-1 rounded text-sm font-medium`}
          >
            {user.status}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">{user.name}</h3>

        <div className="text-gray-600 text-sm space-y-1">
          <p>{user.email}</p>
          <p>{user.role}</p>
          <p>{user.gender}</p>
          <p>{user.age}</p>
        </div>

        <div className="mt-4 text-right">
          <button className="text-blue-500 hover:text-blue-700 text-sm">
            More Details &gt;
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">User Management</h1>

      {/* Filter + Search */}
      <div className="mb-6 flex flex-col md:flex-row md:items-center gap-4">
        {/* Filter Dropdown */}
        <div className="relative w-full md:w-80">
          <select className="w-full px-4 py-3 text-gray-700 bg-white border border-gray-300 rounded-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Filter User</option>
            <option>Active Users</option>
            <option>Suspended Users</option>
            <option>Attendees</option>
            <option>Organizers</option>
          </select>
          <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>

        {/* Search Bar */}
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search users..."
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* User Cards Grid */}
      <div className="bg-white border-2 border-gray-400 p-6 rounded-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    </div>
  )
}
