import  "./Login.scss";

const Login = () => {
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
            <button> Register </button>
        </div>
            <div className="Right">
            <h1> Login </h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="password" placeholder="Password" />
                <button> Login </button>
            </form>
            </div>

        </div>
        </div>

    );
};
export default Login