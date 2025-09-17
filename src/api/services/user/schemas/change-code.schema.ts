import { z } from 'zod'

export const ChangeEntryCodeSchema = z.object({
  oldCode: z.string().length(4, 'Старый код должен содержать ровно 4 символа'),
  newCode: z.string().length(4, 'Новый код должен содержать ровно 4 символа'),
})
export type ChangeEntryCodeRequest = z.infer<typeof ChangeEntryCodeSchema>
