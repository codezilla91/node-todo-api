var env = process.env.NODE_ENV || 'dev';

const dev =  {
    PORT:3005,
    MONGODB_URI:'mongodb://127.0.0.1:27017/ToDoApp',
    env: env
}

const test = {
    PORT : 3005,
    MONGODB_URI : 'mongodb://127.0.0.1:27017/ToDoAppTest',
    env: env
}

module.exports = env === 'dev' ? dev : test;