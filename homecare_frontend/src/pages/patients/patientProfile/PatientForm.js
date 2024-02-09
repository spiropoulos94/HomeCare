// material-ui
import { Button, FormHelperText, Grid, InputLabel, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';
import { useState } from 'react';

import PropTypes from 'prop-types';

// ============================|| PATIENT - FORM ||============================ //

const PatientForm = ({ patientData }) => {
  const { AMKA, address, firstName, lastName, healthSecurityNumber, phone } = patientData;

  const [disableEdit] = useState(true);

  return (
    <>
      <Formik
        initialValues={{
          firstname: firstName,
          lastname: lastName,
          healthSecurityNumber: healthSecurityNumber,
          addressStreet: address.street,
          addressNumber: address.number,
          phone: phone,
          AMKA: AMKA,

          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          healthSecurityNumber: Yup.string().max(255).required('Health Security Number is required'),
          addressStreet: Yup.string().max(255).required('Address is required'),
          addressNumber: Yup.string().max(255).required('Address number is required'),
          phone: Yup.string().min(9).max(16).required('Phone number is not valid'),
          AMKA: Yup.string().max(255).required('AMKA is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
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
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="firstname-signup">First Name*</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    error={Boolean(touched.firstname && errors.firstname)}
                  />
                  {touched.firstname && errors.firstname && (
                    <FormHelperText error id="helper-text-firstname-signup">
                      {errors.firstname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="lastname-signup">Last Name*</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    fullWidth
                    error={Boolean(touched.lastname && errors.lastname)}
                    id="lastname-signup"
                    type="lastname"
                    value={values.lastname}
                    name="lastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="Doe"
                    inputProps={{}}
                  />
                  {touched.lastname && errors.lastname && (
                    <FormHelperText error id="helper-text-lastname-signup">
                      {errors.lastname}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="healthSecurityNumber-signup">Health Security Number</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    fullWidth
                    error={Boolean(touched.healthSecurityNumber && errors.healthSecurityNumber)}
                    id="healthSecurityNumber-signup"
                    value={values.healthSecurityNumber}
                    name="healthSecurityNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="12345678910"
                    inputProps={{}}
                  />
                  {touched.healthSecurityNumber && errors.healthSecurityNumber && (
                    <FormHelperText error id="helper-text-healthSecurityNumber-signup">
                      {errors.healthSecurityNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patient-AMKA">AMKA</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    fullWidth
                    error={Boolean(touched.AMKA && errors.AMKA)}
                    id="patient-AMKA"
                    value={values.AMKA}
                    name="AMKA"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="12345678910"
                    inputProps={{}}
                  />
                  {touched.AMKA && errors.AMKA && (
                    <FormHelperText error id="helper-text-patient-AMKA">
                      {errors.AMKA}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patient-phone">Phone</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    fullWidth
                    error={Boolean(touched.phone && errors.phone)}
                    id="patient-phone"
                    value={values.phone}
                    name="phone"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g. 6975325589"
                    inputProps={{}}
                  />
                  {touched.phone && errors.phone && (
                    <FormHelperText error id="helper-text-patient-phone">
                      {errors.phone}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} sm={4}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patient-addressStreet">Street</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    fullWidth
                    error={Boolean(touched.addressStreet && errors.addressStreet)}
                    id="patient-addressStreet"
                    value={values.addressStreet}
                    name="addressStreet"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g. Panepistimiou"
                    inputProps={{}}
                  />
                  {touched.addressStreet && errors.addressStreet && (
                    <FormHelperText error id="helper-text-patient-phone">
                      {errors.addressStreet}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={2} md={1}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="patient-addressNumber">Number</InputLabel>
                  <OutlinedInput
                    readOnly={disableEdit}
                    fullWidth
                    error={Boolean(touched.addressNumber && errors.addressNumber)}
                    id="patient-addressNumber"
                    value={values.addressNumber}
                    name="addressNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g. 27"
                    inputProps={{}}
                  />
                  {touched.addressNumber && errors.addressStreet && (
                    <FormHelperText error id="helper-text-patient-phone">
                      {errors.addressNumber}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
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

PatientForm.propTypes = {
  patientData: PropTypes.object
};

export default PatientForm;
