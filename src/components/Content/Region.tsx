'use client'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter, } from 'next/navigation'
import { NextRouter } from 'next/router'
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
const StyledSpan = styled.span`
	color: var(--detail-color);
`

type RegionProps = {
	name: string
	flag: string
	population: number
	region: string
	capital: string
}

type SendProps = NextRouter 

export const Region = (props: RegionProps) => {
	const router: any = useRouter()

	const sendProps = () => {
		router.push({
			pathname: `/${props.name}`,
			query: {
				capital: props.capital,
				flag: props.flag,
				name: props.name,
				population: props.population,
				region: props.region,
			},
		})
	}

	return (
		<Link
			onClick={sendProps}
			href='#'
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
