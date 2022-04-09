import create from 'zustand'

interface Props {
  servicesSectionContent: string
  setServicesSectionContent: (activeSection: string) => void
}

export const useServicesContentStore = create<Props>(set => ({
  servicesSectionContent: 'default',

  setServicesSectionContent: (activeSection: string) =>
    set({ servicesSectionContent: activeSection }),
}))
