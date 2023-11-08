import { FC, ReactElement, useState } from 'react';
import { TextField } from '@mui/material';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import PropTypes from 'prop-types';

const TaskDateField: FC = (props): ReactElement => {

    const [date, setDate] = useState<Date | null>(null);
  return (
    <>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
                label="Task Date"
                inputFormat="MM/dd/yyyy"
                value={date}
                onChange={(newValue) => {
                    setDate(newValue);
                }}
                renderInput={(params) => <TextField {...params} />}
            /></LocalizationProvider>
    
    </>
  )
}

TaskDateField.propTypes = {
  
}

export default TaskDateField