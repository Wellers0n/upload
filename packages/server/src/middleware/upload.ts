import multer from 'multer'
import crypto from 'crypto'
import { tmpFolder } from '../helpers/tmpFolder'

export function storage() {
  return multer.diskStorage({
    destination: tmpFolder,
    filename: (request, file, callback) => {
      const fileHash = crypto.randomBytes(16).toString('hex')
      const fileName = `${fileHash}-${file.originalname}`

      return callback(null, fileName)
    }
  })
}
