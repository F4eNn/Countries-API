'use client'
import styled from 'styled-components'
import { Button } from '../Header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FilteredItems } from './FilteredItems'

const Form = styled.form`
	background-color: var(--secondary);
	height: 40px;
	display: flex;
	flex-direction: row-reverse;
	box-shadow: 0 0 5px 0px #0000005e;
	border-radius: 5px;
	overflow: hidden;
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
const SubmitButton = styled(Button)`
	padding-inline: 1rem;
	background-color: transparent;
	&.change-color {
		color: var(--font-color);
	}
`

export const Navigaton = () => {
	const loupIcon = <FontAwesomeIcon icon={faMagnifyingGlass} />
	return (
		<>
			<Form>
				<StyledInput />
				<SubmitButton
					type='button'
					className='change-color'>
					{loupIcon}
				</SubmitButton>
			</Form>
			<FilteredItems />
		</>
	)
}
