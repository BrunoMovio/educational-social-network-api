export class CreateFolderInput {
  userId: string;
  name: string;
}

export class UpdateFolderInput extends CreateFolderInput {
  id: string;
}
