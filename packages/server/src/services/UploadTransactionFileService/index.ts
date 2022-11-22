// import {S3} from 'aws-sdk'
import { resolve } from "path";
const { readFileSync, promises: fsPromises } = require('fs');
import { tmpFolder } from "../../helpers/tmpFolder";
import mime from "mime";
import transactionFormatting from "./helpers/transactionFormatting";

const UploadTransactionFileService = async (file: string) => {
    
    const originalName = resolve(tmpFolder, file)
    const ContentType = mime.getType(originalName)

    if (ContentType !== "text/plain") {
        return { error: true, message: "File type invalid, send a .text!" }
    }

    const contents = await fsPromises.readFile(originalName, 'utf-8');

    const transactions = contents.split(/\r?\n/);

    const transactionFormatted = transactionFormatting(transactions)

    console.log(transactionFormatted)

    return { error: false, message: "Successful upload" }
    
}

export default UploadTransactionFileService
