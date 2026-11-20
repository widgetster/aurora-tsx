import type { ReactNode } from 'react'
import { Link } from 'react-router'
import { Header } from './Header'
import { Footer } from './Footer'
import './PageLayout.css'

type PageLayoutProps = {
  label: string
  title: string
  intro: string
  children: ReactNode
}

export function PageLayout({ label, title, intro, children }: PageLayoutProps) {
  return (
    <div className="site-layout">
      <title>{`${label} | Aurora`}</title>
      <Header />

      <main className="studio-page">
        <section className="page-hero" aria-labelledby="page-title">
          <div className="page-container">
            <p className="page-label">{label}</p>
            <h1 id="page-title">{title}</h1>
            <p className="page-intro">{intro}</p>
          </div>
        </section>

        <div className="page-container page-content">{children}</div>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export function PageCallout({ title }: { title: string }) {
  return (
    <section className="page-callout" aria-label="Start a project">
      <h2>{title}</h2>
      <Link className="page-button" to="/contact">Let’s talk</Link>
    </section>
  )
}
