'use client'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Button } from '@/components/Header/Header'

export const Borders = (props: { borders: string[] }) => {
	const [fullNames, setFullName] = useState()

	useEffect(() => {
		const fetchDetailCountry = async () => {
			const response = await fetch(`https://restcountries.com/v3.1/alpha/${}`)
			const data = await response.json()
			console.log(data)
		}
        fetchDetailCountry()
	}, [])

	return <></>
}
