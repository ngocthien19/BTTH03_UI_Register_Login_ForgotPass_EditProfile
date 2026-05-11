import { Routes, Route, Navigate } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

// Import các trang
import Register from '~/pages/Register'
import ForgotPassword from '~/pages/ForgotPassword'
// import Login from '~/pages/Login'

function App() {
  return (
    <>
      <Routes>
        {/* Điều hướng mặc định */}
        <Route path="/" element={<Navigate to="/login" replace />} />

        {/* Các trang chức năng */}
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* Trang 404 */}
        <Route path="*" element={
          <div className="flex items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold">404 - Không tìm thấy trang</h1>
          </div>
        } />
      </Routes>

      {/* Thông báo toàn cục */}
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        theme="colored"
      />
    </>
  )
}

export default App