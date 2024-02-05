// assets
import { BarsOutlined } from '@ant-design/icons';

// icons
const icons = {
  BarsOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const users = {
  id: 'users',
  title: 'Users',
  type: 'group',
  children: [
    {
      id: 'patients',
      title: 'Patients',
      type: 'item',
      url: '/patients',
      icon: icons.BarsOutlined
    }
  ]
};

export default users;
