import "./register.scss"
import {Link} from "react-router-dom";

const Register = () => {
    return(
        <div className="Register">
            <div className="Card">
                <div className="Left">
                    <h1> hello world</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Fugiat id nemo placeat.
                        Aut consectetur exercitationem ipsam laudantium quasi quisquam vero.
                    </p>
                    <span> Do u have an Account? </span>
                    <Link to={"/login"}> <button> Login </button> </Link>

                </div>
                <div className="Right">
                    <h1> Register </h1>
                    <form>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="ConfirmPassword" />
                        <input type="text" placeholder="Name" />
                        <button> Register </button>
                    </form>
                </div>

            </div>
        </div>

    );
}
export default Register