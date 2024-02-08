// assets
import { FolderOutlined } from '@ant-design/icons';

// icons
const icons = {
  FolderOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
  id: 'reports',
  title: 'Reports',
  type: 'group',
  children: [
    {
      id: 'reports',
      title: 'Reports',
      type: 'item',
      url: '/reports',
      icon: icons.FolderOutlined
    }
  ]
};

export default support;
