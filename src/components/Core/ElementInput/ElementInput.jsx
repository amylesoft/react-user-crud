import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../../../styles/pages/App.scss';
import { TextField } from '@mui/material';

const ElementInput = (props) => {

    return (
        <div>
            <TextField
                name={props.name}
                error={props.error}
                helperText={props.helperText}
                type={props.type}
                label={props.label}
                value={props.value}
                onChange={(e) => props.handleChange(e)} />
        </div>
    )
}
export default ElementInput;