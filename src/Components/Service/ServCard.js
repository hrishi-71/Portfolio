import './servcard.css'

const ServCard = ({ image, title, servlist }) => {
    return (
        <div className="serv card">
            <div className="card-body">
                <img src={image} alt="icon" className='image' />
                <h5 className="card-title">{title}</h5>
                <ul className='list'>{
                    servlist.map((val, index) => (
                        <li key={index}>{val}</li>
                    ))
                }</ul>
            </div>
        </div>
    )
}

export default ServCard
