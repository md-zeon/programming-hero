import "./App.css";
import Grandpa from "./components/Grandpa/Grandpa";
// import HookForm from "./components/HookForm/HookForm";
// import RefForm from "./components/RefForm/RefForm";
// import ReusableForm from "./components/ReusableForm/ReusableForm";
// import SimpleForm from "./components/SimpleForm/SimpleForm";
// import StateForm from "./components/StateForm/StateForm";

function App() {
//   const handleSignupSubmit = (data) => {
//     console.log("Signup data: ", data);
//   };
//   const handleUpdateProfile = (data) => {
//     console.log("Update Profile data: ", data);
//   };

  return (
    <>
      <h1>Form Master</h1>
      <Grandpa></Grandpa>
      {/* <SimpleForm /> */}
      {/* <StateForm /> */}
      {/* <RefForm /> */}
      {/* <HookForm /> */}
      {/* <ReusableForm 
      formTitle={"Sign Up"} 
      handleSubmit={handleSignupSubmit} >
        <div>
          <h2>Sign Up</h2>
          <p>Please Sign Up Right Now</p>
        </div>
      </ReusableForm>
      <ReusableForm
        formTitle={"Profile Update"}
        sunmitBtnText="Update"
        handleSubmit={handleUpdateProfile}>
          <div>
            <h2>Update Profile</h2>
            <p>Always Keep Your Profile Updated</p>
          </div>
        </ReusableForm> */}
    </>
  );
}

export default App;
