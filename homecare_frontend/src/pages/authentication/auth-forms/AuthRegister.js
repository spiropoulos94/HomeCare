import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

// material-ui
import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
  Box,
  MenuItem
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Field, Formik } from 'formik';

// project import
// import FirebaseSocial from './FirebaseSocial';
// import AnimateButton from 'components/@extended/AnimateButton';
// import { strengthColor, strengthIndicator } from '../../../utils/password-strength';
import { strengthColor, strengthIndicator } from 'utils/password-strength';
// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import FormikCustomSelect from 'components/FormikCustomSelect';
import { professions } from 'constants/professions';

// ============================|| FIREBASE - REGISTER ||============================ //

const AuthRegister = ({ formdata = null }) => {
  const [level, setLevel] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const [presetValues, setPresetValues] = useState(null);

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const changePassword = (value) => {
    const temp = strengthIndicator(value);
    setLevel(strengthColor(temp));
  };

  useEffect(() => {
    changePassword('');
  }, []);

  useEffect(() => {
    if (formdata) {
      setPresetValues(formdata);
    }
  }, [formdata]);

  const fieldIsPartOfPresetValues = (field) => {
    return Boolean(presetValues && presetValues[field]);
  };

  return (
    <>
      <Formik
        enableReinitialize
        initialValues={{
          firstname: presetValues?.firstname || '',
          lastname: presetValues?.lastname || '',
          afm: presetValues?.afm || '',
          amka: presetValues?.amka || '',
          profession: presetValues?.profession || '',
          email: '',
          password: '',

          submit: null
        }}
        validationSchema={Yup.object().shape({
          firstname: Yup.string().max(255).required('First Name is required'),
          lastname: Yup.string().max(255).required('Last Name is required'),
          afm: Yup.string().max(255).required('AFM is required'),
          amka: Yup.string().max(255).required('AMKA is required'),
          profession: Yup.string().max(255).required('Profession is required'),
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required')
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
                    id="firstname-login"
                    type="firstname"
                    value={values.firstname}
                    name="firstname"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="John"
                    fullWidth
                    readOnly={fieldIsPartOfPresetValues('firstname')}
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
                    readOnly={fieldIsPartOfPresetValues('lastname')}
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
                    readOnly={fieldIsPartOfPresetValues('afm')}
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
                    readOnly={fieldIsPartOfPresetValues('amka')}
                  />
                  {touched.amka && errors.amka && (
                    <FormHelperText error id="helper-text-amka-signup">
                      {errors.amka}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <InputLabel id="admin-user-create-simple-select-label">Profession</InputLabel>
                <Field
                  name="profession"
                  component={(props) => <FormikCustomSelect readOnly={fieldIsPartOfPresetValues('profession')} {...props} />}
                >
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
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="email-signup">Email Address*</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.email && errors.email)}
                    id="email-login"
                    type="email"
                    value={values.email}
                    name="email"
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder="demo@afm.com"
                    inputProps={{}}
                  />
                  {touched.email && errors.email && (
                    <FormHelperText error id="helper-text-email-signup">
                      {errors.email}
                    </FormHelperText>
                  )}
                </Stack>
              </Grid>
              <Grid item xs={12}>
                <Stack spacing={1}>
                  <InputLabel htmlFor="password-signup">Password</InputLabel>
                  <OutlinedInput
                    fullWidth
                    error={Boolean(touched.password && errors.password)}
                    id="password-signup"
                    type={showPassword ? 'text' : 'password'}
                    value={values.password}
                    name="password"
                    onBlur={handleBlur}
                    onChange={(e) => {
                      handleChange(e);
                      changePassword(e.target.value);
                    }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                          size="large"
                        >
                          {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                        </IconButton>
                      </InputAdornment>
                    }
                    placeholder="******"
                    inputProps={{}}
                  />
                  {touched.password && errors.password && (
                    <FormHelperText error id="helper-text-password-signup">
                      {errors.password}
                    </FormHelperText>
                  )}
                </Stack>
                <FormControl fullWidth sx={{ mt: 2 }}>
                  <Grid container spacing={2} alignItems="center">
                    <Grid item>
                      <Box sx={{ bgcolor: level?.color, width: 85, height: 8, borderRadius: '7px' }} />
                    </Grid>
                    <Grid item>
                      <Typography variant="subtitle1" fontSize="0.75rem">
                        {level?.label}
                      </Typography>
                    </Grid>
                  </Grid>
                </FormControl>
              </Grid>
              {/* <Grid item xs={12}>
                <Typography variant="body2">
                  By Signing up, you agree to our &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Terms of Service
                  </Link>
                  &nbsp; and &nbsp;
                  <Link variant="subtitle2" component={RouterLink} to="#">
                    Privacy Policy
                  </Link>
                </Typography>
              </Grid> */}
              {errors.submit && (
                <Grid item xs={12}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid item xs={12}>
                {/* <AnimateButton> */}
                <Button disableElevation disabled={isSubmitting} fullWidth size="large" type="submit" variant="contained" color="primary">
                  Create Account
                </Button>
                {/* </AnimateButton> */}
              </Grid>
              {/* <Grid item xs={12}>
                <Divider>
                  <Typography variant="caption">Sign up with</Typography>
                </Divider>
              </Grid>
              <Grid item xs={12}>
                <FirebaseSocial />
              </Grid> */}
            </Grid>
          </form>
        )}
      </Formik>
    </>
  );
};

export default AuthRegister;

AuthRegister.propTypes = {
  formdata: PropTypes.object
};
