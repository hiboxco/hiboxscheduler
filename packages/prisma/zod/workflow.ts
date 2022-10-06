import * as z from "zod"
import * as imports from "../zod-utils"
import { WorkflowTriggerEvents, TimeUnit } from "@prisma/client"
import { CompleteUser, UserModel, CompleteWorkflowsOnEventTypes, WorkflowsOnEventTypesModel, CompleteWorkflowStep, WorkflowStepModel } from "./index"

export const _WorkflowModel = z.object({
  id: z.number().int(),
  name: z.string(),
  userId: z.number().int(),
  trigger: z.nativeEnum(WorkflowTriggerEvents),
  time: z.number().int().nullish(),
  timeUnit: z.nativeEnum(TimeUnit).nullish(),
})

export interface CompleteWorkflow extends z.infer<typeof _WorkflowModel> {
  user: CompleteUser
  activeOn: CompleteWorkflowsOnEventTypes[]
  steps: CompleteWorkflowStep[]
}

/**
 * WorkflowModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WorkflowModel: z.ZodSchema<CompleteWorkflow> = z.lazy(() => _WorkflowModel.extend({
  user: UserModel,
  activeOn: WorkflowsOnEventTypesModel.array(),
  steps: WorkflowStepModel.array(),
}))
