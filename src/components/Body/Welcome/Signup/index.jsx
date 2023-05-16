import { useState } from "react";
import "./style.css";

function SingUp() {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    userRole: "",
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData({ ...data, [name]: value });
    // console.log(name, value)
  };

  const isValidData = () => {
    return (
      data.firstName &&
      data.lastName &&
      data.email &&
      data.password &&
      data.confirmPassword &&
      data.userRole ? true : false
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(isValidData());
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="modal">
        <div id="signIn__form" className="signin_container">
          <p>Sign In</p>
          <div className="namefield">
            <input
              className="nameinput"
              type="text"
              placeholder="First Name"
              name="firstName"
              value={data.firstName}
              onChange={handleChange}
            />
            <input
              className="nameinput"
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={data.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="namefield_2">
            <input
              className="form-input"
              type="text"
              placeholder="Email Address"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
            <input
              className="form-input"
              type={isPasswordVisible ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={data.password}
              onChange={handleChange}
            />
            <button onClick={() => setIsPasswordVisible((prev) => !prev)}>
              {isPasswordVisible ? "Hide" : "Show"}
            </button>
            <input
              className="form-input"
              type="password"
              placeholder="Confirm Password"
              name="confirmPassword"
              value={data.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="profile">
            <div className="userRole">
              <input
                type="radio"
                value="Admin"
                name="userRole"
                onChange={handleChange}
                checked={data.userRole === "Admin"}
              />
              <label>Admin</label>
            </div>
            <div className="userRole">
              <input
                type="radio"
                value="User"
                name="userRole"
                onChange={handleChange}
                checked={data.userRole === "User"}
              />
              <label>User</label>
            </div>
            <div className="userRole">
              <input
                type="radio"
                value="Owner"
                name="userRole"
                onChange={handleChange}
                checked={data.userRole === "Owner"}
              />
              <label>Owner</label>
            </div>
          </div>

          <button className="signup-btn" type="submit" disabled={!isValidData()}>
            Sign up
          </button>
          <a href="#" className="btn__a">
            {" "}
            have an accoutn? Sign In
          </a>
        </div>
      </div>
    </form>
  );
}

export default SingUp;
