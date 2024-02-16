import React, { useState } from 'react'
import { useAuth } from '../store/auth'

const Contact = () => {
  const [contact, setContact] = useState({
    username: "",
    email: "",
    message: ''
  })
  const [userData, setUserData] = useState(true)
  const { user,URL } = useAuth()

  if (userData && user) {
    setContact({
      username: user.username,
      email: user.email,
      message: ""
    })
    setUserData(false)
  }
  const handleInput = (event) => {
    const { name, value } = event.target
    setContact({
      ...contact,
      [name]: value
    })
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(contact)
    try {

      const response = await fetch(`${URL}/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact)
      })
      console.log(response)
      if (response.ok) {
        const data = await response.json();
        console.log(data)

      }

    } catch (error) {
      console.log("contact error ", error)
    }
  }

  return (
    <div>
      <section className='section-contact'>
        <div className="contact-content container">

          <h1 className='main_heading'>Contact us</h1>
        </div>
        {/* {main contact page} */}
        <div className="container grid-two-cols">
          <div className="contact_img">
            <img src="/image/contact.avif" alt="contact" />
          </div>
          {/* {contact content} */}
          <div className="section-form">
            <form onSubmit={handleSubmit} >
              <div>
                <label htmlFor="username">username</label>
                <input type="text " name='username' id='username' required onChange={handleInput} value={contact.username} />
              </div>
              <div>
                <label htmlFor="email">email</label>
                <input type="email " name='email' id='email' required onChange={handleInput} value={contact.email} />
              </div>
              <div>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" cols="30" rows="6" onChange={handleInput} value={contact.message}> </textarea>
              </div>
              <div>
                <button type='submit'>Submit</button>
              </div>
            </form>
          </div>
        </div>
        <section className='mb-3'>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3548.2721528172906!2d77.99716237528241!3d27.210603976470836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974775c54ccfb83%3A0x3e745cffb0d05a49!2sOmaxe%20SRK%20Mall%2C%20Jawaharnagar%20Colony%2C%20Khandari%2C%20Agra%2C%20Uttar%20Pradesh%20282002!5e0!3m2!1sen!2sin!4v1706851488557!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Omaxe SRK Mall, Agra">
          </iframe>

        </section>
      </section>
    </div>
  )
}

export default Contact
