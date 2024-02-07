import { Select } from '@mui/material';
import PropTypes from 'prop-types';

const FormikCustomSelect = ({ children, form, field }) => {
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
    >
      {children}
    </Select>
  );
};

export default FormikCustomSelect;

FormikCustomSelect.propTypes = {
  children: PropTypes.any,
  form: PropTypes.object,
  field: PropTypes.object
};
