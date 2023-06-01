import React from 'react'

interface RegionContextType {
	inputValue: string
	regionValue: string
    isFilterActive: boolean
	getInputValue: (value: string) => void
    getRegionValue: (value: string) => void
    resetFilters: (value: boolean) => void
}

export const RegionContext = React.createContext<RegionContextType | undefined>(undefined)
