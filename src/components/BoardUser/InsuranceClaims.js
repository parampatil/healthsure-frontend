import React, { useState, useEffect } from "react";

import UserService from "../../services/user.service";
import EventBus from "../../common/EventBus";

import "./InsuranceClaims.css";

import { makeStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Avatar,
  Grid,
  Typography,
  TablePagination,
  TableFooter,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    table: {
      minWidth: 650,
    },
    tableContainer: {
      borderRadius: 15,
      margin: "10px 10px",
      // maxWidth: 900,
    },
    tableHeaderCell: {
      fontWeight: "bold",
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.getContrastText(theme.palette.primary.dark),
    },
    avatar: {
      backgroundColor: theme.palette.primary.light,
      color: theme.palette.getContrastText(theme.palette.primary.light),
    },
    name: {
      fontWeight: "bold",
      color: theme.palette.secondary.dark,
    },
    status: {
      fontWeight: "bold",
      fontSize: "0.75rem",
      color: "white",
      backgroundColor: "grey",
      borderRadius: 8,
      padding: "3px 10px",
      display: "inline-block",
    },
  }));
  
  let STATUSES = ["Active", "Pending", "Blocked"];

const InsuranceClaims = () => {
    const [data,  setData] = useState();
    const [loadingStatus, setloadingStatus] = useState(true)

    useEffect(() => {
        UserService.getMedicalRecords()
        .then(
            (response) => {
                setData(addStatus(response.data))
                setloadingStatus(false);
            },
            (error) => {
              const _content =
                (error.response &&
                  error.response.data &&
                  error.response.data.message) ||
                error.message ||
                error.toString();
      
              setData(_content);
      
              if (error.response && error.response.status === 401) {
                EventBus.dispatch("logout");
              }
            }
        );
    }, []);


  const addStatus = (data) => {
    for (let i = 0; i < data.limit; i++) {
      data.users[i] = {
        ...data.users[i],
        status: STATUSES[Math.floor(Math.random() * STATUSES.length)],
      };
    }
    console.log(data)
    return data;
  };

  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div className="insurance-claims">
      <div className="insurance-claims-header">
        <h1 className="insurance-claims-header-title">
            Insurance Claims:
        </h1>
      </div>
      {loadingStatus && <p>Loading...</p>}
      {data && <TableContainer component={Paper} className={classes.tableContainer}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className={classes.tableHeaderCell}>User Info</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Medical Details</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Birth Date</TableCell>
                        <TableCell className={classes.tableHeaderCell}>Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {data.users.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
                    <TableRow key={row.id}>
                    <TableCell>
                        <Grid container spacing={1}>
                            <Grid item lg={2}>
                                <Avatar alt={row.name} src={row.image} className={classes.avatar}/>
                            </Grid>
                            <Grid item lg={10}>
                                <Typography className={classes.name}>{row.firstName}</Typography>
                                <Typography color="textSecondary" variant="body2">{row.email}</Typography>
                                <Typography color="textSecondary" variant="body2">{row.phone}</Typography>
                            </Grid>
                        </Grid>
                        </TableCell>
                    <TableCell>
                        <Typography color="primary" variant="subtitle2">Age: {row.age}</Typography>
                        <Typography color="textSecondary" variant="body2">Height: {row.height}</Typography>
                        <Typography color="textSecondary" variant="body2">Weight: {row.weight}</Typography>
                        </TableCell>
                    <TableCell>{row.birthDate}</TableCell>
                    <TableCell>
                        <Typography 
                            className={classes.status}
                            style={{
                                backgroundColor: 
                                ((row.status === 'Active' && 'green') ||
                                (row.status === 'Pending' && 'blue') ||
                                (row.status === 'Blocked' && 'orange'))
                            }}
                        >{row.status}</Typography>
                    </TableCell>
                    </TableRow>
                ))}
                </TableBody>
                <TableFooter>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 15]}
                    component="div"
                    count={data.limit}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                />
                </TableFooter>
            </Table>
        </TableContainer>}
    </div>
  )
}

export default InsuranceClaims;
