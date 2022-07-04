import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../styles/pages/App.scss';
import { connect } from 'react-redux';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import actionTypes from '../../store/user/types';
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import ElementInput from "../Core/ElementInput"
import Spinner from 'react-bootstrap/Spinner';
import * as yup from "yup";
import LoadingButton from '@mui/lab/LoadingButton'
import { Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel } from '@mui/material';

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNo: yup.string().required('phoneNo is a required field').matches(/^[0-9]{8,12}$/, 'minimun 8 and maximum 12 number').min(8, 'minimum 8 number required').max(12, 'maximum 12 number required'),
    cricket: yup.boolean().isTrue()
});
 
const CreateUser = ({ user, updateForm, createUser, isUserCreateAndUpdate, setUserForm, isUserGetAndDeleteLoading, isUserCreateAndUpdateLoading, isUserAddDialogVisible, dialogOpenAndClose, cricket, updateCheckbox }) => {

    const { handleSubmit, reset, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <div className='header'>
            <div>
                <h3 data-testid='add-user'>Add User</h3>
            </div>
            <Button variant="outlined" onClick={() => { dialogOpenAndClose(true) }}>Add</Button>
            <Dialog open={isUserAddDialogVisible} onClose={() => {
                dialogOpenAndClose(false)
                reset()
            }}>
                <DialogContent>

                    <div>
                        <Controller
                            name="firstName"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange }, fieldState: { error } }) => (
                                <ElementInput
                                    data-testid='inputFirstName'
                                    error={errors.firstName?.message != null}
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
                            rules={{ required: true }}
                        />
                    </div>

                    <div className='spacing'>
                        <Controller
                            name="lastName"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange }, fieldState: { error } }) => (
                                <ElementInput
                                    error={errors.lastName?.message != null}
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
                            rules={{ required: true }}
                        />

                    </div>

                    <div className='spacing'>
                        <Controller
                            name="phoneNo"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange }, fieldState: { error } }) => (
                                <ElementInput
                                    error={errors.phoneNo?.message != null}
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
                            rules={{ required: true }}
                        />
                    </div>
                </DialogContent>

                <div>
                    <Controller
                        name="cricket"
                        control={control}
                        defaultValue=""
                        render={({ field: { onChange }, fieldState: { error } }) => (
                            <FormControl
                                required
                                error={errors.cricket?.message != null}
                                component="fieldset"
                                sx={{ m: 3 }}
                                variant="standard"
                            >
                                <FormLabel component="legend">Select Your Hobbies</FormLabel>
                                <FormGroup>
                                    <FormControlLabel
                                        control={
                                            <Checkbox checked={cricket} onChange={(e) => {
                                                onChange(e)
                                                updateCheckbox(e.target.checked)
                                            }} name="Cricket" />
                                        }
                                        label="Cricket"
                                    />
                                </FormGroup>
                                <FormHelperText>{errors.cricket?.message}</FormHelperText>

                            </FormControl>
                        )}
                        rules={{ required: 'Please Select Option' }}
                    />

                </div>


                <DialogActions>
                    <div className='spacing'>
                        {!isUserCreateAndUpdate ? (
                            <LoadingButton loading={isUserCreateAndUpdateLoading} variant="outlined" onClick={handleSubmit(() => {
                                createUser()
                                reset()
                            })}>Create
                            </LoadingButton>
                        ) : (
                            <LoadingButton loading={isUserCreateAndUpdateLoading} variant="outlined" onClick={() => { setUserForm(user) }}>Update</LoadingButton>
                        )}
                    </div>
                </DialogActions>
            </Dialog>
            <div>
                {!isUserGetAndDeleteLoading ? '' : <Spinner animation='border' variant="primary" />}
            </div>
        </div >
    )
}

const mapStateToProps = (state) => {
    return { user: state.userState.userForm, isUserCreateAndUpdate: state.userState.isUserCreateAndUpdate, isUserGetAndDeleteLoading: state.userState.isUserGetAndDeleteLoading, isUserCreateAndUpdateLoading: state.userState.isUserCreateAndUpdateLoading, isUserAddDialogVisible: state.userState.isUserAddDialogVisible, cricket: state.userState.cricket };
};
function mapDispatchToProps(dispatch) {
    return ({
        updateForm: ({ key, value }) => {
            dispatch({ type: actionTypes.UPDATE_FORM, key, value })
        },
        createUser: () => {
            dispatch({ type: actionTypes.CREATE_USER })
        },
        setUserForm: (user) => {
            dispatch({ type: actionTypes.UPDATE_USER_FORM, user: user })
        },
        dialogOpenAndClose: (dialog) => {
            dispatch({ type: actionTypes.IS_DIALOG_OPEN_AND_CLOSE, dialog })
        },
        updateCheckbox: (value) => {
            dispatch({ type: actionTypes.IS_SELECT_CHECKBOX, value })
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
