import "./ContactPage.css";

export default function ContactPage() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <h1>Contact Food Studio</h1>
        <p>
          Questions, delivery help, or catering enquiries? Get in touch with us.
        </p>
      </section>

      <section className="contact-layout">
        <div className="contact-info-box">
          <h2>Restaurant Details</h2>

          <div className="contact-detail">
            <h3>Address</h3>
            <p>Birmingham City Centre, Birmingham, UK</p>
          </div>

          <div className="contact-detail">
            <h3>Phone</h3>
            <p>01234 567890</p>
          </div>

          <div className="contact-detail">
            <h3>Email</h3>
            <p>hello@foodstudio.demo</p>
          </div>

          <div className="contact-detail">
            <h3>Opening Hours</h3>
            <p>Monday - Sunday</p>
            <p>10:00 AM - 11:00 PM</p>
          </div>
        </div>

        <div className="contact-form-box">
          <h2>Send a Message</h2>

          <form className="contact-form">
            <label>
              Full Name
              <input type="text" placeholder="Your name" />
            </label>

            <label>
              Email
              <input type="email" placeholder="your@email.com" />
            </label>

            <label>
              Message
              <textarea placeholder="Write your message..." rows={6}></textarea>
            </label>

            <button type="button" className="contact-submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}