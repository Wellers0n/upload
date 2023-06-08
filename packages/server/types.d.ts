export type User = {
  id: number
  name: string
  password: string
  email: string
  password: string
  created_at: Date
  updated_at: Date
}

export type Transaction = {
  description?: string
  nature?: string
  signal?: string
  user_id: number
  type: number
  date: string
  product: string
  amount: number
  seller: string
  created_at: Date
  updated_at: Date
}
