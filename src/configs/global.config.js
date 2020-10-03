module.exports = {
    PORT: process.env.PORT || '5000',
    HOST: process.env.HOST || 'http://localhost',
    FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:4200',
    DATABASE_USER: process.env.DATABASE_USER || 'root',
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD || 'root',
    DATABASE_NAME: process.env.DATABASE_NAME || 'emerhub',
    DATABASE_HOST: process.env.DATABASE_HOST || 'localhost',
    DATABASE_DIALECT: process.env.DATABASE_DILECT || 'mysql',

    SEQUELIZE_SYNC_OPTIONS: {
        alter: false
    }
}
