import PropTypes from 'prop-types';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const FormikCustomTimepickerField = ({ form, field, readOnly = false, disabled = false }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <>
      <TimePicker
        readOnly={readOnly}
        ampm={false}
        value={value}
        onChange={(newValue) => {
          setFieldValue(name, newValue);
        }}
        disabled={disabled}
      />
    </>
  );
};

export default FormikCustomTimepickerField;

FormikCustomTimepickerField.propTypes = {
  children: PropTypes.any,
  form: PropTypes.object,
  field: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool
};
