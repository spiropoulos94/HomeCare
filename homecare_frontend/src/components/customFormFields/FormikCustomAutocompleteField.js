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

  console.log({ name, value, setFieldValue, options });

  return (
    <>
      <Autocomplete
        readOnly={readOnly}
        disabled={disabled}
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
