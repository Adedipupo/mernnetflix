import { DeleteOutline } from '@material-ui/icons';
import { DataGrid } from '@mui/x-data-grid';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { productRows } from '../../data';
import "./productlist.css";

export default function ProductList() {
    const [data,setData] = useState(productRows);
    const handleDelete = (id) => {
        setData(data.filter(item=> item.id !== id));
      }
      const columns = [
        { field: "id", headerName: "ID", width: 150 },
        { field: "name", headerName: "Product", width: 200, renderCell: (params)=>{
          return (
            <div className="productItem">
              <img src={params.row.img} className="productlistimg" alt=""/>
              {params.row.name}
            </div>
          )
        } },
        { field: "stock", headerName: "Stock", width: 200 },
        { field: "status", headerName: "Status", width: 150 },
        { field: "price", headerName: "Price", width: 200 },
        { field: "actions", headerName: "Actions", width: 200, renderCell: (params)=>{
          return (
            <>
            <Link to={"/product/"+params.row.id}>
             <button className="productlistbuttonedit">Edit</button>
            </Link>
             <DeleteOutline className="productlistbuttondelete" onClick={()=>handleDelete(params.row.id)}/>
            </>
          )
        } },
      ];
  return (
    <div className="productList">
           <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}
