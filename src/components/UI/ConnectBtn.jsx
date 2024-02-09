import { ConnectButton } from '@rainbow-me/rainbowkit';
const ConnectBtn = () => {
  return (
    <ConnectButton
      label="Connect your wallet"
      chainStatus="icon"
      showBalance={{
        smallScreen: true,
        largeScreen: true,
      }}
    />
  );
};

export default ConnectBtn;
