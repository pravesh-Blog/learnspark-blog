import { jwtVerify } from "jose";
export async function verifyToken(request) {
  const token = request.cookies.get('adminToken')?.value;

  if (!token) {
    return false
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET)
    await jwtVerify(token, secret)
    return true
  } catch (error) {
    return false
  }
}