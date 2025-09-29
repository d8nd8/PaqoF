import { z } from 'zod'


export const SetEntryCodeSchema = z.object({
  code: z.string().length(4, 'Код должен содержать ровно 4 символа'),
})
export type SetEntryCodeRequest = z.infer<typeof SetEntryCodeSchema>


export const ChangeEntryCodeSchema = z.object({
  oldCode: z.string().length(4, 'Старый код должен содержать ровно 4 символа'),
  newCode: z.string().length(4, 'Новый код должен содержать ровно 4 символа'),
})
export type ChangeEntryCodeRequest = z.infer<typeof ChangeEntryCodeSchema>
