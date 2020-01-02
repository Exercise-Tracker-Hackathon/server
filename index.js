const server = require("./api/server.js");

const port = process.env.PORT || 6000;

server.listen(port, function() {
  console.log(`\n 🔥🔥🔥 Service is running on localhost:${port} 🔥🔥🔥 \n`);
});
