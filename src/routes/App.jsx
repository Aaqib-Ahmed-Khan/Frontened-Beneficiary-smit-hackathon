import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from 'antd';
import AdminDashboard from '../Components/Admin/AdminDashboard'; 
import ReceptionistDashboard from '../Components/receptionist/ReceptionistDashboard'; 
import DepartmentDashboard from '../Components/department/DepartmentDashboard'; 
import Header from '../Components/shared/Header'; 
import Footer from '../Components/shared/Footer'; 
import RegistrationPage from '../Components/receptionist/RegistrationPage';
import DepartmentStaffInteraction from '../Components/department/departmentstaffinteraction,';';';
const App = () => {
  return (
    <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Header />
        <Layout.Content style={{ padding: '20px' }}>
          <Routes>
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/receptionist" element={<ReceptionistDashboard />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/department" element={<DepartmentDashboard />} />
            <Route path="/department-interaction" element={<DepartmentStaffInteraction />} />
      
          </Routes>
        </Layout.Content>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
