import './workcard.css'

const WorkCard = ({ project, image, title, text, source }) => {
    return (
        <div className="workcard card col-md-4 my-3">
            <a href={project} target={project !== ''? '_blank':'_self'} rel='noopner noreferrer'>
                <img src={image} className="card-img-top" alt="..." />
            </a>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href={source} target='_blank' rel='noopner noreferrer' className="btn btn-primary">View Source-Code</a>
            </div>
        </div>
    )
}

export default WorkCard
