import { Module } from "@nestjs/common";

import { InterestsService } from "./interests.service";

import { InterestsResolver } from "./interests.resolver";

@Module({
	providers: [InterestsService, InterestsResolver],
})
export class InterestsModule {
	//
}
