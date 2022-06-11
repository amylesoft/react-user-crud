import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/pages/App.scss';
import { connect } from 'react-redux';
// import { FormControl, FormControlLabel, FormHelperText, FormLabel, InputLabel, MenuItem, RadioGroup, Select, Radio, FormGroup, Checkbox,LoadingButton } from '@mui/material';
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
import LoadingButton from '@mui/material/Button'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import ElementInput from "../components/ElementInput"
import Spinner from 'react-bootstrap/Spinner';
import * as yup from "yup";

const schema = yup.object({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  phoneNo: yup.number().positive().integer().required(),
  // age: yup.string().required(),
  // hobbies: yup.string().required(),
  // selectHobby: yup.boolean().required(),
}).required();

const App = ({ user, users, age, updateForm, createUser, userDelete, updateUser, isUpdatButtonHide, setUserForm, getUsers, updateAge, hobbies, isLoadingForApi }) => {

  useEffect(() => {
    getUsers()
  }, [])

  const { handleSubmit, reset, formState: { errors }, control } = useForm({
    resolver: yupResolver(schema)
  });

  let state = {
    hasFirstNameError: errors.firstName?.message != null,
    hasLastNameError: errors.lastName?.message != null,
    hasPhoneNoError: errors.phoneNo?.message != null,
    // hasAgeError: errors.age?.message != null,
    // hasRadioError: errors.hobbies?.message != null,
    // hasCheckBoxError: errors.selectHobby?.message != null,
  }
  console.log(isLoadingForApi);
  return (
    <div className='header'>

      <div>
        {!isLoadingForApi ? '' : <Spinner animation='border' variant="primary" />}

        <Controller
          name="firstName"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <ElementInput
              error={state.hasFirstNameError}
              helperText={errors.firstName?.message}
              name='firstName'
              type="text"
              label="FirstName"
              value={user.firstName}
              handleChange={(e) => {
                onChange(e)
                updateForm({ key: 'firstName', value: e.target.value })
              }}></ElementInput>
          )}
          rules={{ required: 'First name required' }}
        />
      </div>
      <div className='spacing'>
        <Controller
          name="lastName"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <ElementInput
              error={state.hasLastNameError}
              helperText={errors.lastName?.message}
              name='lastName'
              type="text"
              label="LastName"
              value={user.lastName}
              handleChange={(e) => {
                onChange(e)
                updateForm({ key: 'lastName', value: e.target.value })
              }}></ElementInput>
          )}
          rules={{ required: 'Last name required' }}
        />

      </div>

      <div className='spacing'>
        <Controller
          name="phoneNo"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <ElementInput
              error={state.hasPhoneNoError}
              helperText={errors.phoneNo?.message}
              name='phoneNo'
              type="number"
              label="PhoneNo"
              value={user.phoneNo}
              handleChange={(e) => {
                onChange(e)
                updateForm({ key: 'phoneNo', value: e.target.value })
              }}></ElementInput>
          )}
          rules={{ required: 'phoneNo required' }}
        />

      </div>

      {/* <div className='spacing'>
        <Controller
          name="age"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <FormControl sx={{ m: 1, minWidth: 120 }} error={state.hasAgeError}>
              <InputLabel id="demo-simple-select-error-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={(e) => {
                  onChange(e)
                  updateAge(e.target.value)
                }}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
              <FormHelperText>{errors.age?.message}</FormHelperText>
            </FormControl>
          )}
          rules={{ required: 'Age required' }}
        />
      </div> */}

      {/* <div className='spacing'>
        <Controller
          name="radio"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <FormControl sx={{ m: 3 }} error={state.hasRadioError} variant="standard">
              <FormLabel id="demo-error-radios">Choose Your Hobby</FormLabel>
              <RadioGroup
                aria-labelledby="demo-error-radios"
                name="quiz"
                value={hobbies}
                onChange={(e) => {
                  onChange(e)
                  updateRadio(e.target.value)
                }}
              >
                <FormControlLabel value="cricket" control={<Radio />} label="Cricket" />
                <FormControlLabel value="football" control={<Radio />} label="Football" />
                <FormControlLabel value="tennis" control={<Radio />} label="Tennis" />
              </RadioGroup>
              <FormHelperText>{errors.hobbies?.message}</FormHelperText>
            </FormControl>
          )}
          rules={{ required: 'Please Select One' }}
        />
      </div>

      <div className='spacing'>
        <Controller
          name="checkBox"
          control={control}
          defaultValue=""
          render={({ field: { onChange }, fieldState: { error } }) => (
            <FormControl
              required
              error={state.hasCheckBoxError}
              component="fieldset"
              sx={{ m: 3 }}
              variant="standard"
            >
              <FormLabel component="legend">Select Your Hobbies</FormLabel>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox checked={selectHobby.cricket} onChange={(e) => {
                      onChange(e)
                      updateCheckbox({ key: 'cricket', value: e.target.checked })
                    }} name="Cricket" />
                  }
                  label="Cricket"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={selectHobby.football} onChange={(e) => {
                      onChange(e)
                      updateCheckbox({ key: 'football', value: e.target.checked })
                    }} name="football" />
                  }
                  label="Football"
                />
                <FormControlLabel
                  control={
                    <Checkbox checked={selectHobby.tennis} onChange={(e) => {
                      onChange(e)
                      updateCheckbox({ key: 'tennis', value: e.target.checked })
                    }} name="Tennis" />
                  }
                  label="Tennis"
                />
              </FormGroup>
              <FormHelperText>{errors.selectHobby?.message}</FormHelperText>
            </FormControl>
          )}
          rules={{ required: 'Please Select Option' }}
        />
      </div> */}

      <div className='spacing'>
        {!isUpdatButtonHide ? (

          <LoadingButton loading={isLoadingForApi} variant="outlined" onClick={handleSubmit(() => {
            createUser()
            reset()
          })}>Create
          </LoadingButton>
        ) : (
          <LoadingButton loading={isLoadingForApi} variant="outlined" onClick={() => { setUserForm(user) }}>Update</LoadingButton>
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
                  <TableCell align="right"> <DeleteIcon onClick={() => { userDelete(index, users._id) }}></DeleteIcon></TableCell>
                  <TableCell align="right"><EditIcon onClick={() => { updateUser(index, users) }}></EditIcon></TableCell>
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
  return { user: state.userState.userForm, users: state.userState.users, isUpdatButtonHide: state.userState.isUpdatButtonHide, age: state.userState.age, hobbies: state.userState.hobbies, selectHobby: state.userState.userCheck, isLoadingForApi: state.userState.isLoadingForApi };
};
function mapDispatchToProps(dispatch) {
  return ({
    updateForm: ({ key, value }) => {
      dispatch({ type: actionTypes.UPDATE_FORM, key, value })
    },
    createUser: () => {
      dispatch({ type: actionTypes.CREATE_USER })
    },
    userDelete: (index, id) => {
      dispatch({ type: actionTypes.DELETE_USER, index: index, id: id })
    },
    updateUser: (index, users) => {
      dispatch({ type: actionTypes.UPDATE_USER, index: index, user: users })
    },
    setUserForm: (user) => {
      dispatch({ type: actionTypes.UPDATE_USER_FORM, user: user })
    },
    getUsers: () => {
      dispatch({ type: actionTypes.GET_USER })
    },
    updateAge: (value) => {
      dispatch({ type: actionTypes.UPDATE_AGE, value })
    },
    // updateRadio: (value) => {
    //   dispatch({ type: actionTypes.SELECT_RADIO, value })
    // },
    // updateCheckbox: ({ key, value }) => {
    //   dispatch({ type: actionTypes.SELECT_CHECKBOX, key, value })
    // }
  })
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
