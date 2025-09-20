import { createFileRoute } from '@tanstack/react-router'
import sectionRegistry from '@/sectionRegistry'

export const Route = createFileRoute('/landing/__layout/')({
  component: App,
})

function App() {
  const pageData = [
    {
      type: 'default',
      header: '',
      icon: '',
      description: '',
      backgroundImage: 'https://i.imgur.com/uoQAA1j.jpeg',
      backgroundColor: '#a67c52',
      height: 300,
    },
    {
      type: 'trending',
      header: 'Upcoming Events',
      backgroundColor: '#a67c52',
      events: [
        {
          id: '1',
          title: 'Music Festival',
          date: '2025-09-20',
          location: 'Singapore',
          icon: 'music_note',
          image:
            'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg', // concert
        },
        {
          id: '2',
          title: 'Tech Conference',
          date: '2025-10-02',
          location: 'San Francisco',
          icon: 'laptop',
          image:
            'https://images.pexels.com/photos/1181403/pexels-photo-1181403.jpeg', // tech event
        },
        {
          id: '3',
          title: 'Art Exhibition',
          date: '2025-11-12',
          location: 'Paris',
          icon: 'brush',
          image:
            'https://images.pexels.com/photos/370799/pexels-photo-370799.jpeg', // art gallery
        },
      ],
    },

    {
      type: 'userBase',
      backgroundColor: '#b29775',
      height: 300,
      totalUsers: 12000,
      totalOrganizers: 400,
    },
    {
      type: 'review',
      header: 'What our users say',
      reviews: [
        { name: 'Alice', rating: 5, comment: 'Amazing!' },
        { name: 'Bob', rating: 4, comment: 'Pretty good!' },
        { name: 'charlie', rating: 5, comment: 'Love this!' },
      ],
    },
  ]

  return (
    <div className="w-full mx-auto">
      {pageData.map((section, index) => {
        const SectionComponent = sectionRegistry[section.type] //SectionComponent is actually a dynamic component based on sectionRegistry object
        if (!SectionComponent) return null // fallback for unknown type
        return <SectionComponent key={index} {...section} />
      })}
    </div>
  )
}
