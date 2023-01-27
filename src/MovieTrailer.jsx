import { useNavigate,} from "react-router-dom";


const MovieTrailer = () => {
    const navigate = useNavigate()
    return (

        <div>
            <button type="button" className="button-4" onClick={() => navigate('/moviecard')}>movie card</button>
            <div className='videos'>
                <iframe src="https://www.youtube.com/embed/fXmAurh012s"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src="https://www.youtube.com/embed/25XhqAFkyBU"
                
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src="https://www.youtube.com/embed/sxufB6DxXk0"
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/JWtnJjn6ng0'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/jDiYGjp5iFg'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/RvBwypGUkPo'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/3eqxXqJDmcY'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/ndl1W4ltcmg'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/InqQJRqGW'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/xl8zdCY-abw'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src='https://www.youtube.com/embed/b9EkMc79ZSU'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
                <iframe src=' https://www.youtube.com/embed/HhesaQXLuRY'
                    width="625" height="500"
                    frameborder='0'
                    allow='autoplay; encrypted-media; accelerometer; clipboard-write; gyroscope; picture-in-picture; fullscreen'
                />
            </div>
            <button className='button' onClick={() => navigate('/solar')}>Main Page</button>
        </div>
    )
}
export default MovieTrailer;
