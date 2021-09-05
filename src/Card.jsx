import "./styles.css";
import CreateIcon from "@material-ui/icons/Create";
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, IconButton } from "@material-ui/core";
import axios from "axios";
export default function Card({data}) {
  
  let deleteCard = ()=>{
    let URL = "http://3.6.93.159:7883/machstatz/delete_existing_user"
    let payload ={ params: {email: data.email} }
    console.log(payload);
    axios.delete(URL,payload).then(response => {console.log(response)}).catch(err => {console.log(err)})
  };

  return (
    <div className="card">
      <div className="icon-div">
    <IconButton><CreateIcon></CreateIcon >
    </IconButton>
    <IconButton><DeleteIcon style={{color:"red"}} onClick={deleteCard}></DeleteIcon>
    </IconButton>
      </div>
      <div className="data-div">
      <IconButton>
          <Avatar>{data?.fist_name.toUpperCase()[0]}</Avatar>
        </IconButton>
        <span className="name">{data?.fist_name} {data.last_name}</span>
      </div>
    </div>
  );
}
