const res = require('express/lib/response');
const { app } = require('./app');

const PORT = process.env.PORT || 3001;

const server = app.listen(PORT, () => console.log(
  `Server is running on PORT: ${PORT}`
));

module.export = server;