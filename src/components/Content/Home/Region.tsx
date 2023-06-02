'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
const Card = styled.div`
	height: 300px;
	box-shadow: var(--shadow);
	border-radius: 10px;
	overflow: hidden;
	cursor: pointer;
	background-color: var(--secondary);
	transition: transform 0.3s;
	&:hover {
		transform: scale(1.06);
	}
`
const ImageContainer = styled.div`
	position: relative;
	background-size: cover;
	width: 100%;
	height: 140px;
	img {
		object-fit: cover;
	}
`
const ContentCard = styled.div`
	padding: 1rem;
	font-size: 0.8em;
	color: var(--font-color);
	display: flex;
	flex-direction: column;
	gap: 15px;
`
const Details = styled.div`
	display: flex;
	flex-direction: column;
	gap: 5px;
	text-transform: capitalize;
`
export const StyledSpan = styled.span`
	color: var(--detail-color);
`

type RegionProps = {
	name: string
	flag: string
	population: number
	region: string
	capital: string
}

export const Region = (props: RegionProps) => {
	return (
		<Link
			href={{
				pathname: `${props.name}`,
				query: {
					name: props.name,
				},
			}}
			style={{ textDecoration: 'none' }}>
			<Card>
				<ImageContainer>
					<Image
						alt={props.name}
						src={props.flag}
						fill
					/>
				</ImageContainer>
				<ContentCard>
					<h2>{props.name}</h2>
					<Details>
						<p>
							population: <StyledSpan>{props.population}</StyledSpan>
						</p>
						<p>
							region: <StyledSpan>{props.region}</StyledSpan>
						</p>
						<p>
							capital: <StyledSpan>{props.capital}</StyledSpan>
						</p>
					</Details>
				</ContentCard>
			</Card>
		</Link>
	)
}
