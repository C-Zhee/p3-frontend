import Header from './Header'
const Signup = ({ handleSignupSubmit }) => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div id='signup-form'>
                <form onSubmit={handleSignupSubmit}>Create an account
                    <br />
                    <label>Email: </label>
                    <input type='email' name='email' />
                    <br />
                    <label>Password: </label>
                    <input type='password' name='password' />
                    <br />
                    <button className="button-4">Sign up</button>
                </form>
            </div>
        </div>
    )
}
export default Signup