import { Select } from '@mui/material';
import PropTypes from 'prop-types';

const FormikCustomSelectField = ({ children, form, field, readOnly = false }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <Select
      sx={{ width: '100%', mt: (theme) => theme.spacing(1) }}
      name={name}
      value={value}
      onChange={(e) => {
        setFieldValue(name, e.target.value);
      }}
      readOnly={readOnly}
      inputProps={readOnly ? { IconComponent: () => null } : {}}
    >
      {children}
    </Select>
  );
};

export default FormikCustomSelectField;

FormikCustomSelectField.propTypes = {
  children: PropTypes.any,
  form: PropTypes.object,
  field: PropTypes.object,
  readOnly: PropTypes.bool
};
