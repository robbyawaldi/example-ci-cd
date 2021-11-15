module.exports = {
   "type": "postgres",
   "host": process.env.HOST,
   "port": 5432,
   "username": "postgres",
   "password": "zxcasd",
   "database": "postgres",
   "synchronize": true,
   "logging": false,
   "entities": ["dist/entity/**/*.js"],
   "migrations": ["dist/migration/**/*.js"],
   "subscribers": ["dist/subscriber/**/*.js"],
   "seeds": ["dist/seeds/**/*.js"],
   "factories": ["dist/factories/**/*.js"]
}