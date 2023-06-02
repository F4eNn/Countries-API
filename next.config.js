/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	compiler: {
		styledComponents: true,
	},
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'flagcdn.com/**',
				
			},
			{
				protocol: 'https',
				hostname: 'upload.wikimedia.org/**'
			}
		],
	},
}

module.exports = nextConfig
