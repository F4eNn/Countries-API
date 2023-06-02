'use client'
import styled from 'styled-components'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Wrapper } from '@/components/Header/Header'
import { Detail } from '@/components/Content/Detail/Detail'

const ContentContainer = styled(Wrapper)`
	height: 500px;
	flex-direction: column;
	& a {
		background-color: var(--secondary);
		box-shadow: var(--shadow);
		align-self: flex-start;
		border-radius: 5px;
		padding: 0.3rem 2.5rem;
		transition: background-color 0.3s;
		&:hover {
			background-color: var(--option);
		}
	}
`
const StyledMain = styled.main`
	margin-top: 3rem;
	height: calc(100% - 150px);
	display: flex;
	flex-direction: column;
`

const Flex = styled.div`
	margin-top: 4rem;
	height: 100%;
	width: 100%;
	display: flex;
	gap: 10%;
`
const CountryDetail = () => {
	const searchParams = useSearchParams()
	const search = searchParams.get('name')
	const [detailData, setDetailData] = useState<any>([])
	useEffect(() => {
		const fetchDetailCountry = async () => {
			const response = await fetch(`https://restcountries.com/v3.1/name/${search}`)
			const data = await response.json()
			if (data.length > 0) {
				setDetailData([data[0]])
			} else {
				setDetailData(data)
			}
		}
		fetchDetailCountry()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	

	const country = detailData?.map((country: any) => (
		<Detail
			key={country.name.common}
			flag={country.flags.png}
			name={country.name.common}
			nativeName={country.name.nativeName}
			region={country.region}
			subRegion={country.subregion}
			capital={country.capital && country.capital[0]}
			domainName={country.tld[0]}
			currencies={country.currencies}
			language={country.languages && country.languages}
			borders={country.borders}
			population={country.population}
		/>
	))
	const arrowIcon = (
		<FontAwesomeIcon
			icon={faArrowLeftLong}
			size='3x'
			style={{ color: 'var(--font-color)' }}
		/>
	)
	return (
		<StyledMain>
			<ContentContainer>
				<Link href='/'>{arrowIcon}</Link>
				<Flex>{country}</Flex>
			</ContentContainer>
		</StyledMain>
	)
}
export default CountryDetail
