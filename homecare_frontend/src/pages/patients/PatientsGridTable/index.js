import BaseGridTable from 'components/BaseGridTable';
import { columns } from './columns';
import PropTypes from 'prop-types';

const PatientsGridTable = ({ data = [], isLoading = false, failedSearchTerm = '', refreshData = null }) => {
  return (
    <BaseGridTable
      data={data ?? []}
      columns={columns}
      isLoading={isLoading}
      failedSearchTerm={failedSearchTerm}
      refreshData={refreshData}
      hideToolbar={false}
      sx={{ border: 2, borderColor: 'red' }}
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
