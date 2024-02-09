import ThemeRoutes from './routes';
import ThemeCustomization from './themes';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

// external
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <ThemeCustomization>
        <ThemeRoutes />
        <ToastContainer />
      </ThemeCustomization>
    </LocalizationProvider>
  );
}

export default App;
