const http = require('http');

const app = require('./app');
const {
    sequelize,
    global: {
        SEQUELIZE_SYNC_OPTIONS
    }
} = require('./configs');

const server = http.createServer(app);

sequelize.sync(SEQUELIZE_SYNC_OPTIONS).then(() => {
    server.listen('5001', () => {
        console.log('Server listen on port 5001');
    })
}).catch(err => {
    console.log(err);
})


