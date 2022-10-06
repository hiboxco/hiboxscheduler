import * as z from "zod"
import * as imports from "../zod-utils"
import { CompleteWorkflow, WorkflowModel, CompleteEventType, EventTypeModel } from "./index"

export const _WorkflowsOnEventTypesModel = z.object({
  id: z.number().int(),
  workflowId: z.number().int(),
  eventTypeId: z.number().int(),
})

export interface CompleteWorkflowsOnEventTypes extends z.infer<typeof _WorkflowsOnEventTypesModel> {
  workflow: CompleteWorkflow
  eventType: CompleteEventType
}

/**
 * WorkflowsOnEventTypesModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WorkflowsOnEventTypesModel: z.ZodSchema<CompleteWorkflowsOnEventTypes> = z.lazy(() => _WorkflowsOnEventTypesModel.extend({
  workflow: WorkflowModel,
  eventType: EventTypeModel,
}))
