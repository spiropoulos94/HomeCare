import { Grid, InputLabel, OutlinedInput, Stack, FormHelperText, MenuItem } from '@mui/material';
import FormikCustomSelectField from 'components/customFormFields/FormikCustomSelectField';
import { professions } from 'constants/professions';
import { Field } from 'formik';

const ProfessionalSection = ({ values, touched, errors, handleBlur, handleChange, isReadOnly }) => {
  return (
    <>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="professional-Fullname-signup">Professional&apos;s Name*</InputLabel>
          <OutlinedInput
            readOnly={isReadOnly}
            id="professionalFullname"
            type="professionalFullname"
            value={values.professionalFullname}
            name="professionalFullname"
            onBlur={handleBlur}
            onChange={handleChange}
            placeholder="John"
            fullWidth
            error={Boolean(touched.professionalFullname && errors.professionalFullname)}
          />
          {touched.professionalFullname && errors.professionalFullname && (
            <FormHelperText error id="helper-text-professionalFullname-signup">
              {errors.professionalFullname}
            </FormHelperText>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="report-profession">Profession</InputLabel>
          <Field name="profession" component={(props) => <FormikCustomSelectField {...props} readOnly={isReadOnly} />}>
            {professions.map(({ value, label }) => (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            ))}
          </Field>
          {touched.profession && errors.profession && (
            <FormHelperText error id="report-profession">
              {errors.profession}
            </FormHelperText>
          )}
        </Stack>
      </Grid>
    </>
  );
};

export default ProfessionalSection;
