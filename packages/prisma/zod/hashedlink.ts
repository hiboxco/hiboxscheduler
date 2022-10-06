import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteEventType, EventTypeModel } from "./index"

export const _HashedLinkModel = z.object({
  id: z.number().int(),
  link: z.string(),
  eventTypeId: z.number().int(),
})

export interface CompleteHashedLink extends z.infer<typeof _HashedLinkModel> {
  eventType: CompleteEventType
}

/**
 * HashedLinkModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const HashedLinkModel: z.ZodSchema<CompleteHashedLink> = z.lazy(() => _HashedLinkModel.extend({
  eventType: EventTypeModel,
}))
