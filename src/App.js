import "./styles.css";
import Card from "./Card";
import axios from "axios";
import { useEffect, useState } from "react";
import Form from "./Form";

export default function App() {
  const [UserList, setUserList] = useState([]);
  let getData = () => {
    axios.get("http://3.6.93.159:7883/machstatz/get_all_users").then((data) => {
      setUserList(data.data)
    })
  }
  useEffect (() => {
    getData()
  });
  return (
    <div className="App">
        <Form/>
      <div className="view-body">
      {UserList.map(user=><Card   key={user.email} data={user}></Card>)}
    </div>
    </div>
  );
}
