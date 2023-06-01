import { RegionContext } from './region-context'
import { useState } from 'react'
export const RegionProvider = ({ children }: { children: React.ReactNode }) => {
	const [inputValue, setInputValue] = useState('')
	const [regionValue, setRegionValue] = useState('')
	const [isFilterActive, setIsFilterActive ] = useState(false)

	const getInputValue = (value: string) => {
		setInputValue(value)
	}
	const getRegionValue = (value: string) => {
		setRegionValue(value)
	}
	const resetFilters = (value: boolean) => {
		setIsFilterActive(value)
	}



	const contextValue = {
		inputValue,
		regionValue,
		isFilterActive,
		getInputValue,
		getRegionValue,
		resetFilters
	}

	return <RegionContext.Provider value={contextValue}>{children}</RegionContext.Provider>
}
