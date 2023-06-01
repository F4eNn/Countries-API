'use client'
import styled from 'styled-components'
import Image from 'next/image'
import { useState } from 'react'
const Container = styled.div`
	background-color: var(--secondary);
	padding: 1rem 0;
	box-shadow: 1px 1px 5px #25242445;
`
export const Button = styled.button`
	border: none;
	color: var(--font-color);
	cursor: pointer;
`
export const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: min(90%, 1440px);
	margin-inline: auto;
	font-size: clamp(0.7em, 2.5vw, 1em);
	font-weight: bold;
`
const H1 = styled.h1`
	font-size: 1.3em;
	color: var(--font-color);
`
const ToggleBox = styled(Button)`
	display: flex;
	padding: 0.5rem 1rem;
	background-color: transparent;
	color: var(--font-color);
	text-transform: capitalize;
`
export const Header = () => {
	const [isDarkMode, setIsDarkMode] = useState(false)
	const switchTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
		const target = e.target as HTMLButtonElement
		target.closest('body')?.classList.toggle('dark-mode')
		setIsDarkMode(prev => !prev)
	}
	return (
		<Container>
			<Wrapper>
				<H1>Where in the world?</H1>
				<ToggleBox onClick={switchTheme}>
					<Image
						alt=''
						src='/moonIcon.svg'
						height={15}
						width={30}
					/>
					{!isDarkMode ? 'dark mode' : 'light mode'}
				</ToggleBox>
			</Wrapper>
		</Container>
	)
}
