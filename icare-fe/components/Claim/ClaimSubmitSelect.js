import * as React from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select }
    from '@material-ui/core';

export default function ClaimTypeSelect() {
    const [policyProvider, setPolicyProvider] = React.useState('');

    const handleChange = (event) => {
        setPolicyProvider(event.target.value);
    };

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl variant="outlined" fullWidth>
                <InputLabel id="select-label">Policy Type</InputLabel>
                <Select
                    labelId="select-label"
                    id="simple-select"
                    value={policyProvider}
                    label="Policy Provider"
                    onChange={handleChange}
                >
                    <MenuItem value={10}>AXA</MenuItem>
                    <MenuItem value={20}>Tokio Marine</MenuItem>
                    <MenuItem value={30}>Manulife</MenuItem>
                </Select>
            </FormControl>
        </Box>
    );
}