export type FolderSending = {
  name: string
  type: number
  thumbNailImage: string
}

export interface Folder {
  id: number
  name: string
  thumbNailImage: string
  type: Type
}

export interface Type {
  id: number
  name: string
}

export type FolderResponse = Folder[]

export type CategoreyType = { id: number; name: string }[]
