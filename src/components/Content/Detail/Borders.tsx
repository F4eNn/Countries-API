'use client'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@/components/Header/Header'
const ButtonBorderBox = styled(Button)`
	height: 35px;
	width: 85px;
	padding-inline: 0.5rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	border-radius: 5px;
	background-color: var(--secondary);
	box-shadow: var(--shadow);
	transition: background-color 0.3s;
	&:hover {
		background-color: var(--option);
	}
`
export const NotExist = styled.span`
	color: var(--not-exist);
	font-style: italic;
`
type BordersProps = {
	borders: string[]
	onGetNewPath: (value: string) => void
}

export const Borders = (props: BordersProps) => {
	const [fullNames, setFullName] = useState<string[]>([])
	const [isBorderCountry, setIsBorderCountry] = useState(false)

	useEffect(() => {
		const fetchDetailCountry = async () => {
			if (!props.borders) {
				setIsBorderCountry(true)
				return
			}
			setIsBorderCountry(false)
			for (const country of props.borders) {
				const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
				const data = await response.json()
				const countryName = data[0].name.common
				setFullName(prev => [...prev, countryName])
			}
		}
		fetchDetailCountry()

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const uniqueArr = Array.from(new Set(fullNames))
	const goToBorderCountries = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement
		props.onGetNewPath(target.textContent!)
	}

	const uniqueCountry = uniqueArr.map(item => (
		<ButtonBorderBox
			onClick={goToBorderCountries}
			key={item}>
			{item}
		</ButtonBorderBox>
	))

	const borderCountry = !isBorderCountry ? uniqueCountry : <NotExist>does not border countries</NotExist>

	return <>{borderCountry}</>
}
