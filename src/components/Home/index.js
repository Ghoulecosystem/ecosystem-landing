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
    <Seo title="Ghoul Ecosystem" description = "Powered by Poltergeist Labs" />
    <PrivacyFocused />
    <Tokenomics />
    <StakeGhoul />
    <JoinCommunity />
  </>
);
