import { Logger } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";

import { MicroserviceOptions } from "./config/microservice";

import { AppModule } from "./app.module";

async function server() {
	const logger = new Logger("Main");

	const app = await NestFactory.createMicroservice(
		AppModule,
		MicroserviceOptions,
	);

	app.listen(() => logger.log("Server Ready"));
}

server();
