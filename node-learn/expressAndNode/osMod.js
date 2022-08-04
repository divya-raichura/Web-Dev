const os = require("os");

// info about current user
const user = os.userInfo();

// how long the system is running in secs
// method returns system uptime in seconds
let up = os.uptime();

// other methods
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMem: os.freemem(),
};
