'use client'
import styled from 'styled-components'
import { Region } from './Region'
import { useEffect, useState, useContext } from 'react'
import { RegionContext } from '@/storage/region-context'
const RegionContaine = styled.div`
	margin-top: 3rem;
	display: grid;
	grid-template-columns: repeat(auto-fill, 225px);
	place-content: center;
	grid-gap: 4rem;
	width: 90%;
	@media (min-width: 768px) {
		width: 100%;
	}
`
const Loader = styled.div``

interface DataTypes {
	name: string
	topLevelDomain: string[]
	alpha2Code: string
	alpha3Code: string
	callingCodes: string[]
	capital?: string
	altSpellings?: string[]
	subregion: string
	region: string
	population: number
}

export const Regions = () => {
	const regionCtx = useContext(RegionContext)
	const [inputValue, setInputValue] = useState<string | undefined>('')
	const [filteredFromName, setFilterredFromName] = useState<any>(null)
	const [optionsAreActive, setOptionsAreActive] = useState(false)
	console.log()
	useEffect(() => {
		setInputValue(regionCtx?.inputValue)
	}, [regionCtx?.inputValue])

	useEffect(() => {
		const fetChData = async () => {
			const response = await fetch(`/data2.json`)
			if (!response) {
			}
			const data = await response.json()

			const generateCountries = filteredName(data)
			setFilterredFromName(generateCountries)
		}
		fetChData()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [inputValue])

	const filteredName = (data: any) => {
		return data.filter((item: any) => item.name.toLowerCase().includes(inputValue))
	}

	const renderCountryFromName = filteredFromName?.map((country: any, index: number) => (
		<Region
			key={index}
			capital={country.capital}
			flag={country.flag}
			name={country.name}
			population={country.population}
			region={country.region}
		/>
	))
	const filteredFromRegion = filteredFromName?.filter((item: any) => item.region.includes(regionCtx?.regionValue))
	const renderCountryFromRegion = filteredFromRegion?.map((country: any, index: number) => (
		<Region
			key={index}
			capital={country.capital}
			flag={country.flag}
			name={country.name}
			population={country.population}
			region={country.region}
		/>
	))
		const relevantRender = regionCtx?.isFilterActive ? renderCountryFromRegion : renderCountryFromName
	return <RegionContaine>{relevantRender}</RegionContaine>
}
