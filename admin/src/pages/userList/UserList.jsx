import {useState} from "react";
import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@material-ui/icons";
import {userRows} from "../../data"; 
import { Link } from "react-router-dom";


export default function UserList() {
  const [data,setData] = useState(userRows);
  const handleDelete = (id) => {
    setData(data.filter(item=> item.id !== id));
  }
  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    { field: "user", headerName: "User", width: 200, renderCell: (params)=>{
      return (
        <div className="userandimg">
          <img src={params.row.avatar} className="userlistimg" alt=""/>
          {params.row.user}
        </div>
      )
    } },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 150 },
    { field: "transaction", headerName: "Transaction", width: 200 },
    { field: "actions", headerName: "Actions", width: 200, renderCell: (params)=>{
      return (
        <>
        <Link to={"/user/"+params.row.id}>
         <button className="userlistbuttonedit">Edit</button>
        </Link>
         <DeleteOutline className="userlistbuttondelete" onClick={()=>handleDelete(params.row.id)}/>
        </>
      )
    } },
  ];
  return (
    <div className="userList">
      <DataGrid
        rows={data }
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
}
