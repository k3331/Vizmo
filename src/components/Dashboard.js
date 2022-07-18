import React,{useEffect,useState} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios'
import './Dashboard.css'
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

function Dashboard() {

  const [people,setPeople] = useState([])
  const [filterData,setFilterData]=useState([]);
   const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [q,setQ] =useState('')

  useEffect(()=>{
    axios.get(' https://620dfdda20ac3a4eedcf5a52.mockapi.io/api/employee')
  .then(function (response) {
    // handle success
    console.log(response);
    setPeople(response.data);
     setFilterData(response.data)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })

  },[])

  useEffect(()=>{
    setFilterData(people.filter(person=>person.name.includes(q)))
    console.log('line39',filterData)

  },[q])

  const columns = [
    {
    field: "avatar",
     headerName: "Profile",
      renderCell: (data) => {
          console.log('line47',data)
        return (
          <>
            <Avatar
            variant="rounded"
            style={{ borderRadius: "50%" }}
            src={data.value}

          />      
          </>
        );
      },
    
  },
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Name', width: 130 },
  { field: 'phone', headerName: 'Phone', width: 130 },
  { field: 'email', headerName: 'Email', width: 130 },
  { field: 'country', headerName: 'Country', width: 130 },
  { field: 'department', headerName: 'Department', width: 130 }
];

  return (
     <div className ='Dashboard' style={{  }}>
      <div style ={{display:'flex',justifyContent:'flex-start',width:'55vw',margin:'1rem'}}>
         <div className ='Search'>
        <input className ='Input'
          placeholder='search'
          onChange={(e) => setQ(e.target.value)}
        />
        <SearchIcon style ={{marginLeft:'1vw'}}/>
      </div>
      </div>
     
      <div className='Table'>
         <DataGrid
        rows={filterData}
        columns={columns}
        pageSize={9}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      </div>
     
    </div>
  )
}

export default Dashboard