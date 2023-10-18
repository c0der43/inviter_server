import { diskStorage, MulterError } from "multer";
import { randomBytes } from "crypto";

export const normalizeFileName = (req: any, file: any, callback: any) => {
  const fileName = file.originalname.split('.').pop();

  callback(null, `${randomBytes(20).toString('hex')}.${fileName}`);

  // if (file.originalname.match(/^.*\.(mp3|wav|mp4)$/)) {
  //   callback(null, `${randomBytes(20).toString('hex')}.${fileName}`);
  // }else{
  //   callback(new MulterError('LIMIT_UNEXPECTED_FILE', 'audio'), false);
  // }
}

export const eventFileStorage = diskStorage({
  destination: './uploads_event',
  filename: normalizeFileName
});
