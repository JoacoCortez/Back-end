const config = {
    client: 'mysql',
    connection: {
        host: '127.0.0.1',
        user: 'root',
        port: 3306,
        password: '',
        database: 'db'
    },
    pool: { min: 0, max: 7 }
}

module.exports = {config}