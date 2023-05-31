'use client'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons'
import { Button } from '../Header/Header'
import { useState } from 'react'

const FilteredBox = styled.div`
	position: relative;
	min-width: 225px;
	width: 60%;
	display: flex;
	gap: 20px;
	justify-content: flex-start;
	flex-direction: column;
	@media (min-width: 768px) {
		flex-direction: row-reverse;
		justify-content: flex-start;
	}
`
const Select = styled(Button)`
	position: relative;
	font-size: 1em;
	height: 40px;
	width: 100%;
	display: flex;
	margin-top: 2rem;
	align-items: center;
	justify-content: space-between;
	padding-inline: 1.4rem;
	background-color: var(--secondary);
	box-shadow: 0 0 5px 0px #0000005e;
	border-radius: 5px;
	&:hover {
		background-color: var(--option);
	}

	@media (min-width: 768px) {
		margin-top: 0;
		width: 225px;
	}
`
const Option = styled.div`
	position: absolute;
	top: 100%;
	left: 0;
	padding: 0.5rem 0;
	margin-top: 1rem;
	width: 100%;
	display: flex;
	flex-direction: column;
	background-color: var(--secondary);
	box-shadow: 0 0 5px 0px #0000005e;
	border-radius: 5px;
	@media (min-width: 768px) {
		width: 225px;
		left: unset;
		right: 0;
	}
`

const OptionButton = styled(Button)`
	padding: 0.5rem;
	background-color: transparent;
	transition: background-color 0.3s;
	&:hover {
		background-color: var(--option);
	}
`

const FilteredItemButton = styled(Button)`
	background-color: var(--secondary);
	height: 40px;
	padding-inline: 1rem;
	display: flex;
	gap: 1rem;
	align-items: center;
	justify-content: space-between;
	border-radius: 5px;
	order: 3;
	width: 125px;
	box-shadow: 0 0 5px 0px #0000005e;
`

export const FilteredItems = () => {
	const [isShowOptions, setShowOptions] = useState(false)
	const [optionValue, setOptionValue] = useState('')
	const [showFilteredItem, setShowFilteredItem] = useState(false)

	const showOptions = () => {
		setShowOptions(prev => !prev)
	}

	const addOptionValue = (e: React.MouseEvent<HTMLDivElement>) => {
		const target = e.target as HTMLButtonElement
		setOptionValue(target.value)
		setShowOptions(false)
		setShowFilteredItem(true)
	}
	const deleteFilteredItem = () => {
		setShowFilteredItem(false)
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
		<FilteredBox>
			{filteredButton}
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
	)
}
