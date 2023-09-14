import  "./Login.scss";
import {Link} from "react-router-dom";
import {useContext} from "react";
import {AuthenticationContext} from "../../context/AuthenticationContext.jsx";

const Login = () => {
    const {login} = useContext(AuthenticationContext);
    const handleLogin = () => {
        login();
    };
    return(
        <div className="Login">
        <div className="Card">
        <div className="Left">
            <h1> hello world</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Fugiat id nemo placeat.
                Aut consectetur exercitationem ipsam laudantium quasi quisquam vero.
            </p>
            <span> Don t u have an Account? </span>
            <Link to={"/register"}> <button> Register </button> </Link>

        </div>
            <div className="Right">
            <h1> Login </h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button onClick={handleLogin}> Login </button>
            </form>
            </div>

        </div>
        </div>

    );
};
export default Login