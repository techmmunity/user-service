import { UpdateTokenParams } from ".";

import { ErrorUtil } from "utils/error";
import { TimeUtil } from "utils/time";
import { yup } from "utils/yup";

import { IntegrationsValues } from "core/enums/integrations";

const schema = yup.object().shape({
	userId: yup.string().required().strict().uuid(),
	type: yup.string().required().strict().oneOf(IntegrationsValues()),
	accessToken: yup.string().required().strict(),
	refreshToken: yup.string().required().strict(),
	expirationDate: yup.date().required().strict().min(TimeUtil.newDate()),
});

export const validate = async (params: UpdateTokenParams) =>
	schema
		.validate(params)
		.catch(err => ErrorUtil.badRequest("INVALID_PARAMS", err.errors));
