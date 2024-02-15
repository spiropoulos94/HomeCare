import PropTypes from 'prop-types';
import { Switch } from '@mui/material';

const FormikCustomSwitchField = ({ form, field, readOnly = false }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <>
      <Switch
        onChange={(newValue) => {
          setFieldValue(name, newValue?.target?.checked);
        }}
        disabled={readOnly}
        checked={value}
      />
    </>
  );
};

export default FormikCustomSwitchField;

FormikCustomSwitchField.propTypes = {
  children: PropTypes.any,
  form: PropTypes.object,
  field: PropTypes.object,
  readOnly: PropTypes.bool
};
