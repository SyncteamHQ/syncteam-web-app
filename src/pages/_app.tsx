import React from "react";
import "@/styles/globals.css";
import type { NextPage } from "next";
import type { AppType, AppProps } from "next/app";
import type { ReactElement, ReactNode } from "react";
import { SessionProvider } from "next-auth/react";

import { useRouter } from "next/router";

import BounterHunter from "@/components/Layout/BounterHunter";
import CreatorBounties from "@/components/Layout/CreatorBounties";
import PublicLayout from "@/components/Layout/PublicLayout";

// RainbowKit Setups
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet, polygon, optimism, arbitrum } from "wagmi/chains";
import { alchemyProvider } from "wagmi/providers/alchemy";
import { publicProvider } from "wagmi/providers/public";
import BountyPlatformContextProvider from "@/context/BountyPlatformContext";
const { chains, publicClient } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [alchemyProvider({ apiKey: process.env.ALCHEMY_ID }), publicProvider()]
);
const { connectors } = getDefaultWallets({
  appName: "My RainbowKit App",
  projectId: "YOUR_PROJECT_ID",
  chains,
});
const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export type NextPageWithLayout<
  TProps = Record<string, unknown>,
  TInitialProps = TProps
> = NextPage<TProps, TInitialProps> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp = ({ Component, pageProps }: AppPropsWithLayout) => {
  const router = useRouter();
  const { session } = pageProps;

  const getLayout =
    Component.getLayout ??
    ((page: ReactElement) => {
      if (router.pathname.startsWith("/creator")) {
        return (
          <CreatorBounties>
            <SessionProvider session={session}>{page}</SessionProvider>
          </CreatorBounties>
        );
      }
      if (router.pathname.startsWith("/hunter")) {
        return (
          <BounterHunter>
            <SessionProvider session={session}>{page}</SessionProvider>
          </BounterHunter>
        );
      }
      return (
        <PublicLayout>
          <SessionProvider session={session}>{page}</SessionProvider>
        </PublicLayout>
      );
    });

  return getLayout(
    <BountyPlatformContextProvider>
      <WagmiConfig config={wagmiConfig}>
        <RainbowKitProvider chains={chains} theme={darkTheme()}>
          (<Component {...pageProps} />)
        </RainbowKitProvider>
      </WagmiConfig>
    </BountyPlatformContextProvider>
  );
};

export default MyApp;
