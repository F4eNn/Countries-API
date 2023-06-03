'use client'
import styled from 'styled-components'
import { StyledSpan } from '../Home/Region'
import Image from 'next/image'
import { Borders } from './Borders'
import React from 'react'

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: 370px;
	border-radius: 5px;
	overflow: hidden;
	box-shadow: var(--shadow);
	img {
		object-position: contain;
	}

	@media (max-width: 992px) {
		height: 450px;
		width: 75%;
	}
	@media (max-width: 576px) {
		width: 100%;

		height: 400px;
	}
	@media (max-width: 375px) {
		height: 300px;
	}
`
const ContentBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	color: var(--font-color);
	font-size: clamp(1.15em, 1.5vw, 1.3em);
	@media (max-width: 992px) {
		margin-top: 2rem;
		justify-content: flex-start;
	}
	
`
const DetailBox = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 2rem;
`
const OtherCuntriesBox = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	margin: 2rem 0 2rem;
	
	`
const BoxButtonBorders = styled.div`
	display: flex;
	gap: 15px;
	flex-wrap: wrap;

`
const H2 = styled.h2`
	color: var(--font-color);
	font-size: 2em;
`
const Flex = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 3rem;
	@media (max-width: 992px) {
		justify-content: flex-start;
		gap: 5rem;
	}
	@media (max-width: 576px) {
		flex-direction: column;
		gap: 3rem;
	}
`
const ParaContainer = styled.div`
	display: flex;
	gap: 10px;
	flex-direction: column;
	font-size: 0.9em;
`

type DetailProps = {
	nativeName: string
	region: string
	subRegion: string
	capital: string
	domainName: string
	currencies: string | React.JSX.Element | undefined
	language: string | React.JSX.Element | undefined
	flag: string
	borders: string[]
	name: string
	population: number
	onClick: (value: string) => void
}

export const Detail = (props: DetailProps) => {
	return (
		<>
			<ImageContainer>
				<Image
					alt={props.name}
					src={props.flag}
					fill
					quality={100}
				/>
			</ImageContainer>
			<ContentBox>
				<H2>{props.name}</H2>
				<DetailBox>
					<Flex>
						<ParaContainer>
							<p>
								NativeName: <StyledSpan>{props.name}</StyledSpan>
							</p>
							<p>
								Population: <StyledSpan>{props.population}</StyledSpan>
							</p>
							<p>
								Region: <StyledSpan>{props.region}</StyledSpan>
							</p>
							<p>
								Sub Region: <StyledSpan>{props.subRegion}</StyledSpan>
							</p>
							<p>
								Capital: <StyledSpan>{props.capital}</StyledSpan>
							</p>
						</ParaContainer>

						<ParaContainer>
							<p>
								Top Level Domain: <StyledSpan>{props.domainName}</StyledSpan>
							</p>
							<p>
								Currencies: <StyledSpan>{props.currencies}</StyledSpan>
							</p>
							<p>
								Languages: <StyledSpan>{props.language}</StyledSpan>
							</p>
						</ParaContainer>
					</Flex>
				</DetailBox>
				<OtherCuntriesBox>
					Border Countries:
					<BoxButtonBorders>
						<Borders
							onGetNewPath={props.onClick}
							borders={props.borders}
						/>
					</BoxButtonBorders>
				</OtherCuntriesBox>
			</ContentBox>
		</>
	)
}
