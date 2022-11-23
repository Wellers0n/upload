import {staging} from './staging'
import {production} from './production'

const {NODE_ENV} = process.env

export interface IKeysProps {
    port: string
    environment: string
    mongoURI: string,
    s3: {
        id: string,
        key: string,
        bucket: string,
        url: string,
    },
}

let keys: IKeysProps

switch (NODE_ENV) {
    case 'staging':
        keys = staging
        break
    case 'production':
        keys = production
        break
    default:
        keys = staging
        break
}

export {keys}
