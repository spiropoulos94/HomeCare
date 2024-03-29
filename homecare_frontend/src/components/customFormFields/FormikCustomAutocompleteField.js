import PropTypes from 'prop-types';
import Autocomplete from '@mui/material/Autocomplete';
import { TextField } from '@mui/material';

const FormikCustomAutocompleteField = ({
  options = [],
  form,
  field,
  readOnly = false,
  disabled = false,
  placeholder = 'Placeholder..'
}) => {
  const { name, value } = field;
  const { setFieldValue } = form;

  return (
    <>
      <Autocomplete
        onChange={(e, newValue) => setFieldValue(name, newValue)}
        readOnly={readOnly}
        disabled={disabled}
        value={value}
        multiple
        id="tags-standard"
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} variant="outlined" size="small" placeholder={placeholder} />}
      />
    </>
  );
};

export default FormikCustomAutocompleteField;

FormikCustomAutocompleteField.propTypes = {
  children: PropTypes.any,
  form: PropTypes.object,
  field: PropTypes.object,
  readOnly: PropTypes.bool,
  disabled: PropTypes.bool,
  options: PropTypes.array,
  placeholder: PropTypes.string
};
