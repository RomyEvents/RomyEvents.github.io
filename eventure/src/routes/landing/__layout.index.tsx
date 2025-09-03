import { supabase } from '@/supabaseClient'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect } from 'react'

export const Route = createFileRoute('/landing/__layout/')({
  component: App,
})

function App() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      console.log(session)
    })

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      console.log(session)
    })

    return () => subscription.unsubscribe()
  }, [])

  const trending = [
    { title: 'Nightlife event', img: '/images/nightlife.jpg' },
    { title: 'Gala night', img: '/images/gala.jpg' },
    { title: 'Running event', img: '/images/running.jpg' },
    { title: 'Cafe event', img: '/images/cafe.jpg' },
    { title: 'Interior Design workshop', img: '/images/interior.jpg' },
  ]

  const testimonials = [
    'Had my best experience at this running event. So good!',
    'As an organiser, Eventure is amazing, the sign up and creating process was so smooth and easy and I was able to get 150 sign ups.',
    'I attended this whisky event and truly the sign up process for this was so simple.',
  ]

  return (
    <div className="font-sans">
      <section className="relative">
        <img
          src="https://i.imgur.com/uoQAA1j.jpeg"
          alt="Hero"
          className="w-full h-96 object-cover"
        />
      </section>

      {/* Trending */}
      <section className="bg-[#c19a6b] py-8 text-white">
        <h2 className="text-2xl font-bold text-center mb-6">Top Trending</h2>
        <div className="flex gap-4 overflow-x-auto px-6">
          {trending.map((item, idx) => (
            <div key={idx} className="min-w-[200px]">
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg h-40 w-full object-cover"
              />
              <p className="mt-2 text-center">{item.title}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="bg-[#f5e4d7] py-12 text-center">
        <h2 className="text-xl font-bold mb-4">About us</h2>
        <p className="max-w-2xl mx-auto text-gray-800 leading-relaxed">
          We bring communities together by making it easy to discover, share,
          and attend local events. Whether you’re an organiser looking to
          showcase your event or an attendee searching for new experiences, our
          platform connects people with the activities that matter most.
        </p>
        <p className="mt-4 text-blue-600 font-semibold">
          Want to boost your event’s reach? See our pricing plans →
        </p>
      </section>

      {/* Testimonials */}
      <section className="bg-[#c19a6b] py-12 text-center text-white">
        <h2 className="text-2xl font-bold mb-6">What our users say</h2>
        <div className="flex gap-6 overflow-x-auto px-6">
          {testimonials.map((text, idx) => (
            <div
              key={idx}
              className="bg-white text-gray-800 p-6 rounded-lg min-w-[250px]"
            >
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#8b5e3c] text-white py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-6 max-w-6xl mx-auto">
          <div>
            <h3 className="font-bold mb-2">Use Eventure</h3>
            <ul className="space-y-1 text-sm">
              <li>Find events</li>
              <li>Create Events</li>
              <li>Pricings</li>
              <li>Eventure mobile app</li>
              <li>FAQs</li>
              <li>Sitemap</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Plan events</h3>
            <ul className="space-y-1 text-sm">
              <li>Organiser account</li>
              <li>Create Events</li>
              <li>Event dashboard</li>
              <li>Attendee Management</li>
              <li>Analytics</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Follow</h3>
            <ul className="space-y-1 text-sm">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>
          <div>
            <h3 className="font-bold mb-2">Help</h3>
            <ul className="space-y-1 text-sm">
              <li>Contact Support</li>
              <li>Contact Sales</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}
