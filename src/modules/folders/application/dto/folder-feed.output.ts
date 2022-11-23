import { FolderDTO } from "./folder.output";

export class FolderFeedDTO {
  constructor(props: { foldersToFeed: FolderDTO[]; page: number }) {
    this.folders = props.foldersToFeed;
    this.page = props.page;
  }

  folders: FolderDTO[];
  page: number;
}
