import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  }, 
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.ybearswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.ybearswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Stakes',
    icon: 'PoolIcon',
    href: '/nests',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
 
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/sbear-finance/',
      },
    ],
  },
  {
    label: 'Dashboard',
    icon: 'HomeIcon',
    href: 'https://ybear.surge.sh',
  },
  {
    label: 'Audit by Solidity',
    icon: 'AuditIcon',
    href: 'https://solidity.finance/audits/yBEAR/',
  },
  {
    label: 'yBEAR Website',
    icon: 'GroupsIcon',
    href: 'https://ybear.finance',
  },
  {
    label: 'Sbear Whitepaper',
    icon: 'InfoIcon',
    href: 'https://www.ybearswap.finance/sbear.pdf',
  },
  {
    label: 'Ybear Whitepaper',
    icon: 'InfoIcon',
    href: 'https://www.ybearswap.finance/ybear.pdf',
  },
 
]

export default config
