import { PageCallout, PageLayout } from './components/PageLayout'

export function About() {
  return (
    <PageLayout
      label="About Aurora"
      title="Thoughtful design. Purposeful development."
      intro="We’re a digital studio with a simple focus: creating websites that look good, feel natural, and work beautifully."
    >
      <section className="about-grid" aria-labelledby="about-heading">
        <div className="about-story">
          <p className="page-label">Our approach</p>
          <h2 id="about-heading">Good work starts with listening.</h2>
          <p>
            Every project begins with your goals and the people you want to reach.
            We turn that understanding into clear layouts and useful digital experiences.
          </p>
          <p>
            From the first sketch to the final build, we keep things collaborative,
            considered, and simple.
          </p>
        </div>

        <div className="about-values">
          <article>
            <h3>Clarity first</h3>
            <p>Every page, word, and interaction should have a purpose.</p>
          </article>
          <article>
            <h3>Built for people</h3>
            <p>Easy to navigate, comfortable to read, and ready for any screen.</p>
          </article>
          <article>
            <h3>Care in the details</h3>
            <p>Thoughtful design and clean code, from start to finish.</p>
          </article>
        </div>
      </section>

      <PageCallout title="A good idea deserves a thoughtful website." />
    </PageLayout>
  )
}
