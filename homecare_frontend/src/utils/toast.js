import { toast } from 'react-toastify';

export const alertSuccess = (message = 'Success Notification !') => {
  toast.success(message, {
    position: toast.POSITION.TOP_CENTER
  });
};

export const alertError = (e) => {
  const message = e?.message || e;
  toast.error(message, {
    position: toast.POSITION.TOP_CENTER
  });
};
