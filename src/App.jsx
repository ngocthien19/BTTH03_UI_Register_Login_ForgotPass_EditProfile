import { Routes, Route, Navigate } from 'react-router-dom'
import { ProtectedRoute } from '~/components/ProtectedRoute'
import Login from '~/pages/Login'
import Register from '~/pages/Register'
import AdminDashboard from '~/pages/AdminDashboard'
import Home from '~/pages/Home'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ForgotPassword from '~/pages/ForgotPassword'

function App() {
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Route dành cho User bình thường */}
        <Route path="/home" element={
          <ProtectedRoute allowedRoles={['user', 'admin']}>
            <Home />
          </ProtectedRoute>
        } />

        {/* Route CHỈ dành cho Admin */}
        <Route path="/admin/dashboard" element={
          <ProtectedRoute allowedRoles={['admin']}>
            <AdminDashboard />
          </ProtectedRoute>
        } />

        {/* Mặc định quay về login nếu không khớp route nào */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </>
  )
}

export default App