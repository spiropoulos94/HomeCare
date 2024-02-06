import BaseGridTable from 'components/BaseGridTable';
import { columns } from './columns';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const PatientsGridTable = ({ data = [], isLoading = false, failedSearchTerm = '', refreshData = null }) => {
  const navigate = useNavigate();

  const onRowClick = (data) => {
    if (data.field === '__check__') {
      return;
    }
    const { row } = data;
    navigate(`${row.id}`, { state: row });
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
