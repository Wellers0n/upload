/* eslint global-require: 0 */
/* eslint import/no-dynamic-require: 0 */

module.exports = env => {
    let mode = 'staging'
    if (env.production) {
        mode = 'production'
    } else if (env.common) {
        mode = 'common'
    }

    return require(`./webpack/webpack.${mode}`)
}
