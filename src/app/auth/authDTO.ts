export interface UserDTO {
  username: string
  email: string
  password: string
}

export interface LoginDTO{
  username: string
  password: string
}

export interface GetUsersDTO{
  username: string
  email: string
  roles: string[]
}
