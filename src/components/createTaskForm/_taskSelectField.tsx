import { FC, ReactElement } from 'react';
import { ISelectField } from './interfaces/ISelectField';
import {
	Select,
	FormControl,
	InputLabel,
	MenuItem,
	SelectChangeEvent,
} from '@mui/material';

const TaskSelectField: FC<ISelectField> = (props): ReactElement => {

    const { name = 'selectBox', 
            label = 'Select Box', 
            value = '', 
            onChange = (e) => {console.log(e);
            }, 
            items = [{value: '', label: 'Add Items'}], 
            disabled = false } = props;
	return (
    <FormControl fullWidth size="small">
        <InputLabel id={`${name}-id`}>{label}</InputLabel>
        <Select 
            labelId={`${name}-id`}
            label={label}
            id={`${name}-id-select`}
            name={name}
            value={value}
            onChange={onChange}
            disabled={disabled}
        >
            {
                items.map((item, index) => {
                    return <MenuItem key={item.value + index} value={item.value}>{item.label}</MenuItem>
                })
            }
            
        </Select>
        
    </FormControl>
    );
};

export default TaskSelectField;
