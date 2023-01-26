import Login from './Login'
import Header from './Header'
import { useNavigate } from 'react-router-dom'


const Homepage = ({ handleLoginSubmit }) => {

    const navigate = useNavigate()

    const signupClick = () => {
        console.log('working')
    }
    return (
        <div>
            <div id='title'>
                <Header />
            </div>
            <div>
                <Login handleLoginSubmit={handleLoginSubmit} />
            </div>
            <div>
                <button onClick={() => {signupClick()}}>New? Create an account</button>
            </div>
        </div>
    )
}
export default Homepage