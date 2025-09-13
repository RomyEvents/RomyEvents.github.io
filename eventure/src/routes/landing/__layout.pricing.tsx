import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/landing/__layout/pricing')({
  component: RouteComponent,
})

function RouteComponent() {
  const pricingPlans = [
    {
      name: 'Pay Per Post',
      description: 'Create an event by paying a one-time fee.',
      details: [
        'Create unlimited events',
        'One-time fee per event: $5',
        'No monthly subscription',
        'Support included',
      ],
      icon: 'event',
      highlight: true,
    },
    {
      name: 'Ticket Commission',
      description: 'We take a percentage from each ticket sold.',
      details: [
        '0% upfront cost',
        'Commission: 5% per ticket',
        'Supports free and paid events',
        'Detailed sales dashboard',
      ],
      icon: 'confirmation_number',
      highlight: false,
    },
  ]

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-12 flex flex-col items-center gap-12">
      <h1 className="text-4xl font-bold text-center mb-8">Pricing & Fees</h1>
      <p className="text-center max-w-2xl text-gray-700 mb-12">
        Our platform is designed to be fair and flexible. Choose between paying
        per event or letting us take a small commission on ticket sales.
      </p>
      <div className="grid md:grid-cols-2 gap-8 w-full max-w-6xl">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className={`flex flex-col rounded-xl p-8 shadow-md transition hover:shadow-lg border ${
              plan.highlight
                ? 'border-indigo-500 bg-indigo-50'
                : 'border-gray-200 bg-white'
            }`}
          >
            <div className="flex items-center mb-4">
              <span className="material-icons text-4xl text-indigo-600 mr-3">
                {plan.icon}
              </span>
              <h2 className="text-2xl font-semibold">{plan.name}</h2>
            </div>
            <p className="text-gray-700 mb-4">{plan.description}</p>
            <ul className="mb-6 space-y-2 flex-1">
              {plan.details.map((item, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2 text-green-500 font-bold">✔</span>{' '}
                  {item}
                </li>
              ))}
            </ul>
            <button
              className={`py-2 px-4 rounded-lg text-white font-semibold transition ${
                plan.highlight
                  ? 'bg-indigo-600 hover:bg-indigo-700'
                  : 'bg-gray-700 hover:bg-gray-800'
              }`}
            >
              Choose
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RouteComponent
