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
        label: 'Exchange V2',
        href: 'https://v2exchange.ybearswap.finance/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.ybearswap.finance/#/pool',
      },
    {
        label: 'Liquidity V2',
        href: 'https://v2exchange.ybearswap.finance/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Farms V2',
    icon: 'FarmIcon',
    href: 'https://v2.ybearswap.finance/farms',
  },
  {
    label: 'Stakes',
    icon: 'PoolIcon',
    href: 'https://v2.ybearswap.finance/nests',
  },
 
   {
    label: 'Lottery',
    icon: 'TicketIcon',
    href: '/lottery',
   },
 
  {
    label: 'sBEAR INFO',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BUY sBEAR',
        href: 'https://exchange.ybearswap.finance/#/swap?inputCurrency=0xdec858d5ee93568ce4ea5bbf9169cea23d2de305',
      },
    {
        label: 'sBEAR CONTRACT',
        href: 'https://bscscan.com/token/0xdec858d5ee93568ce4ea5bbf9169cea23d2de305',
      },
    {
        label: 'sBEAR CHART',
        href: 'https://dex.guru/token/0xdec858d5ee93568ce4ea5bbf9169cea23d2de305-bsc',
      },
      {
    label: 'sBEAR Whitepaper',
    href: 'https://ybear.finance/YBEARSWAP_WHITEPAPER.pdf',
      },
    ],
  },
  
  {
    label: 'yBEAR  INFO',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BUY yBEAR',
        href: 'https://exchange.ybearswap.finance/#/swap?outputCurrency=0xA8dA060eBD32A753005c6Ee476A0D79177C6EA8b',
      },
    {
        label: 'yBEAR CONTRACT',
        href: 'https://bscscan.com/token/0xa8da060ebd32a753005c6ee476a0d79177c6ea8b',
      },
    {
        label: 'yBEAR CHART',
        href: 'https://dex.guru/token/0xa8da060ebd32a753005c6ee476a0d79177c6ea8b-bsc',
      },
    {
    label: 'yBEAR Whitepaper',
    href: 'https://ybear.finance/wp-content/uploads/2021/03/Ybear-Whitepaper.pdf',
    },
      {
    label: 'yBEAR Website',
    href: 'https://ybear.finance',
    },
            {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/yield-bear',
      },
      {
        label: 'Coinmarketcap',
        href: 'https://coinmarketcap.com/currencies/ybear-finance/',
      },
    ],
  },
  
    {
    label: 'yBHONEY INFO',
    icon: 'InfoIcon',
    items: [
      {
        label: 'BUY yBHONEY',
        href: 'https://exchange.ybearswap.finance/#/swap?inputCurrency=0x5b147ad94f3f25f6aa94a58abccd6745df36d7f7',
      },
    {
        label: 'yBHONEY CONTRACT',
        href: 'https://bscscan.com/token/0x5b147ad94f3f25f6aa94a58abccd6745df36d7f7',
      },
     {
        label: 'yBHONEY CHART',
        href: 'https://dex.guru/token/0x5b147ad94f3f25f6aa94a58abccd6745df36d7f7-bsc',
      },

    ],
  },
  
 
  {
    label: 'Solid Group',
    icon: 'AuditIcon',
    href: 'https://www.ybearswap.finance/ybear_audit.pdf',
  }, 
    {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/sbear-finance/',
      },
      {
        label: 'Doc',
        href: 'https://ybearswap.gitbook.io/ybearswap/',
      },
    ],
  },
]

export default config
