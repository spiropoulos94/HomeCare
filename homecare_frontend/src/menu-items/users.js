// assets
import { BarsOutlined, UserAddOutlined } from '@ant-design/icons';

// icons
const icons = {
  BarsOutlined,
  UserAddOutlined
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
    },
    {
      id: 'createUser',
      title: 'Create User',
      type: 'item',
      url: '/create_user',
      icon: icons.UserAddOutlined
    }
  ]
};

export default users;
