import { IonIcon } from '@ionic/react'
import { paperPlane } from 'ionicons/icons'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
  }

  return (
    <article className="contact" data-page="contact" style={{ display: 'block', color: 'black' }}>
      <br/><br/>
      <header>
        <h2 className="h2 article-title">Contact</h2>
      </header>

      <section className="mapbox" data-mapbox>
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1dYOUR_LOCATION"
            width="400" 
            height="300"
            loading="lazy"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="h3 form-title">Contact Form</h3>

        <form onSubmit={handleSubmit} className="form" data-form>
          <div className="input-wrapper">
            <input 
              type="text" 
              name="fullname" 
              className="form-input" 
              placeholder="Full name" 
              required 
              data-form-input
            />
            <input 
              type="email" 
              name="email" 
              className="form-input" 
              placeholder="Email address" 
              required 
              data-form-input
            />
          </div>

          <input 
            type="text" 
            name="subject" 
            className="form-input" 
            placeholder="Subject" 
            required 
            data-form-input
          />

          <textarea 
            name="message" 
            className="form-input" 
            placeholder="Your Message" 
            required 
            data-form-input
          ></textarea>

          <button className="form-btn" type="submit" data-form-btn>
            <IonIcon icon={paperPlane} />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  )
}