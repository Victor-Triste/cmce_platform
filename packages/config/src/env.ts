export const config = {
  apiUrl: 'http://localhost:8000/api',
  apiTimeout: 10000,
  appTitle: 'CMCE Platform'
} as const

export type Config = typeof config