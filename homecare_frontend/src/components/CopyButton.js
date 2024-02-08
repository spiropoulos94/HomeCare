import { Button } from '@mui/material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import DoneIcon from '@mui/icons-material/Done';
import { useState } from 'react';
import PropTypes from 'prop-types';

const CopyButton = ({ value = '', title = 'Copy', sx }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(value);
    setIsClicked(true);
  };

  return (
    <Button
      variant="outlined"
      color="primary"
      sx={{ ...sx }}
      startIcon={isClicked ? <DoneIcon /> : <ContentCopyIcon />}
      aria-label="copy"
      onClick={handleCopyClick}
    >
      {isClicked ? 'Copied!' : title}
    </Button>
  );
};

export default CopyButton;

CopyButton.propTypes = {
  value: PropTypes.string,
  title: PropTypes.string,
  sx: PropTypes.object
};
