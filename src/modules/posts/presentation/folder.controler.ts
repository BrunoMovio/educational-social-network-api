import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from "@nestjs/common";
import { AuthGuard } from "@nestjs/passport";
import { FolderService } from "../application/folder/folder.service";
import { CreateFolderService } from "../application/folder/create-folder.service";
import {
  CreateFolderInput,
  UpdateFolderInput,
} from "../application/folder/dto/folder.input";
import { RemoveFolderService } from "../application/folder/remove-folder.service";
import { UpdateFolderService } from "../application/folder/update-folder.service";

@UseGuards(AuthGuard("api-key"))
@Controller("folder")
export class FolderController {
  constructor(
    private readonly folderService: FolderService,
    private readonly createFolderService: CreateFolderService,
    private readonly updateFolderService: UpdateFolderService,
    private readonly removeFolderService: RemoveFolderService
  ) {}

  @Post("create")
  async createFolder(@Body("input") input: CreateFolderInput) {
    try {
      const folder = await this.createFolderService.create(input);
      return folder;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.UNPROCESSABLE_ENTITY,
          error: `${e}`,
        },
        HttpStatus.UNPROCESSABLE_ENTITY
      );
    }
  }

  @Post("update")
  async updateFolder(@Body("input") input: UpdateFolderInput) {
    try {
      const folder = await this.updateFolderService.update(input);
      return folder;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_MODIFIED,
          error: `${e}`,
        },
        HttpStatus.NOT_MODIFIED
      );
    }
  }

  @Delete("remove")
  async removeFolder(@Body("id") id: string) {
    try {
      const folder = await this.removeFolderService.remove(id);
      return folder;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get(":id")
  async getFolder(@Param("id") id: string) {
    try {
      const folder = await this.folderService.findFolder(id);
      return folder;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("user/:userId")
  async getFolderByUserId(@Param("userId") userId: string) {
    try {
      const folder = await this.folderService.findByUserId(userId);
      return folder;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }

  @Get("name/:name")
  async getFolderByName(@Param("name") name: string) {
    try {
      const folder = await this.folderService.findByName(name);
      return folder;
    } catch (e: any) {
      throw new HttpException(
        {
          status: HttpStatus.NOT_FOUND,
          error: `${e}`,
        },
        HttpStatus.NOT_FOUND
      );
    }
  }
}
