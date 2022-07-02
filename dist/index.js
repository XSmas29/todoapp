"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const DATABASE = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "todoapp",
});
DATABASE.initialize()
    .then(() => {
})
    .catch((error) => console.log(error));
//# sourceMappingURL=index.js.map