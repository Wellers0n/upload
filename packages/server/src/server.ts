import app from "./app";

const port = process.env.PORT || 3001
const environment = process.env.ENVIRONMENT || 'development'

app.listen(port, () => {
  console.log(`We are live on ${port}`)
  console.log(`Environment: ${environment}`)
})