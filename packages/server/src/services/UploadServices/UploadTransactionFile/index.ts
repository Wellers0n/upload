// import {S3} from 'aws-sdk'
import { resolve } from "path";
const { promises: fsPromises } = require('fs');
import { tmpFolder } from "../../../helpers/tmpFolder";
import mime from "mime";
import transactionFormatting from "./helpers/transactionFormatting";
import db from '../../../models'

const UploadTransactionFileService = async (file: string) => {

    const originalName = resolve(tmpFolder, file)
    const ContentType = mime.getType(originalName)

    if (ContentType !== "text/plain") {
        return { error: true, message: "File type invalid, send a .text!" }
    }

    const contents = await fsPromises.readFile(originalName, 'utf-8');

    const transactions = contents.split(/\r?\n/);

    const transactionFormatted = transactionFormatting(transactions)

    transactionFormatted.map(async (transaction) => {
        if (transaction) {
            await db.Transactions.create(transaction);
        }
    })


    return { error: false, message: "Successful upload" }

}

export default UploadTransactionFileService
