export type Get = {
  api: string
  id?: string | number
  params: unknown
}

export type Post = {
  api: string
  id: string | number
  data: unknown
}

export type Delete = {
  api: string
  id: string | number
  data: unknown
}

export type Patch = {
  api: string
  id: string | number
  data: unknown
}

export type Put = {
  api: string
  id: string | number
  data: unknown
}

export type PutFormData = {
  api: string
  id: string | number
  data: unknown
}

export type PostFormData = {
  api: string
  id: string | number
  data: unknown
}
