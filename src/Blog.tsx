import { PageLayout } from './components/PageLayout'

const notes = [
  {
    category: 'Design',
    title: 'Why simple design works',
    excerpt: 'Less visual noise. More room for what matters.',
    paragraphs: [
      'A useful website gives every element a job. A heading explains, an image adds context, and a button offers a clear next step. When too many elements compete, those jobs become harder to do.',
      'Start with the one thing a visitor needs from a page. Build around it, group related content, and leave enough space to make reading comfortable. Simple design is a series of thoughtful choices.',
    ],
  },
  {
    category: 'Development',
    title: 'Think beyond the desktop',
    excerpt: 'A good website should feel at home on every screen.',
    paragraphs: [
      'People open websites on phones, tablets, and wide monitors. A layout needs to adapt while keeping its content readable and its navigation easy to use.',
      'Let columns stack when space gets tight, give images flexible widths, and leave room around links and buttons. Check the page on a narrow screen early, while changes are still easy to make.',
    ],
  },
  {
    category: 'Process',
    title: 'Start with the right questions',
    excerpt: 'A little clarity at the beginning makes the whole project better.',
    paragraphs: [
      'Before choosing colors or drawing a layout, ask who the website is for. What brought them here? What do they need to understand? What should they be able to do next?',
      'Write short answers and use them to guide the content. A clear brief helps a team make decisions together and keeps the work focused on the people who will use it.',
    ],
  },
]

export function Blog() {
  return (
    <PageLayout
      label="Studio notes"
      title="A few thoughts from Aurora."
      intro="Short reads on design, development, and making better things for the web."
    >
      <section className="blog-list" aria-label="Latest notes">
        {notes.map((note) => (
          <article className="blog-note" key={note.title}>
            <p className="page-label">{note.category}</p>
            <h2>{note.title}</h2>
            <p>{note.excerpt}</p>
            <details>
              <summary>Read note<span className="visually-hidden">: {note.title}</span></summary>
              {note.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </details>
          </article>
        ))}
      </section>
    </PageLayout>
  )
}
