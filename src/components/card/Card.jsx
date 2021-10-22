import './Card.css'

const Card = (props) => {
    return (
        <div className='card'>
            <div className="card-icon">
                {props.icon}
            </div>
            <div className="card-info">
                <h4>{props.number}</h4>
                <span>{props.title}</span>
            </div>
        </div>
    )
}

export default Card
