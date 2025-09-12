import sectionRegistry from '@/sectionRegistry'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/landing/__layout/about')({
  component: AboutComponent,
})

function AboutComponent() {
  const pageData = [
    {
      type: 'default',
      header: 'Connecting Communities, One Event at a Time',
      icon: null,
      description: `We believe events are more than just gatherings-they are opportunities to connect, share, and build lasting experiences. Our platform was created to make discovering and hosting local events effortless.\n
Our platform makes it easy for anyone to join-completely free!! Explore trending events, bookmark your favorites, and never miss what's happening around you.\n
Our mission is to connect people through meaningful events and empower organizers to grow their communities.`,
      backgroundImage: null,
      backgroundColor: '#a67c52',
      height: null,
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
