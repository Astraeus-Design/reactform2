import { useState } from "react";
import reactLogo from "./assets/react.svg";
//import "./App.css";
import Userinfo from "./userinfo";

function App() {
  const [usersArray, addToUsers] = useState([]);
  //  const [usersinfo, saveusersinfo] = useState({
  //    name: "",
  //    email: "",
  //    location: "",
  //    mobile: "",
  //  });
  const [uname, setName] = useState("");
  const [uemail, setEmail] = useState("");
  const [ulocation, setLocation] = useState("");
  const [umobile, setMobile] = useState("");

  // let tempArray = [];

  const myHandler = (e) => {
    console.log("in handler");
    e.preventDefault();
    console.log(uname, uemail, ulocation, umobile);
    const tempObj = {
      name: uname,
      email: uemail,
      location: ulocation,
      mobile: umobile,
    };
    let tempArray = [...usersArray];
    tempArray.push(tempObj);
    addToUsers(tempArray);
    console.log(usersArray);
    console.log(tempArray);
  };

  return (
    <div className="App">
      <Userinfo
        setname={setName}
        setemail={setEmail}
        setlocation={setLocation}
        setmobile={setMobile}
        click={myHandler}
      />
      <h3>Current users are:-</h3>

      {usersArray.map((item, index) => {
        return (
          <div key={index}>
            <br />
            <h3>Name: {item.name}</h3>
            <h3>Email: {item.email}</h3>
            <h3>Location: {item.location}</h3>
            <h3>Mobile: {item.mobile}</h3>
            <br />
          </div>
        );
      })}
    </div>
  );
}

export default App;
