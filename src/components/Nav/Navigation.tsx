'use client'
import styled from 'styled-components'
import { Button } from '../Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FilteredItems } from './FilteredItems'
import React, { FormEvent, useState, useContext } from 'react'
import { RegionContext } from '@/storage/region-context'

const Form = styled.form`
	position: relative;
	background-color: var(--secondary);
	height: 40px;
	display: flex;
	flex-direction: row-reverse;
	box-shadow: var(--shadow);
	border-radius: 5px;
	&:focus-within {
		border: 1px solid var(--font-color);
	}
	@media (min-width: 768px) {
		width: 50%;
	}
`
const StyledInput = styled.input`
	height: 100%;
	width: 100%;
	border: none;
	background-color: transparent;
	color: var(--font-color);
	&:focus {
		outline: none;
	}
	&::placeholder {
		color: var(--gray);
	}
`
const SubmitButton = styled.div`
	display: flex;
	align-items: center;
	padding-inline: 1rem;
	&.change-color {
		color: var(--font-color);
	}
`


export const Navigaton = () => {

	const regionCtx = useContext(RegionContext)

	const onInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		regionCtx?.getInputValue(e.target.value)
	}
	
	const onSubmit = (e: FormEvent) => {
		e.preventDefault()
	}
	const loupIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
	return (
		<>
			<Form onSubmit={onSubmit}>
				<StyledInput onChange={onInput} />
				<SubmitButton
					className='change-color'>
					{loupIcon}
				</SubmitButton>
			</Form>
			<FilteredItems />
		</>
	)
}
