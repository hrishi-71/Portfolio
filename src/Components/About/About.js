import './about.css'

const About = () => {
    return (
        <div id='about' className=''>
            <div className="row">
            <h1 className='abtHead col-100 my-5'>About Me</h1>
            <span className='col-md-4'><img src="man3.jpg" alt="man" className='man' /></span>    
            <p className='col-md-8 about-info'>
            <span className=''><img src="waving.gif" alt="hi" className='hi' /></span>
            Hi, I'm Hrishikesh Dhanawade, a passionate React.js developer with a strong interest in building responsive, dynamic web applications.

            I specialize in JavaScript, React, Redux, and modern frontend development. I love creating clean, user-friendly interfaces and solving real-world problems through code.

             I'm also a quick learner and thrive in collaborative environments where I can grow and contribute.

            When I’m not coding, I enjoy learning about new tech trends and improving my skills one project at a time.

            👉 Feel free to check out my projects or get in touch!
            </p>
        </div>
        </div>
    )
}

export default About
