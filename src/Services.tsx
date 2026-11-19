import { PageCallout, PageLayout } from './components/PageLayout'

const services = [
  {
    title: 'Web Design',
    icon: 'laptop.png',
    description: 'Clean, responsive websites with a clear visual direction. Designed around your brand and the people who use it.',
  },
  {
    title: 'Web Development',
    icon: 'code.png',
    description: 'Thoughtful designs brought to life with clean code, smooth interactions, and layouts that adapt to every screen.',
  },
  {
    title: 'UI/UX Design',
    icon: 'cellphone.png',
    description: 'Simple user journeys, useful wireframes, and intuitive interfaces that make the next step feel natural.',
  },
  {
    title: 'Website Care',
    icon: 'fast.png',
    description: 'Content updates, performance improvements, and small refinements to keep your website moving forward.',
  },
]

export function Services() {
  return (
    <PageLayout
      label="Our services"
      title="Good ideas, built for the web."
      intro="From a fresh design to a finished website, we help you create a digital presence with purpose."
    >
      <section className="services-grid" aria-label="What we do">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <img src={`${import.meta.env.BASE_URL}icon/${service.icon}`} alt="" />
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </section>

      <PageCallout title="Not sure where to start? Let’s figure it out." />
    </PageLayout>
  )
}
