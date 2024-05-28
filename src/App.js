import React from "react";
import axios from "axios";
import "./App.css";
import { Box, CircularProgress, Typography } from "@mui/material";
import { fakeData } from "./util/FakeData";

function App() {
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 3000);
    }, []);

    // id, name, username, email, city, dan website
    const columns = [
        { field: "id", headerName: "ID", width: 40 },
        { field: "name", headerName: "Name", width: 100 },
        { field: "username", headerName: "Username", width: 100 },
        { field: "email", headerName: "Email", width: 100 },
        { field: "city", headerName: "City", width: 100 },
        { field: "website", headerName: "Website", width: 100 },
    ];

    return (
        <div className="App">
            {isLoading == false ? (
                <div>test</div>
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
    );
}

export default App;
