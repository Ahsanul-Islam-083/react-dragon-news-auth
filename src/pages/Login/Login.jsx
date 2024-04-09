import { Link,useLocation,useNavigate } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Login = () => {
    const {signIn}=useContext(AuthContext);
    const location =useLocation();
    console.log('location in the login page',location);
    const navigate =useNavigate()

    const handelLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const email = form.get('email'); 
        const password = form.get('password'); 
        console.log(email,password);

        signIn(email,password)
        .then(result=>{
            console.log(result.user);
            // navigati after login
            navigate(location?.state?location.state:'/')
        })
        .catch(error=>{
            console.error(error);
        })

    }
    return (
        <div>

            <Navber></Navber>
            <div className="tex">
            <h2 className="text-3xl my-10 text-center">Login your account</h2>
                <form onSubmit={handelLogin} className="card-body md:h-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="email" placeholder="email"
                        name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="password"
                        name="password" placeholder="password" className="input input-bordered" required />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4 font-semibold">Don't Have An Account ? <Link to={'/register'} className="text-secondary underline">Register</Link> </p>
            </div>
        </div>
    );
};

export default Login;