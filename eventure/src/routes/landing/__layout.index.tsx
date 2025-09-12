import { supabase } from '@/supabaseClient'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'
import sectionRegistry from '@/sectionRegistry'

export const Route = createFileRoute('/landing/__layout/')({
  component: App,
})

function App() {
  const pageData = [
    {
      type: 'backgroundImage',
      reviews: [
        { name: 'Alice', rating: 5, comment: 'Amazing!' },
        { name: 'Bob', rating: 4, comment: 'Pretty good!' },
      ],
      height: 100,
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

  const testimonials = [
    'Had my best experience at this running event. So good!',
    'As an organiser, Eventure is amazing, the sign up and creating process was so smooth and easy and I was able to get 150 sign ups.',
    'I attended this whisky event and truly the sign up process for this was so simple.',
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
