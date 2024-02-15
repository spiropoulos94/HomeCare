import { Grid, InputLabel, OutlinedInput, Stack, FormHelperText } from '@mui/material';

const PatientSection = ({ values, touched, errors, handleBlur, handleChange, isReadOnly }) => {
  return (
    <>
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
    </>
  );
};

export default PatientSection;
