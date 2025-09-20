import sectionRegistry from '@/sectionRegistry'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/landing/__layout/about')({
  component: AboutComponent,
})

function AboutComponent() {
  const pageData = [
    // Hero / Intro
    {
      type: 'default',
      header: 'About Us',
      icon: 'info',
      description: `We are passionate about connecting people and empowering communities through events. Our mission is to make it easy for everyone to discover, join, and organize meaningful gatherings that bring people together.`,
      backgroundImage: null,
      backgroundColor: '#b29775',
      height: 350,
    },

    // Mission / Vision
    {
      type: 'default',
      header: 'Our Mission',
      icon: 'emojiObjects',
      description: `To provide a platform that fosters connections, encourages participation, and supports event organizers in building thriving communities.`,
      backgroundImage: null,
      backgroundColor: '#a67c52',
      height: null,
    },

    // Team Section
    {
      type: 'default',
      header: 'Meet the Team',
      icon: 'people',
      description: `Our team is made up of passionate individuals from diverse backgrounds, all committed to making events accessible, fun, and meaningful for everyone.`,
      backgroundImage: null,
      backgroundColor: '#b29775',
      height: null,
    },

    // Call to Action (optional)
    {
      type: 'default',
      header: 'Join Our Community',
      icon: 'rocket_launch',
      description: `Whether you’re looking to attend events or host your own, we invite you to be part of our growing community.`,
      backgroundImage: null,
      backgroundColor: '#a67c52',
      height: 300,
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
