import { validate } from "./validation";

import { UserRepository } from "v1/api/user/user.entity";

import { ErrorUtil } from "v1/utils/error";

interface Injectables {
	UserRepository: UserRepository;
}

export interface FindByIdParams {
	userId: string;
}

export const findById = async ({
	UserRepository,
	...params
}: FindByIdParams & Injectables) => {
	await validate(params);

	const { userId } = params;

	const user = await UserRepository.findOne(userId);

	if (!user) {
		return ErrorUtil.notFound("NOT_FOUND", ["user not found"]);
	}

	return user;
};
