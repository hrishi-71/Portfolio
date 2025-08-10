import './work.css'
import WorkCard from './WorkCard'

const Work = () => {
  return (
    <div id='work'>
      <h1 className="workHead mb-3">My Work</h1>
      <h3 className='subHead mb-3'>Here are some of the projects I've worked on.</h3>
      <div className="techImg row mx-auto my-3">
        <img className='col-3' src="reactI.png" alt="" />
        <img className='col-3' src="reduxI.jpg" alt="" />
        <img className='col-3' src="JSI.png" alt="" />
        <img className='col-3' src="NodeI.jpg" alt="" />
      </div>
      {/* carousel */}
      <div id="carouselOne" className="MyWork carousel slide mx-auto" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselOne" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active px-2">
            <WorkCard
              project=""
              image="Portfolio.png"
              title="HD-Portfolio"
              text="Personal Portfolio Website – A fully responsive React-based portfolio to showcase my projects, skills, and contact information. Built using modern UI/UX practices, React components, and smooth navigation with React Router. Designed to reflect my identity as a web developer and serve as my online presence."
              source="https://github.com/hrishi-71/Portfolio"
            />
          </div>
          <div className="carousel-item px-2">
            <WorkCard
              project="https://hd-educity.netlify.app"
              image="HDEducity.png"
              title="HD-Educity"
              text="A responsive React web application built as my first hands-on project. It features modern UI components, dynamic rendering, and smooth navigation using React Router. Developed using JSX, CSS, and component-based architecture to practice real-world React development. Its hosted on Netlify, includes form handling and has mobile-friendly layout"
              source="https://github.com/hrishi-71/HD-Educity"
            />
          </div>
          <div className="carousel-item px-2">
            <WorkCard
              project="https://hd-mystore.netlify.app"
              image="Mystore.png"
              title="HD-Educity"
              text="A modern, responsive e-commerce frontend application built with React for dynamic UI rendering and Redux Toolkit (RTK) for efficient state management. The app provides users with a seamless shopping experience, including product browsing, category filtering, cart management, and checkout flow. It consumes a backend API to fetch product data, ensuring real-time updates and smooth navigation."
              source="https://github.com/hrishi-71/E-Commerce-App"
            />
          </div>
        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselOne" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselOne" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Work
