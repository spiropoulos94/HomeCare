import BaseGridTable from 'components/BaseGridTable';
import { columns } from './columns';
import PropTypes from 'prop-types';
import { useLocation, useNavigate } from 'react-router-dom';

const PatientsGridTable = ({ data = [], isLoading = false, failedSearchTerm = '', refreshData = null }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onRowClick = (data) => {
    if (data.field === '__check__') {
      return;
    }
    const { row } = data;

    if (location.pathname === '/') {
      navigate(`reports/${row.id}`, { state: row });
    } else {
      navigate(`${row.id}`, { state: row });
    }
  };

  return (
    <BaseGridTable
      data={data ?? []}
      columns={columns}
      isLoading={isLoading}
      failedSearchTerm={failedSearchTerm}
      refreshData={refreshData}
      hideToolbar={false}
      onRowClick={onRowClick}
    />
  );
};

export default PatientsGridTable;

PatientsGridTable.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  isLoading: PropTypes.bool,
  refreshData: PropTypes.func,
  hideToolbar: PropTypes.bool,
  sx: PropTypes.object,
  failedSearchTerm: PropTypes.string
};
