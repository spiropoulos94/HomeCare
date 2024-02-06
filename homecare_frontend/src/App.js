import ThemeRoutes from './routes';
import ThemeCustomization from './themes';

// external
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <ThemeCustomization>
      <ThemeRoutes />
      <ToastContainer />
    </ThemeCustomization>
  );
}

export default App;
