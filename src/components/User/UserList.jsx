import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/pages/App.scss';
import { connect } from 'react-redux';
import actionTypes from '../../store/user/types';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const UserList = ({ users, userDelete, updateUser, getUsers }) => {

    useEffect(() => {
        getUsers()
    }, [])

    return (
        <div className='header'>
            <div>
                <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="right">index</TableCell>
                                <TableCell align="right">FirstName</TableCell>
                                <TableCell align="right">LastName</TableCell>
                                <TableCell align="right">PhoneNumber</TableCell>
                                <TableCell align="right">Edit</TableCell>
                                <TableCell align="right">Delete</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {users.map((users, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="right">{index}</TableCell>
                                    <TableCell align="right">{users.firstName}</TableCell>
                                    <TableCell align="right">{users.lastName}</TableCell>
                                    <TableCell align="right">{users.phoneNo}</TableCell>
                                    <TableCell align="right"><EditIcon onClick={() => { updateUser(index, users) }}></EditIcon></TableCell>
                                    <TableCell align="right"> <DeleteIcon onClick={() => { userDelete(index, users._id) }}></DeleteIcon></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>

        </div>
    )
}

const mapStateToProps = (state) => {
    return { users: state.userState.users };
};
function mapDispatchToProps(dispatch) {
    return ({
        userDelete: (index, id) => {
            dispatch({ type: actionTypes.DELETE_USER, index: index, id: id })
        },
        updateUser: (index, users) => {
            dispatch({ type: actionTypes.UPDATE_USER, index: index, user: users })
        },
        getUsers: () => {
            dispatch({ type: actionTypes.GET_USER })
        },
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);