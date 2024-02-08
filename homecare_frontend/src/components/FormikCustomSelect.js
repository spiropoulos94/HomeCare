import { Select } from '@mui/material';
import PropTypes from 'prop-types';

const FormikCustomSelect = ({ children, form, field, readOnly = false }) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <Select
      sx={{ border: 1, width: '100%' }}
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

export default FormikCustomSelect;

FormikCustomSelect.propTypes = {
  children: PropTypes.any,
  form: PropTypes.object,
  field: PropTypes.object,
  readOnly: PropTypes.bool
};
