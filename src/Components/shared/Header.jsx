// import React from 'react';
// import { Layout, Menu } from 'antd';
// import { Link } from 'react-router-dom';

// const Header = () => {
//   return (
//     <Layout.Header>
//       <Menu theme="dark" mode="horizontal">
//         <Menu.Item key="1">
//           <Link to="/admin">Admin</Link>
//         </Menu.Item>
//         <Menu.Item key="2">
//           <Link to="/receptionist">Receptionist</Link>
//         </Menu.Item>
//         <Menu.Item key="3">
//           <Link to="/department">Department</Link>
//         </Menu.Item>
//       </Menu>
//     </Layout.Header>
//   );
// };

// export default Header;
import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header } = Layout;

const CustomHeader = () => {
  return (
    <Header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <Menu theme="dark" mode="horizontal" style={{ flex: 1 }}>
        <Menu.Item key="1">
          <Link to="/admin">Admin</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/receptionist">Receptionist</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/department">Department</Link>
        </Menu.Item>
      </Menu>
      
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
        <img src="/logo.jpeg" alt="Logo" style={{ width: 100, height: 'auto' }} />
      </div>
    </Header>
  );
};

export default CustomHeader;
