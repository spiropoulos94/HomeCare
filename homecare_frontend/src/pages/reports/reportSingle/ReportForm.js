// material-ui
import { Button, Divider, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

import PropTypes from 'prop-types';
import { useState } from 'react';
import FormikCustomSelect from 'components/customFormFields/FormikCustomSelectField';
import { professions } from 'constants/professions';
import FormikCustomTimepickerField from 'components/customFormFields/FormikCustomTimePickerField';

// ============================|| PATIENT - FORM ||============================ //

const ReportForm = ({ reportData = {} }) => {
  console.log({ reportData });

  const [disableEdit] = useState(false);

  return (
    <>
      <Formik
        initialValues={{
          professionalFullname: '',
          profession: '',
          patientFirstname: '',
          patientLastname: '',
          patientAMKA: '',
          patientHealthSecurityNumber: '',
          patientAddressStreet: '',
          patientAddressNumber: '',
          arrivalTime: undefined,
          departureTime: undefined,
          deliveredServices: [],
          absenceStatus: '',

          submit: null
        }}
        validationSchema={Yup.object().shape({
          professionalFullname: Yup.string().max(255).required('Professional Full Name is required'),
          profession: Yup.string().max(255).required('Profession is required'),
          patientFirstname: Yup.string().max(255).required(' Name is required'),
          patientLastname: Yup.string().max(255).required(' Lastname is required'),
          patientAMKA: Yup.string()
            .matches(/^[0-9]+$/, 'AMKA must be only numbers')
            .min(11, 'AMKA must be exactly 11 digits')
            .max(11, 'AMKA must be exactly 11 digits')
            .required('AMKA is required'),
          patientHealthSecurityNumber: Yup.string()
            .matches(/^[0-9]+$/, 'AMKA must be only numbers')
            .min(11, 'Health Security Number must be exactly 11 digits')
            .max(11, 'Health Security Number must be exactly 11 digits')
            .required('Health Security Number is required'),
          patientAddressStreet: Yup.string()

            .max(255)
            .required('Street is required'),
          patientAddressNumber: Yup.string()
            .matches(/^[0-9]+$/, 'Number must be only numbers')
            .min(1, 'Min value is 1')
            .max(9999, 'Max value is 9999')
            .required('Number is required'),
          arrivalTime: Yup.date()
            .max(Yup.ref('departureTime'), 'Arrival Time must be before Departure Time')
            .required('Arrival Time is required'),
          departureTime: Yup.date()
            .min(Yup.ref('arrivalTime'), 'Arrival Time must be after Departure Time')
            .required('Departure Time is required'),
          deliveredServices: '',
          absenceStatus: ''
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log('Report form values', { values });
          try {
            setStatus({ success: false });
            setSubmitting(false);
          } catch (err) {
            console.error(err);
            setStatus({ success: false });
            setErrors({ submit: err.message });
            setSubmitting(false);
          }
        }}
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Divider>Professional</Divider>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="professional-Fullname-signup">Professional&apos;s Name*</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
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
                  <Field name="profession" component={FormikCustomSelect}>
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

              <Grid item xs={12}>
                <Divider>Patient </Divider>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patientFirstname"> Name</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="patientFirstname"
                    type="patientFirstname"
                    value={values.patientFirstname}
                    name="patientFirstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.patientFirstname && errors.patientFirstname)}
                  />
                  {touched.patientFirstname && errors.patientFirstname && (
                    <FormHelperText error id="helper-text-patientFirstname">
                      {errors.patientFirstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patientLastname"> Lastname</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="patientLastname"
                    type="patientLastname"
                    value={values.patientLastname}
                    name="patientLastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.patientLastname && errors.patientLastname)}
                  />
                  {touched.patientLastname && errors.patientLastname && (
                    <FormHelperText error id="helper-text-patientLastname">
                      {errors.patientLastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patientAMKA">AMKA</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="patientAMKA"
                    type="patientAMKA"
                    value={values.patientAMKA}
                    name="patientAMKA"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.patientAMKA && errors.patientAMKA)}
                  />
                  {touched.patientAMKA && errors.patientAMKA && (
                    <FormHelperText error id="helper-text-patientAMKA">
                      {errors.patientAMKA}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patientHealthSecurityNumber">Health Security Number</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="patientHealthSecurityNumber"
                    type="patientHealthSecurityNumber"
                    value={values.patientHealthSecurityNumber}
                    name="patientHealthSecurityNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.patientHealthSecurityNumber && errors.patientHealthSecurityNumber)}
                  />
                  {touched.patientHealthSecurityNumber && errors.patientHealthSecurityNumber && (
                    <FormHelperText error id="helper-text-patientHealthSecurityNumber">
                      {errors.patientHealthSecurityNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patientAddressStreet">Street</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="patientAddressStreet"
                    type="patientAddressStreet"
                    value={values.patientAddressStreet}
                    name="patientAddressStreet"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.patientAddressStreet && errors.patientAddressStreet)}
                  />
                  {touched.patientAddressStreet && errors.patientAddressStreet && (
                    <FormHelperText error id="helper-text-patientAddressStreet">
                      {errors.patientAddressStreet}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patientAddressNumber">Number</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="patientAddressNumber"
                    type="patientAddressNumber"
                    value={values.patientAddressNumber}
                    name="patientAddressNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.patientAddressNumber && errors.patientAddressNumber)}
                  />
                  {touched.patientAddressNumber && errors.patientAddressNumber && (
                    <FormHelperText error id="helper-text-patientAddressNumber">
                      {errors.patientAddressNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Divider>Visit Details</Divider>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="report-arrivalTime">Arrival Time </InputLabel>
                  <Field name="arrivalTime" component={(props) => <FormikCustomTimepickerField {...props} />}></Field>
                  {touched.arrivalTime && errors.arrivalTime && (
                    <FormHelperText error id="report-arrivalTime">
                      {errors.arrivalTime}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="report-departureTime">Departure Time </InputLabel>
                  <Field name="departureTime" component={(props) => <FormikCustomTimepickerField {...props} />}></Field>
                  {touched.departureTime && errors.departureTime && (
                    <FormHelperText error id="report-departureTime">
                      {errors.departureTime}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="deliveredServices">Delivered Services</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="deliveredServices"
                    type="deliveredServices"
                    value={values.deliveredServices}
                    name="deliveredServices"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.deliveredServices && errors.deliveredServices)}
                  />
                  {touched.deliveredServices && errors.deliveredServices && (
                    <FormHelperText error id="helper-text-deliveredServices">
                      {errors.deliveredServices}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="absenceStatus">Absence Status</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="absenceStatus"
                    type="absenceStatus"
                    value={values.absenceStatus}
                    name="absenceStatus"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.absenceStatus && errors.absenceStatus)}
                  />
                  {touched.absenceStatus && errors.absenceStatus && (
                    <FormHelperText error id="helper-text-absenceStatus">
                      {errors.absenceStatus}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>

              {/* old values */}

              {!disableEdit && (
                <Grid item xs={12}>
                  <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                    Save
                  </Button>
                </Grid>
              )}
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

ReportForm.propTypes = {
  reportData: PropTypes.object
};

export default ReportForm;
