export default function(props) {
    return (
        <div className="card-container">
            <img src={props.imageUrl} className="img"/>
            <span>{props.location} <a href={props.googleMapsUrl}>View on Google Maps!</a></span>
            <h1>{props.title}</h1>
            <span><b>{props.startDate} - {props.endDate}</b></span>
            <p>{props.description}</p>
        </div>
    )
}