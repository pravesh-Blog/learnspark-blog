import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(req) {
  try {
    const { password } = await req.json()
    
    if (password === process.env.ADMIN_PASSWORD) {
      const token = jwt.sign(
        { admin: true },
        process.env.JWT_SECRET,
        { expiresIn: '7d' }
      )

      const response = NextResponse.json({ success: true })
      
      response.cookies.set('adminToken', token, {
        httpOnly: true,
        path: '/',
        maxAge: 7 * 24 * 60 * 60,
        sameSite: 'strict'
      })
      
      return response
    }
    
    return NextResponse.json({ success: false }, { status: 401 })
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}