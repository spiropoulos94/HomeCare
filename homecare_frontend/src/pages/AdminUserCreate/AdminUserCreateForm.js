// material-ui
import { Button, FormHelperText, Grid, InputLabel, MenuItem, OutlinedInput, Stack } from '@mui/material';

// third party
import * as Yup from 'yup';
import { Field, Formik } from 'formik';
import FormikCustomSelect from 'components/FormikCustomSelect';
import { professions } from 'constants/professions';
import PropTypes from 'prop-types';

// ============================|| ADMIN - CREATE USER ||============================ //

const AdminUserCreateForm = ({ onSubmit }) => {
  const handleSubmit = (values) => {
    onSubmit(values);
  };
  return (
    <>
      <Formik
        initialValues={{
          firstname: '',
          lastname: '',
          afm: '',
          amka: '',
          profession: '',

          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          afm: Yup.string().max(255).required('AFM is required'),
          amka: Yup.string().max(255).required('AMKA is required'),
          profession: Yup.string().max(255).required('Profession is required')
        })}
        onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
          console.log('submit user create', { values });
          try {
            setStatus({ success: false });
            setSubmitting(false);
            handleSubmit(values);
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
                  <InputLabel htmlFor="afm-signup">AFM</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.afm && errors.afm)}
                    id="afm-signup"
                    value={values.afm}
                    name="afm"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="12345678910"
                    inputProps={{}}
                  />
                  {touched.afm && errors.afm && (
                    <FormHelperText error id="helper-text-afm-signup">
                      {errors.afm}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="amka-signup">AMKA</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.amka && errors.amka)}
                    id="amka-signup"
                    value={values.amka}
                    name="amka"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="12345678910"
                    inputProps={{}}
                  />
                  {touched.amka && errors.amka && (
                    <FormHelperText error id="helper-text-amka-signup">
                      {errors.amka}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12} md={6}>
                <InputLabel id="admin-user-create-simple-select-label">Profession</InputLabel>
                <Field name="profession" component={FormikCustomSelect}>
                  {professions.map(({ value, label }) => (
                    <MenuItem key={value} value={value}>
                      {label}
                    </MenuItem>
                  ))}
                </Field>
                {touched.profession && errors.profession && (
                  <FormHelperText error id="helper-text-profession">
                    {errors.profession}
                  </FormHelperText>
                )}
              </Grid>

              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  Create User
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AdminUserCreateForm;

AdminUserCreateForm.propTypes = {
  onSubmit: PropTypes.func
};
