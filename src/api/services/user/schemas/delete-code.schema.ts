import { z } from 'zod'

export const DeleteEntryCodeSchema = z.object({
  code: z.string().length(4, 'Код должен содержать ровно 4 символа'),
})
export type DeleteEntryCodeRequest = z.infer<typeof DeleteEntryCodeSchema>
