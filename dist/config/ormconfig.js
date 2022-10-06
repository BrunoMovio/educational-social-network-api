"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const typeorm_naming_strategies_1 = require("typeorm-naming-strategies");
const post_orm_entity_1 = require("../modules/posts/infra/database/post.orm.entity");
const user_orm_entity_1 = require("../modules/users/infra/database/user.orm.entity");
exports.default = {
    type: "postgres",
    host: process.env.DB_HOST,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: Number(process.env.DB_PORT) || 5432,
    entities: [post_orm_entity_1.PostOrm, user_orm_entity_1.UserOrm],
    logging: false,
    migrations: [(0, path_1.join)(__dirname, "..", "migration", "*.{ts,js}")],
    cli: {
        migrationsDir: "src/migration",
    },
    namingStrategy: new typeorm_naming_strategies_1.SnakeNamingStrategy(),
};
//# sourceMappingURL=ormconfig.js.map