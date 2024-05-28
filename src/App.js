import React from "react";
import axios from "axios";
import "./App.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { fakeData } from "./util/FakeData";

function App() {
    const [isLoading, setIsLoading] = React.useState(true);
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = () => {
            axios({
                url: "https://jsonplaceholder.typicode.com/users",
                method: "GET",
            }).then((res) => {
                try {
                    if (res.data) {
                        setTimeout(() => {
                            setIsLoading(false);
                            setData(res.data);
                        }, 3000);
                    }
                } catch (error) {
                    console.log("error");
                }
            });
        };

        fetchData();
    }, []);

    // id, name, username, email, city, dan website
    const columns = [
        { field: "id", headerName: "ID", width: 40 },
        { field: "name", headerName: "Name", width: 200 },
        { field: "username", headerName: "Username", width: 200 },
        { field: "email", headerName: "Email", width: 150 },
        {
            field: "address",
            headerName: "City",
            width: 100,
            valueGetter: (params) => params.city,
        },
        { field: "website", headerName: "Website", width: 200 },
    ];

    return (
        <div className="App">
            <div className="layout">
                {isLoading === false ? (
                    <Box
                        sx={{
                            width: "60%",
                            height: "500px",
                        }}
                    >
                        <DataGrid
                            className="row"
                            sx={{
                                "& .MuiDataGrid-scrollbarFiller": {
                                    backgroundColor: "#DCD7C9",
                                },
                                "& .MuiDataGrid-filler": {
                                    backgroundColor: "#DCD7C9",
                                },
                                "& .MuiDataGrid-columnHeader": {
                                    backgroundColor: "#DCD7C9",
                                    fontSize: "1rem",
                                },
                                "& .MuiDataGrid-footerContainer": {
                                    backgroundColor: "#DCD7C9",
                                    fontSize: "1rem",
                                },
                            }}
                            columns={columns}
                            rows={data}
                        />
                    </Box>
                ) : (
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            flexDirection: "column",
                            height: "70vh",
                        }}
                    >
                        <CircularProgress color="primary" size={80} />
                        <br />
                        <br />
                        <Typography
                            style={{
                                fontSize: 30,
                                color: "#fff",
                            }}
                        >
                            Please wait while fetching a new data
                        </Typography>
                    </Box>
                )}
            </div>
        </div>
    );
}

export default App;
