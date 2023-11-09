import { FC, ReactElement } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import PropTypes from 'prop-types';
import { IDateField } from './interfaces/IDateField';

const TaskDateField: FC<IDateField> = (props): ReactElement => {

    
    const { value = new Date(), onChange = (date) => console.log(date),
     disabled = false} = props;

  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Task Date"
                format="MM/dd/yyyy"
                value={value}
                disabled={disabled}
                onChange={onChange}
                renderInput={(params) => <TextField {...params} />}
            /></LocalizationProvider>
    
    </>
  )
}

TaskDateField.propTypes = {
    value: PropTypes.instanceOf(Date),
    onChange: PropTypes.func,
    disabled: PropTypes.bool
  
}

export default TaskDateField