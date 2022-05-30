import React from 'react'
import Button from '@mui/material/Button';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/pages/App.scss';
import { connect } from 'react-redux';
import { TextField } from '@mui/material';
import actionTypes from '../store/user/types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const App = ({ user, users, updateForm, createUser, userDelete, updateUser, isUpdatButtonHide, setUserForm }) => {
  return (
    <div className='header'>
      <div>
        <TextField type="text" label="FirstName" value={user.firstName} onChange={(e) => { updateForm({ key: 'firstName', value: e.target.value }) }} />
      </div>
      <div className='spacing'>
        <TextField type="text" label="LastName" value={user.lastName} onChange={(e) => { updateForm({ key: 'lastName', value: e.target.value }) }} />
      </div>
      <div className='spacing'>
        <TextField type="number" label="PhoneNumber" value={user.phoneNo} onChange={(e) => { updateForm({ key: 'phoneNo', value: e.target.value }) }} />

      </div>
      <div className='spacing'>
        {!isUpdatButtonHide ? (
          <Button variant="outlined" onClick={() => { createUser(user) }}>Create</Button>
        ) : (
          <Button variant="outlined" onClick={() => { setUserForm(user) }}>Update</Button>
        )}
      </div>
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">index</TableCell>
                <TableCell align="right">FirstName</TableCell>
                <TableCell align="right">LastName</TableCell>
                <TableCell align="right">PhoneNumber</TableCell>
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
                  <TableCell align="right"> <DeleteIcon onClick={() => { userDelete(index) }}></DeleteIcon></TableCell>
                  <TableCell align="right"><EditIcon onClick={() => { updateUser(index) }}></EditIcon></TableCell>
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
  return { user: state.userState.userForm, users: state.userState.users, isUpdatButtonHide: state.userState.isUpdatButtonHide };
};
function mapDispatchToProps(dispatch) {
  return ({
    updateForm: ({ key, value }) => {
      dispatch({ type: actionTypes.UPDATE_FORM, key, value })
    },
    createUser: (state) => {
      dispatch({ type: actionTypes.CREATE_USER, user: state })
    },
    userDelete: (index) => {
      dispatch({ type: actionTypes.DELETE_USER, index: index })
    },
    updateUser: (index) => {
      dispatch({ type: actionTypes.UPDATE_USER, index: index })
    },
    setUserForm: () => {
      dispatch({ type: actionTypes.UPDATE_USER_FORM })
    }
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
