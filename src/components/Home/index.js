import React from "react";
import {
  PrivacyFocused,
  StakeGhoul,
  Tokenomics,
  JoinCommunity,
  Seo,
} from "..";

export const Home = () => (
  <>
    <Seo title="Ghoul Ecosystem" description = "Privacy Focused Ecosystem & Untraceable Stablecoin" />
    <PrivacyFocused />
    <Tokenomics />
    <StakeGhoul />
    <JoinCommunity />
  </>
);
