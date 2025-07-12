import './contact.css'

const Contact = () => {
    return (
        <div className='contact' id='contact'>
            <h1 className="ctHead">Let's Work Together!</h1>
            <h3 className="sbHead mb-4">I'm open to freelance work and collobration.</h3>
            <div className="Form">
                <form name="contact" method="post" data-netlify="true" onSubmit="submit">
                    {/* Hidden input for Netlify */}
                    <input type="hidden" name="form-name" value="contact" />

                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" className="form-control border border-dark" id="name" name="name" placeholder="Enter Your Name" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" className="form-control border border-dark" id="email" name="email" placeholder="Enter Your Email" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Phone No:</label>
                        <input type="tel" className="form-control border border-dark" id="phone" name="phone" placeholder="Enter Your Phone Number (Optional)" pattern="\+?[0-9\s\-]{10,15}" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="message" className="form-label">Write Your Message Here:</label>
                        <textarea className="form-control border border-dark" id="message" name="message" rows="6" placeholder="Enter Your Message" required></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="btn btn-primary rounded-pill px-4">Submit ⇨</button>
                    </div>
                </form>
            </div>
            <hr />
            <div className="socialID">
                <div><a href="https://github.com/hrishi-71" target='_blank' rel="noreferrer"><img src="github.png" alt="git" />hrishi-71</a></div>
                <div><a href="mailto:hrishid71@gmail.com"><img src="email.jpg" alt="email"  />hrishid71@gmail.com</a></div>
                <div><a href="https://www.linkedin.com/in/hrishidhanawade" target="_blank" rel="noreferrer"><img src="linkedin.jpg" alt="linkedin" />Hrishi Dhanawade</a></div>
            </div>
        </div>
    )
}

export default Contact
