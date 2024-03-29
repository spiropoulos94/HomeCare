// project import
import MainCard from 'components/MainCard';
import AdminUserCreateForm from './AdminUserCreateForm';
import { useState } from 'react';
import { encryptValues } from 'utils/crypto';
import { TextField, useMediaQuery } from '@mui/material';
import CopyButton from 'components/CopyButton';
import { useTheme } from '@emotion/react';
import ScrollBottom from 'components/ScrollBottom';

// ==============================|| SAMPLE PAGE ||============================== //

const AdminUserCreate = () => {
  const theme = useTheme();
  const matchDownMD = useMediaQuery(theme.breakpoints.down('lg'));
  const [link, setLink] = useState('');

  const generateLink = (values) => {
    const hash = encryptValues(values);
    // Determine base URL based on environment
    const baseURL = process.env.NODE_ENV === 'production' ? 'https://your-production-url.com' : 'http://localhost:3000';

    // Construct the registration link
    const registrationLink = `${baseURL}/register?q=${encodeURIComponent(hash)}`;

    return setLink(registrationLink);
  };

  return (
    <>
      <MainCard title="User Create">
        <AdminUserCreateForm onSubmit={generateLink} />
      </MainCard>
      {link.length ? (
        <>
          <MainCard sx={{ mt: (theme) => theme.spacing(2) }}>
            <TextField multiline sx={{ width: '100%', mt: (theme) => theme.spacing(2) }} value={link}></TextField>
            <CopyButton title="Copy Link" value={link} sx={{ mt: (theme) => theme.spacing(2), width: matchDownMD ? '100%' : 'initial' }} />
          </MainCard>
          <ScrollBottom />
        </>
      ) : null}
    </>
  );
};

export default AdminUserCreate;
