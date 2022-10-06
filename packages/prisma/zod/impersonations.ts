import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel } from "./index"

export const _ImpersonationsModel = z.object({
  id: z.number().int(),
  createdAt: z.date(),
  impersonatedUserId: z.number().int(),
  impersonatedById: z.number().int(),
})

export interface CompleteImpersonations extends z.infer<typeof _ImpersonationsModel> {
  impersonatedUser: CompleteUser
  impersonatedBy: CompleteUser
}

/**
 * ImpersonationsModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const ImpersonationsModel: z.ZodSchema<CompleteImpersonations> = z.lazy(() => _ImpersonationsModel.extend({
  impersonatedUser: UserModel,
  impersonatedBy: UserModel,
}))
