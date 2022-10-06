import * as dotenv from "dotenv";
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: envFile });

import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 3003, () => {
    console.log(`Listening on port ${process.env.PORT || 3003}`);
  });
}

bootstrap();
