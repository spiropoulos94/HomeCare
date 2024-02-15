import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

dayjs.extend(customParseFormat);

const dateTimeFormat = 'DD-MM-YYYY HH:mm:ss';
const dateFormat = 'DD-MM-YYYY';
const timeFormat = 'HH:mm:ss';

// receives string in format 'DD-MM-YYYY HH:mm:ss'
export const stringToDayJSObject = (dateString) => {
  return dayjs(`${dateString}`, dateTimeFormat);
};

// convert dateObj to string
export const dayjsGetString = (dateObj) => {
  return dateObj.format(dateTimeFormat);
};

// convert dateObj to separate props of date and time
export const dayjsGetTimeAndDate = (dateObj) => {
  return {
    date: dateObj.format(dateFormat),
    time: dateObj.format(timeFormat)
  };
};
