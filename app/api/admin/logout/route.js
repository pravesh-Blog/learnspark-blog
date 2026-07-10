export async function POST() {
  const response = Response.json({ success: true })
  
  response.headers.set(
    'Set-Cookie',
    'adminToken=; HttpOnly; Path=/; Max-Age=0; SameSite=Strict'
  )
  
  return response;
}