import * as z from "zod"
import * as imports from "../zod-utils"
import { BookingStatus } from "@prisma/client"
import { CompleteUser, UserModel, CompleteBookingReference, BookingReferenceModel, CompleteEventType, EventTypeModel, CompleteAttendee, AttendeeModel, CompleteDailyEventReference, DailyEventReferenceModel, CompletePayment, PaymentModel, CompleteDestinationCalendar, DestinationCalendarModel, CompleteWorkflowReminder, WorkflowReminderModel } from "./index"

// Helper schema for JSON fields
type Literal = boolean | number | string
type Json = Literal | { [key: string]: Json } | Json[]
const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodSchema<Json> = z.lazy(() => z.union([literalSchema, z.array(jsonSchema), z.record(jsonSchema)]))

export const _BookingModel = z.object({
  id: z.number().int(),
  uid: z.string(),
  userId: z.number().int().nullish(),
  eventTypeId: z.number().int().nullish(),
  title: z.string(),
  description: z.string().nullish(),
  customInputs: jsonSchema,
  startTime: z.date(),
  endTime: z.date(),
  location: z.string().nullish(),
  createdAt: z.date(),
  updatedAt: z.date().nullish(),
  status: z.nativeEnum(BookingStatus),
  paid: z.boolean(),
  destinationCalendarId: z.number().int().nullish(),
  cancellationReason: z.string().nullish(),
  rejectionReason: z.string().nullish(),
  dynamicEventSlugRef: z.string().nullish(),
  dynamicGroupSlugRef: z.string().nullish(),
  rescheduled: z.boolean().nullish(),
  fromReschedule: z.string().nullish(),
  recurringEventId: z.string().nullish(),
  smsReminderNumber: z.string().nullish(),
})

export interface CompleteBooking extends z.infer<typeof _BookingModel> {
  user?: CompleteUser | null
  references: CompleteBookingReference[]
  eventType?: CompleteEventType | null
  attendees: CompleteAttendee[]
  dailyRef?: CompleteDailyEventReference | null
  payment: CompletePayment[]
  destinationCalendar?: CompleteDestinationCalendar | null
  workflowReminders: CompleteWorkflowReminder[]
}

/**
 * BookingModel contains all relations on your model in addition to the scalars
 *
 * NOTE: Lazy required in case of potential circular dependencies within schema
 */
export const BookingModel: z.ZodSchema<CompleteBooking> = z.lazy(() => _BookingModel.extend({
  user: UserModel.nullish(),
  references: BookingReferenceModel.array(),
  eventType: EventTypeModel.nullish(),
  attendees: AttendeeModel.array(),
  dailyRef: DailyEventReferenceModel.nullish(),
  payment: PaymentModel.array(),
  destinationCalendar: DestinationCalendarModel.nullish(),
  workflowReminders: WorkflowReminderModel.array(),
}))
