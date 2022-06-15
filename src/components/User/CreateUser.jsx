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
import { Button } from '@mui/material';

const schema = yup.object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    phoneNo: yup.number().positive().integer().required(),
}).required();

const CreateUser = ({ user, updateForm, createUser, isUserCreateAndUpdate, setUserForm, isUserGetAndDeleteLoading, isUserCreateAndUpdateLoading, isUserAddDialogVisible, dialogOpenAndClose }) => {


    const { handleSubmit, reset, formState: { errors }, control } = useForm({
        resolver: yupResolver(schema)
    });

    return (
        <div className='header'>

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
                            rules={{ required: 'phoneNo required' }}
                        />

                    </div>
                </DialogContent>
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
        </div>
    )
}

const mapStateToProps = (state) => {
    return { user: state.userState.userForm, isUserCreateAndUpdate: state.userState.isUserCreateAndUpdate, isUserGetAndDeleteLoading: state.userState.isUserGetAndDeleteLoading, isUserCreateAndUpdateLoading: state.userState.isUserCreateAndUpdateLoading, isUserAddDialogVisible: state.userState.isUserAddDialogVisible };
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
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
