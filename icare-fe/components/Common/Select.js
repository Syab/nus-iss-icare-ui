import React from 'react'
import { FormControl, TextField, InputLabel, Select as MuiSelect, MenuItem, FormHelperText } from '@material-ui/core';

export default function Select(props) {

    const { name, label, value,error=null, onChange, options } = props;

    return (
        <FormControl fullWidth>
            <TextField
                variant="outlined"
                select
                fullWidth
                label={label}
                name={name}
                value={value}
                onChange={onChange}
                {...(error && {error:true,helperText:error})}
            >
                <MenuItem value="">None</MenuItem>
                {
                    options.map(
                        item => (<MenuItem key={item} value={item}>
                            {item}
                        </MenuItem>)

                    )
                }
            </TextField>
            {/*{error && <FormHelperText>{error}</FormHelperText>}*/}
        </FormControl>
    )
}