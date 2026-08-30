const app = require('./src/app')
const main = require('./src/Models/users')

main()

app.listen(3000, () => {
    console.log('server is running on port 3000');
    
})