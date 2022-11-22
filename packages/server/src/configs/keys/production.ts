import { IKeysProps } from './'

export const production = {
    port: process.env.PORT,
    environment: process.env.NODE_ENV,
    mongoURI: process.env.PRODUCTION_MONGO_URI,
    s3: {
        id: process.env.AWS_ACCESS_KEY_ID,
        key: process.env.AWS_SECRET_ACCESS_KEY,
        bucket: process.env.AWS_BUCKET,
        url: process.env.AWS_S3_URL
    },
} as IKeysProps
