import React,{useState} from 'react';
import DatePicker from 'react-native-datepicker';

const FormDatePicker = () =>{
    const [date, setDate] = useState(new Date());

    return(
            <DatePicker
                style={{width: 150},{flex: 1}}
                date={date}                    
                mode="date"
                placeholder="select date"
                format="DD-MM-YYYY"
                minDate="01-01-2020"
                maxDate="01-01-2200"
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                dateTouchBody: {
                    marginTop: 12,
                },
                dateIcon: {
                    position: 'absolute',
                    left: 2,
                    top: 5,
                    marginLeft: 10  
                },
                dateInput: {
                    marginLeft: 50,
                    marginHorizontal:30
                }
                }}
                onDateChange={(date) => {setDate(date)}}
            />    
    );
}

export default FormDatePicker;