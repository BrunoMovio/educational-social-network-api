export class UserInput {
  name: string;
  nickname: string;
  email: string;
  role?: string;
  city?: string;
  state?: string;
  country?: string;
  description?: string;
  career?: string;
}
export class CreateUserInput extends UserInput {
  password: string;
}

export class UpdateUserInput extends UserInput {
  id: string;
}
