import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { getAllSubmissions } from "../services/SubmissionService";
import { CircularProgress } from "@mui/material";

// Due to shortest of time implementing this code language as static data otherwise this language come from jugde0 getLanguages api
const codingLanguages = {
  93: "JavaScript",
  92: "Python",
  52: "C++",
};
const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "username", headerName: "Username", width: 130 },
  { field: "preferredCodeLanguage", headerName: "Language", width: 130 },
  {
    field: "sourceCode",
    headerName: "Source Code",
    width: 300,
  },
  {
    field: "stdout",
    headerName: "Stdout",
    width: 250,
    // valueGetter: (value, row) => `${row.firstName || ''} ${row.lastName || ''}`,
  },
  {
    field: "standardInput",
    headerName: "Stdin",
    width: 200,
  },
  {
    field: "sourceCodeTimestamp",
    headerName: "Timestamp",
    width: 200,
  },
];

export default function DataTable() {
  const [rows, setRows] = React.useState([]);
  const [isLoading,setIsLoading] = React.useState(false)
  const getAllSubmissionData = async () => {
    setIsLoading(true)
    const result = await getAllSubmissions();
    setIsLoading(false)
    console.log(result);
    if (result.success === true) {
      const data = result.data;
      const sub = data?.submissions.map((s) => {
        return {
          ...s,
          preferredCodeLanguage: codingLanguages[s["preferredCodeLanguage"]],
        };
      });
      console.log(sub);
      setRows(sub);
    }
  };
  React.useEffect(() => {
    getAllSubmissionData();
  }, []);
  return (
    <div style={{ height: 400, width: "100%",display:"flex",alignItems:"center",justifyContent:"center" }}>
      {isLoading ? <CircularProgress/>:<DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />}
    </div>
  );
}
