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
const URL = 'https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region'
export const Regions = () => {
	const regionCtx = useContext(RegionContext)
	const [inputValue, setInputValue] = useState<string | undefined>('')
	const [filteredFromName, setFilterredFromName] = useState<any>(null)
	useEffect(() => {
		setInputValue(regionCtx?.inputValue.toLowerCase())
	}, [regionCtx?.inputValue])

	useEffect(() => {
		const fetChData = async () => {
			const response = await fetch(URL)
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
		return data.filter((item: any) => item.name.common.toLowerCase().includes(inputValue))
	}

	const renderCountryFromName = filteredFromName?.map((country: any, index: number) => (
		<Region
			key={index}
			capital={country.capital[0]}
			flag={country.flags.png}
			name={country.name.common}
			population={country.population}
			region={country.region}
		/>
	))
	const filteredFromRegion = filteredFromName?.filter((item: any) =>
		item.region.toLowerCase().includes(regionCtx?.regionValue)
	)
	const renderCountryFromRegion = filteredFromRegion?.map((country: any, index: number) => (
		<Region
			key={index}
			capital={country.capital[0]}
			flag={country.flags.png}
			name={country.name.common}
			population={country.population}
			region={country.region}
		/>
	))
	const relevantRender = regionCtx?.isFilterActive ? renderCountryFromRegion : renderCountryFromName
	return <RegionContaine>{relevantRender}</RegionContaine>
}
