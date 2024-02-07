import { Link, useLocation } from 'react-router-dom';

// material-ui
import { Grid, Stack, Typography } from '@mui/material';

// project import
import AuthRegister from './auth-forms/AuthRegister';
import AuthWrapper from './AuthWrapper';
import { decryptValues } from 'utils/crypto';
import { useEffect } from 'react';

// ================================|| REGISTER ||================================ //

const Register = () => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const queryText = decodeURIComponent(params.get('q'));

  useEffect(() => {
    const decryptedValues = decryptValues(queryText);
    console.log({ decryptedValues });
  }, [queryText]);

  return (
    <AuthWrapper>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline" sx={{ mb: { xs: -0.5, sm: 0.5 } }}>
            <Typography variant="h3">Sign up</Typography>
            <Typography component={Link} to="/login" variant="body1" sx={{ textDecoration: 'none' }} color="primary">
              Already have an account?
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <AuthRegister />
        </Grid>
      </Grid>
    </AuthWrapper>
  );
};

export default Register;
