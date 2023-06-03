'use client'
import styled from 'styled-components'
import { Navigaton } from '@/components/Nav/Navigation'
import { Regions } from '@/components/Content/Home/Regions'
import { RegionProvider } from '@/storage/RegionProvider'

const ContentWrapper = styled.div`
	margin-top: 2rem;
	width: min(95%, 1200px);
	margin-inline: auto;
	display: flex;
	flex-direction: column;
`
const StyledNavigation = styled.nav`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	gap: 15px;

	@media (min-width: 768px) {
		flex-direction: row;
		align-items: center;
		gap: 20px;
	}
`

export default function Home() {
	return (
		<RegionProvider>
			<ContentWrapper>
				<StyledNavigation>
					<Navigaton />
				</StyledNavigation>
				<main>
					<Regions />
				</main>
			</ContentWrapper>
		</RegionProvider>
	)
}
