'use client'
import styled from 'styled-components'
import { StyledSpan } from '../Home/Region'
import Image from 'next/image'
import { Borders } from './Borders'

const ImageContainer = styled.div`
	position: relative;
	width: 100%;
	height: auto;
	border-radius: 5px;
	overflow: hidden;
	img {
		object-position: contain;
	}
`
const ContentBox = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;

	color: var(--font-color);
	font-size: clamp(1em, 2.5vw - 0.1em, 1.3em);
`
const DetailBox = styled.div`
	display: flex;
	flex-direction: column;
`
const OtherCuntriesBox = styled.div`
	display: flex;
`
const H2 = styled.h2`
	color: var(--font-color);
	font-size: 2em;
`
const Flex = styled.div`
	display: flex;
	justify-content: space-between;
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
	currencies: string
	language: string
	flag: string
	borders: string[]
	name: string
	population: number
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
								Currencies: <StyledSpan>Euro</StyledSpan>
							</p>
							<p>
								Languages: <StyledSpan>Polish</StyledSpan>
							</p>
						</ParaContainer>
					</Flex>
				</DetailBox>
				<OtherCuntriesBox>
                    <Borders borders={props.borders}/>
                    Border Countries:</OtherCuntriesBox>
			</ContentBox>
		</>
	)
}
