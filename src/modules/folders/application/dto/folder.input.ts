export class CreateFolderInput {
  userId: string;
  title: string;
  description: string;
}

export class UpdateFolderInput extends CreateFolderInput {
  id: string;
}
