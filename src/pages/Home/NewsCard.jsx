import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    const { title, image_url, details,_id } = news;
    return (
        <div className="card bg-base-100 shadow-xl mb-4 p-3">
            <h2 className="card-title text-3xl my-3">{title}</h2>
            <figure><img className="" src={image_url} alt="news" /></figure>
            <div className="card-body">
                {
                    details.length>200?<p>{details.slice(0,200)}<Link to={`/news/${_id}`} className="text-info">Read more...</Link></p>: <p>{details}</p>
                }
                
            </div>
        </div>
    );
};

export default NewsCard;