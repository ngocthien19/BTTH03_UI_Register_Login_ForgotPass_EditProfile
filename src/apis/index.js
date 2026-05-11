import authorizedAxiosInstance from '~/utils/authorizedAxios'
import { API_ROOT } from '~/utils/constants'

/**
 * Đăng ký tài khoản mới
 * @param {Object} data: { username, email, password }
 */
const registerUserAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/api/auth/register`, data)
  return response.data
}

/**
 * Xác thực OTP kích hoạt tài khoản
 * @param {Object} data: { email, otp }
 */
const verifyOTPAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/api/auth/verify-otp`, data)
  return response.data
}

/**
 * Quên mật khẩu - Gửi yêu cầu lấy OTP
 * @param {string} email
 */
const forgotPasswordAPI = async (email) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/api/auth/forgot-password`, { email })
  return response.data
}

/**
 * Quên mật khẩu - Đặt lại mật khẩu mới
 * @param {Object} data: { email, otp, newPassword }
 */
const resetPasswordAPI = async (data) => {
  const response = await authorizedAxiosInstance.post(`${API_ROOT}/api/auth/reset-password`, data)
  return response.data
}

export const authAPI = {
  registerUserAPI,
  verifyOTPAPI,
  forgotPasswordAPI,
  resetPasswordAPI
}