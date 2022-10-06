import * as z from "zod"
import * as imports from "../zod-utils"
import { WorkflowMethods } from "@prisma/client"
import { CompleteBooking, BookingModel, CompleteWorkflowStep, WorkflowStepModel } from "./index"

export const _WorkflowReminderModel = z.object({
  id: z.number().int(),
  bookingUid: z.string(),
  method: z.nativeEnum(WorkflowMethods),
  scheduledDate: z.date(),
  referenceId: z.string().nullish(),
  scheduled: z.boolean(),
  workflowStepId: z.number().int(),
})

export interface CompleteWorkflowReminder extends z.infer<typeof _WorkflowReminderModel> {
  booking?: CompleteBooking | null
  workflowStep: CompleteWorkflowStep
}

/**
 * WorkflowReminderModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const WorkflowReminderModel: z.ZodSchema<CompleteWorkflowReminder> = z.lazy(() => _WorkflowReminderModel.extend({
  booking: BookingModel.nullish(),
  workflowStep: WorkflowStepModel,
}))
