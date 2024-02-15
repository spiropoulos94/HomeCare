// material-ui
import { Button, Divider, Grid } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { stringToDayJSObject } from 'utils/dateTime';
import ProfessionalSection from './ProfessionalSection';
import PatientSection from './PatientSection';
import VisitDetailsSection from './VisitDetailsSection';

// ============================|| REPORT - FORM ||============================ //

const ReportForm = ({ reportData = null }) => {
  const [isReadOnly, setIsReadOnly] = useState(false);

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
              <ProfessionalSection
                values={values}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
                isReadOnly={isReadOnly}
              />

              <Grid item xs={12}>
                <Divider>Patient </Divider>
              </Grid>

              <PatientSection
                values={values}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
                isReadOnly={isReadOnly}
              />

              <Grid item xs={12}>
                <Divider>Visit Details</Divider>
              </Grid>

              <VisitDetailsSection
                values={values}
                touched={touched}
                errors={errors}
                handleBlur={handleBlur}
                handleChange={handleChange}
                isReadOnly={isReadOnly}
              />

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
