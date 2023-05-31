'use client'
import styled from 'styled-components'
import { Navigaton } from '@/components/Nav/Navigation'

const ContentWrapper = styled.div`
	margin-top: 2rem;
	width: min(95%, 1200px);
	margin-inline: auto;
	display: flex;
	flex-direction: column;
`
const StyledNav = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
  
  
  @media (min-width: 768px){
    flex-direction: row;
    align-items: center;
  }
`

export default function Home() {
	return (
		<ContentWrapper>
			<StyledNav>
				<Navigaton />
			</StyledNav>
			<main></main>
		</ContentWrapper>
	)
}
