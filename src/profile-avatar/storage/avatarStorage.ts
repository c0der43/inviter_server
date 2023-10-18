import { diskStorage } from "multer";
import { normalizeFileName } from "../../event-file/storage_event";

export const avatarFileStorage = diskStorage({
  destination: './uploads_avatars',
  filename: normalizeFileName
});
