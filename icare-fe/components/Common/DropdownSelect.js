import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select }
    from '@material-ui/core';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

export default function ClaimTypeSelect(props) {
    const { label, optionList } = props;
    const [item, setItem] = React.useState('');

    const handleChange = (event) => {
        setItem(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="select-label">{label}</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    value={item}
                    label={label}
                    onChange={handleChange}
                    MenuProps={MenuProps}
                >
                    {optionList.map((item)=>(
                        <MenuItem key={item} value={item}>{item}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    );
}