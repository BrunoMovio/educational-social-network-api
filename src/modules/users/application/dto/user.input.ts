export class CreateUserInput {
  name: string;
  nickname?: string;
  email: string;
  description: string;
  birthday: string;
  avatar?: string;
}

export class UpdateUserInput extends CreateUserInput {
  id: string;
}
