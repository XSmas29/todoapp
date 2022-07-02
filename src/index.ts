import "reflect-metadata";
import { DataSource } from "typeorm";

const DATABASE = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "todoapp",
});

DATABASE.initialize()
    .then(() => {
        // here you can start to work with your database
    })
    .catch((error) => console.log(error))