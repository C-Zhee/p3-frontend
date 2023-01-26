import { useNavigate } from 'react-router-dom'
const Header = () => {
    const navigate = useNavigate()
    //function so that when logo is clicked, it goes back to homepage
    const handleOnClick = () => {
        console.log('clicked')
        navigate('/')
    }
    return (
        <div>
            <img src="https://pbs.twimg.com/profile_images/1250848194831044610/1-BbuKvz_400x400.jpg" onClick={handleOnClick} />
        </div>
    )
}
export default Header