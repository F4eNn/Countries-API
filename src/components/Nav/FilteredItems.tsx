'use client'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Header/Header'
import { useState, useContext } from 'react'
import { RegionContext } from '@/storage/region-context'
import { Region } from '../Content/Home/Region'

const OptionButtons = styled.button`
	display: flex;
	align-items: center;
	justify-content: space-between;
	cursor: pointer;
	border: none;
	color: var(--font-color);
	border-radius: 5px;
	box-shadow: var(--shadow);
	transition: background-color 0.3s;

	&:hover {
		background-color: var(--option);
	}
`

const FilteredBox = styled.div`
	position: relative;
	display: flex;
	justify-content: flex-start;
	width: 60%;
	@media (min-width: 768px) {
		width: 225px;
		flex-direction: row-reverse;
		justify-content: flex-start;
	}
`
const Select = styled(OptionButtons)`
	position: relative;
	height: 40px;
	width: 100%;
	padding-inline: 1.4rem;
	background-color: var(--secondary);

	@media (min-width: 768px) {
		width: 225px;
	}
`
const Option = styled.div`
	position: absolute;
	top: 80%;
	margin-top: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--secondary);
	box-shadow: 0 0 5px 0px #0000005e;
	border-radius: 5px;
	z-index: 100;
	@media (min-width: 768px) {
		width: 225px;
	}
`

const OptionButton = styled(Button)`
	padding: 0.6rem;
	background-color: transparent;
	transition: background-color 0.3s;
	&:hover {
		background-color: var(--option);
	}
`

const FilteredItemButton = styled(OptionButtons)`
	background-color: var(--secondary);
	height: 40px;
	padding-inline: 1rem;
	gap: 1rem;
	width: 125px;

	@media (min-width: 768px) {
		margin-left: auto;
	}
`

export const FilteredItems = () => {
	const [isShowOptions, setShowOptions] = useState(false)
	const [optionValue, setOptionValue] = useState('')
	const [showFilteredItem, setShowFilteredItem] = useState(false)

	const regionCtx = useContext(RegionContext)

	const showOptions = () => {
		setShowOptions(prev => !prev)
	}
	const addOptionValue = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLButtonElement
		setOptionValue(target.value)
		setShowOptions(false)
		setShowFilteredItem(true)
		regionCtx?.resetFilters(true)
		regionCtx?.getRegionValue(target.value.toLowerCase())
	}
	const deleteFilteredItem = () => {
		setShowFilteredItem(false)
		regionCtx?.resetFilters(false)
	}
	const chevronDownIcon = <FontAwesomeIcon icon={faChevronDown} />
	const removeIcon = (
		<FontAwesomeIcon
			icon={faCircleXmark}
			style={{ color: 'red' }}
		/>
	)
	const filteredButton = showFilteredItem && (
		<FilteredItemButton onClick={deleteFilteredItem}>
			{optionValue} {removeIcon}
		</FilteredItemButton>
	)
	return (
		<>
			{filteredButton}
			<FilteredBox>
				<Select onClick={showOptions}>
					Filter by Region
					<div>{chevronDownIcon}</div>
				</Select>
				{isShowOptions && (
					<Option onClick={addOptionValue}>
						<OptionButton value='Africa'>Africa</OptionButton>
						<OptionButton value='America'>America</OptionButton>
						<OptionButton value='Asia'>Asia</OptionButton>
						<OptionButton value='Europe'>Europe</OptionButton>
						<OptionButton value='Oceania'>Oceania</OptionButton>
					</Option>
				)}
			</FilteredBox>
		</>
	)
}
