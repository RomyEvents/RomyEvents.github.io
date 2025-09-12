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
      type: 'default',
      header: 'Our user base',
      icon: 'accessibilityNew',
      description: '12,000 users \n 400 organizers hosting events',
      backgroundImage: null,
      backgroundColor: '#a67c52',
      height: 300,
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
