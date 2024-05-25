import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [loginAccepted, setLoginAccepted] = useState('');
    const [loginError, setLoginError] = useState('');
    const emailRef = useRef(null);
    const handleLogin = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(email, password);
        // reset accepted & error
        setLoginAccepted('');
        setLoginError('');

        // add validation
        signInWithEmailAndPassword(auth, email, password)
        .then(result => {
            console.log(result.user);
            if(result.user.emailVerified) {
                setLoginAccepted("Login Successful!");
            } else {
                alert("Please verify your email address!");
            }
        })
        .catch(err => {
            console.error(err);
            setLoginError("Incorrect! Please try again");
        })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;
        console.log("Send Reset Email", emailRef.current.value);

        if(!email) {
            console.log("Please Provide email address");
            return;
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            console.log("Please enter a valid email");
            return;
        }

        // send validation email
        sendPasswordResetEmail(auth, email)
        .then(() => {
            alert("Please Check Your Email");
        })
        .catch(err => {
            console.error(err);
        })
    }

    return (
<div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogin}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                ref={emailRef}
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a onClick={handleForgetPassword} href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6 mb-3">
              <button className="btn btn-primary">Login</button>
            </div>
            { 
                loginAccepted && <p className="text-green-700">{loginAccepted}</p>
                ||
                loginError && <p className="text-red-700">{loginError}</p>
            }
            <p>New to this website? please <Link className="text-blue-700" to="/register">Register</Link></p>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;