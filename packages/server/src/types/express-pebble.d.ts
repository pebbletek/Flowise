import 'express'

declare module 'express-serve-static-core' {
  interface Request {
    pebbleParams?: Record<string, any>
    pebbleUser?: {
      user_id?: string
      org_id?: string
      [key: string]: any
    }
  }
} 