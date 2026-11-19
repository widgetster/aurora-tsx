import type { FormEvent } from 'react'
import { PageLayout } from './components/PageLayout'

export function Contact() {
  function prepareEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = new FormData(event.currentTarget)
    const name = String(form.get('name') ?? '').trim()
    const email = String(form.get('email') ?? '').trim()
    const message = String(form.get('message') ?? '').trim()
    const subject = encodeURIComponent(`Project enquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)

    window.location.href = `mailto:hello@aurora.com?subject=${subject}&body=${body}`
  }

  return (
    <PageLayout
      label="Contact us"
      title="Let’s make something good."
      intro="A new website, a fresh direction, or just an idea. We’d love to hear what you have in mind."
    >
      <section className="contact-grid" aria-labelledby="contact-heading">
        <div className="contact-details">
          <h2 id="contact-heading">Start a conversation.</h2>
          <p>Tell us a little about your project, what you need, and where you’d like to go.</p>
          <a className="contact-email" href="mailto:hello@aurora.com">hello@aurora.com</a>
          <h3>Not sure of the details yet?</h3>
          <p>That’s okay. A short introduction is a good place to start.</p>
        </div>

        <form className="contact-form" onSubmit={prepareEmail} aria-label="Project enquiry">
          <label>
            Your name
            <input name="name" autoComplete="name" maxLength={100} required />
          </label>
          <label>
            Email address
            <input name="email" type="email" autoComplete="email" maxLength={254} required />
          </label>
          <label>
            What do you have in mind?
            <textarea name="message" rows={5} maxLength={2000} required />
          </label>
          <p className="form-hint" id="email-hint">
            Opens a draft in your email app. Review it there, then send when you’re ready.
          </p>
          <button className="page-button" type="submit" aria-describedby="email-hint">Prepare email</button>
        </form>
      </section>
    </PageLayout>
  )
}
