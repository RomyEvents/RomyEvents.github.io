import React from 'react'
import { People, Business } from '@mui/icons-material'

interface UsersJoinedProps {
  totalUsers: number
  totalOrganizers: number
  backgroundColor?: string | null
}

const UserBaseSection: React.FC<UsersJoinedProps> = ({
  totalUsers,
  totalOrganizers,
  backgroundColor,
}) => {
  return (
    <div
      className="py-16 px-6 flex flex-col items-center"
      style={{
        backgroundColor: backgroundColor || '#f9fafb', // light gray default
      }}
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-10">
        Community Growth 🚀
      </h2>

      <div className="grid sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {/* Users */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
          <People sx={{ fontSize: 48, color: '#2563eb' }} />
          <p className="text-4xl font-extrabold mt-4">Over {totalUsers}</p>
          <p className="text-gray-600 text-lg">Users Joined</p>
        </div>

        {/* Organizers */}
        <div className="flex flex-col items-center bg-white shadow-md rounded-xl p-8 hover:shadow-lg transition">
          <Business sx={{ fontSize: 48, color: '#16a34a' }} />
          <p className="text-4xl font-extrabold mt-4">Over {totalOrganizers}</p>
          <p className="text-gray-600 text-lg">Organizers registered</p>
        </div>
      </div>
    </div>
  )
}

export default UserBaseSection
