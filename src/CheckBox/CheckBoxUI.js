import { Checkbox, FormControlLabel } from '@material-ui/core';
import React, { useState } from 'react';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import "./CheckBoxUI.css";
import imgA from "../img/0.jpg";

function CheckBoxUI() {
    const [checked, setChecked] = useState(false);

    const handleCheck = (event) => {
        const {
            target: { checked }
        } = event;
        setChecked(checked);
    }

    return (
        <div>
            <FormControlLabel
                control={<Checkbox checked={checked} onChange={handleCheck} icon={<FavoriteBorder className="checkBox" />} checkedIcon={<Favorite className="checkBox" />} />}
            />
            <img className={!checked && "hidden"} src={imgA} />
        </div>
    )
}

export default CheckBoxUI
