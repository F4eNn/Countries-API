'use client'
import styled from 'styled-components'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeftLong } from '@fortawesome/free-solid-svg-icons'
import { Detail } from '@/components/Content/Detail/Detail'
import { NotExist } from '@/components/Content/Detail/Borders'

const ContentContainer = styled.div`
	width: min(90%, 1440px);
	margin-inline: auto;
	display: flex;
	flex-direction: column;
	font-size: 1em;
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
	gap: 100px;
	@media (max-width: 992px) {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 0;
	}
	@media (max-width: 576px) {
		align-items: flex-start;
	}
`
type CountryApi = {
	subregion: any
	capital: any
	tld: any[]
	languages: DataApi
	currencies: DataApi
	name: { common: string; nativeName: string }
	flags: { png: string }
	region: string
	borders: string[]
	population: number
}

interface DataApi {
	[key: string]: { name: any }
}
const CountryDetail = () => {
	const searchParams = useSearchParams()
	const search = searchParams.get('name')
	const [detailData, setDetailData] = useState<any>([])
	const [isCountry, setIsCountry] = useState(search)

	const getBorderCountry = (value: string) => {
		setIsCountry(value)
	}

	useEffect(() => {
		const fetchDetailCountry = async () => {
			const response = await fetch(`https://restcountries.com/v3.1/name/${isCountry}`)
			const data = await response.json()
			if (data.length > 0) {
				setDetailData([data[0]])
			} else {
				setDetailData(data)
			}
		}
		fetchDetailCountry()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isCountry])

	const country = detailData?.map((country: CountryApi) => {
		const subRegionNotExist = country.subregion ? country.subregion : <NotExist>lack of data</NotExist>
		const capitalNotExist = country.capital ? country.capital : <NotExist>lack of data</NotExist>
		const domain = country.tld ? country.tld[0] : <NotExist>lack of data</NotExist>

		const getCurrency = (data: DataApi) => {
			for (const value in data) {
				if (!data[value].name) {
					return data[value]
				}
				return data[value].name
			}
		}
		const languages = country.languages ? getCurrency(country.languages) : <NotExist>lack of data</NotExist>
		const currenciesName = country.currencies ? getCurrency(country.currencies) : <NotExist>lack of data</NotExist>

		return (
			<Detail
				key={country.name.common}
				flag={country.flags.png}
				name={country.name.common}
				nativeName={country.name.nativeName}
				region={country.region}
				subRegion={subRegionNotExist}
				capital={capitalNotExist}
				domainName={domain}
				currencies={currenciesName}
				language={languages}
				borders={country.borders}
				population={country.population}
				onClick={getBorderCountry}
			/>
		)
	})
	const arrowIcon = (
		<FontAwesomeIcon
			icon={faArrowLeftLong}
			size='2x'
			style={{ color: 'var(--font-color)' }}
		/>
	)
	return (
		<StyledMain>
			<ContentContainer>
				<Link aria-label='go back' href='/'>{arrowIcon}</Link>
				<Flex>{country}</Flex>
			</ContentContainer>
		</StyledMain>
	)
}
export default CountryDetail
