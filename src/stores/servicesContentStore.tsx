import create from 'zustand'


interface Props {

    servicesSectionContent: string
    
    setServicesSectionContent: (activeSection: string) => void

}


const useServicesContentStore = create<Props>(set => ({

    servicesSectionContent: 'default',

    setServicesSectionContent: (activeSection: string) => set({ servicesSectionContent: activeSection }),

}))


export default useServicesContentStore
