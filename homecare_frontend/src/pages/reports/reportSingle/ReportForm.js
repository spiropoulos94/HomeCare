// material-ui
import { Button, Divider, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import FormikCustomSelect from 'components/customFormFields/FormikCustomSelectField';
import { professions } from 'constants/professions';
import FormikCustomTimepickerField from 'components/customFormFields/FormikCustomTimePickerField';
import FormikCustomSwitchField from 'components/customFormFields/FormikCustomSwitchField';
import FormikCustomAutocompleteField from 'components/customFormFields/FormikCustomAutocompleteField';
import { stringToDayJSObject } from 'utils/dateTime';

// ============================|| REPORT - FORM ||============================ //

const ReportForm = ({ reportData = null }) => {
  const [isReadOnly, setIsReadOnly] = useState(false);

  const getAvailableServices = (professionVal) => {
    if (!professionVal) {
      return [];
    }
    let profession = professions.filter((p) => p.value === professionVal || p.label === professionVal)[0];
    return profession.services;
  };

  useEffect(() => {
    setIsReadOnly(Boolean(reportData));
  }, [reportData]);

  const initialValues = reportData
    ? {
        professionalFullname: reportData.professionalName,
        profession: reportData.profession?.value,
        patientFirstname: reportData?.patient?.firstName,
        patientLastname: reportData?.patient?.lastName,
        patientAMKA: reportData?.patient?.amka,
        patientHealthSecurityNumber: reportData?.patient?.healthSecurityNumber,
        patientAddressStreet: reportData?.patient?.address?.street,
        patientAddressNumber: reportData?.patient?.address?.number,
        arrivalTime: stringToDayJSObject(`${reportData?.date} ${reportData?.arrivalTime}`),
        departureTime: stringToDayJSObject(`${reportData?.date} ${reportData?.departureTime}`),
        isPresent: reportData?.isPresent,
        deliveredServices: reportData?.deliveredServices
      }
    : {
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
        isPresent: true,
        deliveredServices: []
      };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          ...initialValues,
          submit: null
        }}
        validationSchema={Yup.object().shape({
          // professionalFullname: Yup.string().max(255).required('Professional Full Name is required'),
          // profession: Yup.string().max(255).required('Profession is required'),
          // patientFirstname: Yup.string().max(255).required(' Name is required'),
          // patientLastname: Yup.string().max(255).required(' Lastname is required'),
          // patientAMKA: Yup.string()
          //   .matches(/^[0-9]+$/, 'AMKA must be only numbers')
          //   .min(11, 'AMKA must be exactly 11 digits')
          //   .max(11, 'AMKA must be exactly 11 digits')
          //   .required('AMKA is required'),
          // patientHealthSecurityNumber: Yup.string()
          //   .matches(/^[0-9]+$/, 'AMKA must be only numbers')
          //   .min(11, 'Health Security Number must be exactly 11 digits')
          //   .max(11, 'Health Security Number must be exactly 11 digits')
          //   .required('Health Security Number is required'),
          // patientAddressStreet: Yup.string().max(255).required('Street is required'),
          // patientAddressNumber: Yup.string()
          //   .matches(/^[0-9]+$/, 'Number must be only numbers')
          //   .min(1, 'Min value is 1')
          //   .max(9999, 'Max value is 9999')
          //   .required('Number is required'),
          // arrivalTime: Yup.date().when('isPresent', {
          //   is: true,
          //   then: (schema) =>
          //     schema.max(Yup.ref('departureTime'), 'Arrival Time must be before Departure Time').required('Arrival Time is required'),
          //   otherwise: (schema) => schema.optional()
          // }),
          // departureTime: Yup.date().when('isPresent', {
          //   is: true,
          //   then: (schema) => schema.required('Departure Time is required'),
          //   otherwise: (schema) => schema.optional()
          // }),
          // isPresent: Yup.bool().required('Absence status is required'),
          // deliveredServices: Yup.array().when('isPresent', {
          //   is: true,
          //   then: (schema) => schema.required('Delivered services is required').min(1, 'There must be at least 1 delivered service'),
          //   otherwise: (schema) => schema.optional()
          // })
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
                  <Field name="profession" component={(props) => <FormikCustomSelect {...props} readOnly={isReadOnly} />}>
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
                    readOnly={isReadOnly}
                    id="patientFirstname"
                    type="patientFirstname"
                    value={values.patientFirstname}
                    name="patientFirstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g Nikos"
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
                    readOnly={isReadOnly}
                    id="patientLastname"
                    type="patientLastname"
                    value={values.patientLastname}
                    name="patientLastname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g. Papadopoulos"
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
                    readOnly={isReadOnly}
                    id="patientAMKA"
                    type="patientAMKA"
                    value={values.patientAMKA}
                    name="patientAMKA"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g. 12345678910"
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
                    readOnly={isReadOnly}
                    id="patientHealthSecurityNumber"
                    type="patientHealthSecurityNumber"
                    value={values.patientHealthSecurityNumber}
                    name="patientHealthSecurityNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g. 12345678910"
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
                    readOnly={isReadOnly}
                    id="patientAddressStreet"
                    type="patientAddressStreet"
                    value={values.patientAddressStreet}
                    name="patientAddressStreet"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g Ethnikis Antistasews"
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
                    readOnly={isReadOnly}
                    id="patientAddressNumber"
                    type="patientAddressNumber"
                    value={values.patientAddressNumber}
                    name="patientAddressNumber"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="e.g 12"
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
              <Grid display={'flex'} justifyContent={'start'} item xs={12}>
                <Stack spacing={1} direction={'row'} alignItems={'center'}>
                  <InputLabel htmlFor="report-isPresent">Patient was{values.isPresent ? '' : ' not'} at home </InputLabel>
                  {!isReadOnly && (
                    <Field name="isPresent" component={FormikCustomSwitchField}>
                      {professions.map(({ value, label }) => (
                        <MenuItem key={value} value={value}>
                          {label}
                        </MenuItem>
                      ))}
                    </Field>
                  )}
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
                    component={(props) => (
                      <FormikCustomTimepickerField disabled={Boolean(!values.isPresent)} readOnly={isReadOnly} {...props} />
                    )}
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
                    component={(props) => (
                      <FormikCustomTimepickerField disabled={Boolean(!values.isPresent)} readOnly={isReadOnly} {...props} />
                    )}
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

              {/* old values */}

              {!isReadOnly && (
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
