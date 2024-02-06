import MuiBreadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import { Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function BreadCrumbs({ items }) {
  const navigate = useNavigate();
  return (
    <Box sx={{ my: (theme) => theme.spacing(2) }} role="presentation">
      <MuiBreadcrumbs aria-label="breadcrumb">
        {items.map(({ url, title, href }, index) => {
          const isLastItem = index == items.length - 1;
          return (
            <Link
              onClick={() => navigate(url)}
              sx={{ cursor: isLastItem ? 'initial' : 'pointer', fontWeight: (theme) => isLastItem && theme.typography.fontWeightBold }}
              key={index}
              underline={isLastItem ? 'none' : 'hover'}
              color={'inherit'}
              href={href}
            >
              {title}
            </Link>
          );
        })}
      </MuiBreadcrumbs>
    </Box>
  );
}

BreadCrumbs.propTypes = {
  items: PropTypes.array
};
