import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import auth from "../../firebase/firebase.config";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
  const [registerError, setRegisterError] = useState("");
  const [registrationSuccess, setRegistrationSuccess] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accepted = e.target.terms.checked;
    console.log(name, email, password, accepted);

    // reset error && success
    setRegisterError("");
    setRegistrationSuccess("");

    if (password.length < 6) {
      setRegisterError("Password must be at least 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError(
        "Your password should have at least one upper case letter"
      );
      return;
    } else if (!accepted) {
      setRegisterError("Please Accept Our Terms & Conditions!");
      return;
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        // signed up
        console.log(result.user);
        setRegistrationSuccess("Registered successfully!");

        // update profile

        updateProfile(result.user, {
          displayName: name,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            console.log("Profile updated successfully!");
          })
          .catch((error) => {
            console.error(error);
          });

        // send verification email
        sendEmailVerification(result.user).then(() => {
          alert("Please check your email and verify your Account");
        });
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div>
      <div className="mx-auto md:w-1/2">
        <h2 className="text-3xl mb-8">Please Register</h2>
        <form onSubmit={handleRegister}>
          <input
            className="mb-4 w-full py-2 px-4"
            placeholder="Your Name"
            type="text"
            name="name"
            id=""
            required
          />
          <br />
          <input
            className="mb-4 w-full py-2 px-4"
            placeholder="Email Address"
            type="email"
            name="email"
            id=""
            required
          />
          <br />
          <div className="relative">
            <input
              className="w-full py-2 px-4"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              id=""
              required
            />
            <span
              className="absolute top-3 right-2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <br />
          <input type="checkbox" name="terms" id="terms" />
          <label className="ml-2" htmlFor="terms">
            Accept Our <a href="">Terms and Conditions</a>{" "}
          </label>
          <br />
          <input
            type="submit"
            className="btn btn-secondary my-4 w-full"
            value="Register"
          />
        </form>
        {(registerError && <p className="text-red-800">{registerError}</p>) ||
          (registrationSuccess && (
            <p className="text-green-800">{registrationSuccess}</p>
          ))}
        <p>
          Already have an Account? please{" "}
          <Link className="text-blue-700" to="/login">
            Login !
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
