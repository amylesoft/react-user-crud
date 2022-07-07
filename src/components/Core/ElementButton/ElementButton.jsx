import React from 'react'
import { Button } from '@mui/material';

const ElementButton = ({...props}) => {
    return (
        <div>
            <Button {...props} variant="outlined">Button</Button>
            <h1>Everything is perfect. Your account is ready and we should probably get you started!</h1>
        </div>
    )
}
export default ElementButton;