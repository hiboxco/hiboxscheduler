import * as z from "zod"
import * as imports from "../zod-utils"
import { WorkflowActions, WorkflowTemplates } from "@prisma/client"
import { CompleteWorkflow, WorkflowModel, CompleteWorkflowReminder, WorkflowReminderModel } from "./index"

export const _WorkflowStepModel = z.object({
  id: z.number().int(),
  stepNumber: z.number().int(),
  action: z.nativeEnum(WorkflowActions),
  workflowId: z.number().int(),
  sendTo: z.string().nullish(),
  reminderBody: z.string().nullish(),
  emailSubject: z.string().nullish(),
  template: z.nativeEnum(WorkflowTemplates),
})

export interface CompleteWorkflowStep extends z.infer<typeof _WorkflowStepModel> {
  workflow: CompleteWorkflow
  workflowReminders: CompleteWorkflowReminder[]
}

/**
 * WorkflowStepModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WorkflowStepModel: z.ZodSchema<CompleteWorkflowStep> = z.lazy(() => _WorkflowStepModel.extend({
  workflow: WorkflowModel,
  workflowReminders: WorkflowReminderModel.array(),
}))
