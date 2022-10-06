import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteUser, UserModel } from "./index"

export const _FeedbackModel = z.object({
  id: z.number().int(),
  date: z.date(),
  userId: z.number().int(),
  rating: z.string(),
  comment: z.string().nullish(),
})

export interface CompleteFeedback extends z.infer<typeof _FeedbackModel> {
  user: CompleteUser
}

/**
 * FeedbackModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const FeedbackModel: z.ZodSchema<CompleteFeedback> = z.lazy(() => _FeedbackModel.extend({
  user: UserModel,
}))
