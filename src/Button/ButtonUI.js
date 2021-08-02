import React from 'react'
import { Button, ButtonGroup } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import "./ButtonUI.css";

function ButtonUI() {
    return (
        <div>
            <div>
                <Button onClick={() => alert("Clicked")} variant="contained">
                    Default
                </Button>
                <Button variant="outlined" color="inherit" size="small">
                    Inherit
                </Button>
                <Button variant="contained" color="primary" size="medium">
                    Primary
                </Button>
                <Button variant="text" color="secondary">
                    Secondary
                </Button>
                <Button variant="contained" color="secondary" disabled>
                    Disabled
                </Button>
                <Button variant="outlined" href="#text-buttons" color="primary" size="large">
                    Link
                </Button>
                <Button variant="contained" startIcon={<DeleteIcon />}>
                    Delete
                </Button>
                <Button variant="contained" color="secondary" endIcon={<CloudUploadIcon />}>
                    Send
                </Button>
            </div>
            <div>
                <ButtonGroup variant="contained" className="aaa">
                    <Button className="button">One</Button>
                    <Button className="button">Two</Button>
                    <Button className="button">Three</Button>
                </ButtonGroup>
                <ButtonGroup variant="contained" color="primary" orientation="vertical">
                    <Button>One</Button>
                    <Button>Two</Button>
                    <Button>Three</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default ButtonUI
