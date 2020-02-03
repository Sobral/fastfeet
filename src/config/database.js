module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'docker',
  password: 'fastfeet',
  database: 'fastfeet',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
