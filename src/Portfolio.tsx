import { PageCallout, PageLayout } from './components/PageLayout'

const projects = [
  {
    title: 'Travel Landing Page',
    image: 'travel.png',
    alt: 'Travel website concept with destination photography',
    description: 'An inviting starting point for the next adventure.',
  },
  {
    title: 'Banking Dashboard',
    image: 'banking.png',
    alt: 'Banking dashboard concept with a financial overview',
    description: 'A clear, calm view of everyday finances.',
  },
  {
    title: 'E-commerce Store',
    image: 'ecommerce.png',
    alt: 'E-commerce website concept with a product collection',
    description: 'A simple shopping experience that lets products shine.',
  },
  {
    title: 'Tech Blog',
    image: 'tech.png',
    alt: 'Technology blog concept with featured articles',
    description: 'A clean reading space for ideas and discoveries.',
  },
]

export function Portfolio() {
  return (
    <PageLayout
      label="Our portfolio"
      title="Simple ideas. Considered execution."
      intro="A selection of website concepts exploring clean design, useful interfaces, and a little personality."
    >
      <section className="work-grid" aria-label="Selected design concepts">
        {projects.map((project) => (
          <article className="work-card" key={project.title}>
            <img
              src={`${import.meta.env.BASE_URL}picture/${project.image}`}
              alt={project.alt}
              loading="lazy"
              width="800"
              height="600"
            />
            <h2>{project.title}</h2>
            <p>{project.description}</p>
          </article>
        ))}
      </section>

      <PageCallout title="Let’s make room for your next project." />
    </PageLayout>
  )
}
