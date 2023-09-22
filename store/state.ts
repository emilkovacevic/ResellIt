import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Define a type for your state
interface AppState {
  currentStep: number
  selectedCategory: string | null
  files: File[]
  title: string
  price: number
  description: string
  mediaUrls: string[]
}

// Define actions that can update the state
type AppActions = {
  setCurrentStep: (step: number) => void
  setSelectedCategory: (category: string | null) => void
  setFiles: (files: File[]) => void
  setTitle: (title: string) => void
  setPrice: (price: number) => void
  setDescription: (description: string) => void
  setMediaUrls: (urls: string[]) => void
};

const useAppState = create<AppState & AppActions>()(
  persist(
    (set) => ({
      currentStep: 1,
      selectedCategory: null,
      files: [],
      title: '',
      price: 0,
      description: '',
      mediaUrls: [],
     
      setCurrentStep: (step: number) => set({ currentStep: step }),
      setSelectedCategory: (category) => set({ selectedCategory: category }),
      setFiles: (files: File[]) => set({ files: files }),
      setTitle: (title: string) => set({ title: title }),
      setPrice: (price: number) => set({ price: price }),
      setDescription: (description: string) => set({ description: description }),
      setMediaUrls: (urls: string[]) => set({mediaUrls: [...urls] }),
    }),
    {
      name: 'global',
      getStorage: () => localStorage,
    }
  )
);

export default useAppState
