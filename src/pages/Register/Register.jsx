import { Link } from "react-router-dom";
import Navber from "../Shared/Navber/Navber";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Register = () => {
    const { createUser } = useContext(AuthContext)

    const handelRegister = e => {
        e.preventDefault();
        console.log(e.currentTarget);
        const form = new FormData(e.currentTarget);
        const photo = form.get('photo');
        const name = form.get('name');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        // creatae Uer
        createUser(email, password)
            .then(result => {
                console.log(result.user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div>
            <Navber></Navber>
            <div className="tex">
                <h2 className="text-3xl my-10 text-center">Register your account</h2>
                <form onSubmit={handelRegister} className="card-body md:h-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" placeholder="name"
                            name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Photo URL"
                            name="photo" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-center mt-4 font-semibold">Already Have An Account ? <Link to={'/login'} className="text-secondary underline">Login</Link> </p>
            </div>
        </div>
    );
};

export default Register;