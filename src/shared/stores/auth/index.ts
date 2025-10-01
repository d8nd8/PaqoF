import { create } from 'zustand'
import type { ILockScreenStore } from '@/shared/stores/auth/types'

const useLockScreenStore = create<ILockScreenStore>((set) => ({
  open: false,
  setOpen: (val) => set({ open: val }),
}))

export default useLockScreenStore