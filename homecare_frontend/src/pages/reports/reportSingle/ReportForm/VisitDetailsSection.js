import { Grid, InputLabel, Stack, FormHelperText, MenuItem } from '@mui/material';
import FormikCustomAutocompleteField from 'components/customFormFields/FormikCustomAutocompleteField';
import FormikCustomSwitchField from 'components/customFormFields/FormikCustomSwitchField';
import FormikCustomTimepickerField from 'components/customFormFields/FormikCustomTimePickerField';
import { professions } from 'constants/professions';
import { Field } from 'formik';

const VisitDetailsSection = ({ values, touched, errors, isReadOnly }) => {
  const getAvailableServices = (professionVal) => {
    if (!professionVal) {
      return [];
    }
    let profession = professions.filter((p) => p.value === professionVal || p.label === professionVal)[0];
    return profession.services;
  };
  return (
    <>
      <Grid display={'flex'} justifyContent={'start'} item xs={12}>
        <Stack spacing={1} direction={'row'} alignItems={'center'}>
          {!isReadOnly && (
            <Field name="isPresent" component={FormikCustomSwitchField}>
              {professions.map(({ value, label }) => (
                <MenuItem key={value} value={value}>
                  {label}
                </MenuItem>
              ))}
            </Field>
          )}
          <InputLabel htmlFor="report-isPresent">Patient was{values.isPresent ? '' : ' not'} at home </InputLabel>

          {touched.isPresent && errors.isPresent && (
            <FormHelperText error id="report-isPresent">
              {errors.isPresent}
            </FormHelperText>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="report-arrivalTime" sx={{ textDecoration: values.isPresent ? '' : 'line-through' }}>
            Arrival Time{' '}
          </InputLabel>
          <Field
            name="arrivalTime"
            component={(props) => <FormikCustomTimepickerField disabled={Boolean(!values.isPresent)} readOnly={isReadOnly} {...props} />}
          ></Field>
          {touched.arrivalTime && errors.arrivalTime && (
            <FormHelperText error id="report-arrivalTime">
              {errors.arrivalTime}
            </FormHelperText>
          )}
        </Stack>
      </Grid>
      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="report-departureTime" sx={{ textDecoration: values.isPresent ? '' : 'line-through' }}>
            Departure Time{' '}
          </InputLabel>
          <Field
            name="departureTime"
            component={(props) => <FormikCustomTimepickerField disabled={Boolean(!values.isPresent)} readOnly={isReadOnly} {...props} />}
          ></Field>
          {touched.departureTime && errors.departureTime && (
            <FormHelperText error id="report-departureTime">
              {errors.departureTime}
            </FormHelperText>
          )}
        </Stack>
      </Grid>

      <Grid item xs={12} md={6}>
        <Stack spacing={1}>
          <InputLabel htmlFor="report-deliveredServices" sx={{ textDecoration: values.isPresent ? '' : 'line-through' }}>
            Delivered Services{' '}
          </InputLabel>
          <Field
            name="deliveredServices"
            component={(props) => (
              <FormikCustomAutocompleteField
                options={getAvailableServices(values.profession) || []}
                placeholder="What was done during the visit"
                disabled={Boolean(!values.isPresent)}
                {...props}
              />
            )}
          ></Field>
          {touched.deliveredServices && errors.deliveredServices && (
            <FormHelperText error id="report-deliveredServices">
              {errors.deliveredServices}
            </FormHelperText>
          )}
        </Stack>
      </Grid>
    </>
  );
};

export default VisitDetailsSection;
