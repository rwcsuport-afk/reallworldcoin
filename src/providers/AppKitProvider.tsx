import { PropsWithChildren } from 'react'
import { createAppKit } from '@reown/appkit/react'
import { WagmiProvider } from 'wagmi'
import { mainnet, arbitrum, bsc } from '@reown/appkit/networks'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import type { AppKitNetwork } from '@reown/appkit/networks'

const queryClient = new QueryClient()

// Simple type assertion for import.meta.env
const projectId = (import.meta.env as { VITE_PROJECT_ID: string }).VITE_PROJECT_ID

if (!projectId) {
  throw new Error('VITE_PROJECT_ID environment variable is required')
}

const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'reown-appkit-starter-git-master-niku-baruahs-projects-0a87cce4.vercel.app',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// ✅ Properly typed tuple with at least one element
const networks: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum, bsc]

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: true
})

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
  features: {
    analytics: true
  }
})

export function AppKitProvider({ children }: PropsWithChildren) {
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}