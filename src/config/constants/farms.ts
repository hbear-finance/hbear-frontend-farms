import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'sBEAR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1C25C1b17e927e1FcD0cf47bf0D1Beca0B8C6E60',
    },
    tokenSymbol: 'sBEAR',
    tokenAddresses: {
      97: '',
      56: '0xdEC858d5ee93568CE4eA5bbf9169ceA23d2dE305',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'sBEAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x9A45f6d76ac63AF67F7127702A1c5933c5C8019f',
    },
    tokenSymbol: 'sBEAR',
    tokenAddresses: {
      97: '',
      56: '0xdEC858d5ee93568CE4eA5bbf9169ceA23d2dE305',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
 
      {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
{
    pid: 6,
    risk: 5,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x70D8929d04b60Af4fb9B58713eBcf18765aDE422',
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170Ed0880ac9A755fd29B2688956BD959F933F8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'sBEAR',
    lpAddresses: {
      97: '',
      56: '0x1C25C1b17e927e1FcD0cf47bf0D1Beca0B8C6E60', // sBEAR-BUSD LP
    },
    tokenSymbol: 'sBEAR',
    tokenAddresses: {
      97: '',
      56: '0xdEC858d5ee93568CE4eA5bbf9169ceA23d2dE305',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 4,
    risk: 5,
    lpSymbol: 'yBEAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDc7293476B58d901B132367D378295237CE65c57',
    },
    tokenSymbol: 'yBEAR',
    tokenAddresses: {
      97: '',
      56: '0xA8dA060eBD32A753005c6Ee476A0D79177C6EA8b',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 5,
    risk: 5,
    lpSymbol: 'YBHONEY-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xD8fB0e88609c791ecf55F50CD040AE2638B14BdB',
    },
    tokenSymbol: 'YBHONEY',
    tokenAddresses: {
      97: '',
      56: '0x5b147ad94f3f25f6aa94a58abccd6745df36d7f7',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 15,
    risk: 5,
    lpSymbol: 'BTCB-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 16,
    risk: 5,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
  {
    pid: 17,
    risk: 5,
    lpSymbol: 'yBEAR-sBEAR LP',
    lpAddresses: {
      97: '',
      56: '0x20c896ccf1e75a359e59ff95d80766ee8fda303d',
    },
    tokenSymbol: 'yBEAR',
    tokenAddresses: {
      97: '',
      56: '0xa8da060ebd32a753005c6ee476a0d79177c6ea8b',
    },
    quoteTokenSymbol: QuoteToken.sbear,
    quoteTokenAdresses: contracts.sbear,
  },
  
    {
    pid: 18,
    risk: 5,
    lpSymbol: 'yBHONEY-sBEAR LP',
    lpAddresses: {
      97: '',
      56: '0xf15ee1298b38681b285890921a4bef9f53135558',
    },
    tokenSymbol: 'yBHONEY',
    tokenAddresses: {
      97: '',
      56: '0x5b147AD94f3f25f6aA94a58aBCcd6745Df36d7F7',
    },
    quoteTokenSymbol: QuoteToken.sbear,
    quoteTokenAdresses: contracts.sbear,
  },
  
    {
    pid: 19,
    risk: 5,
    lpSymbol: 'BAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x3Da30727ed0626b78C212e81B37B97A8eF8A25bB',
    },
    tokenSymbol: 'BAKE',
    tokenAddresses: {
      97: '',
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
    {
    pid: 8,
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
      {
    pid: 9,
    risk: 2,
    isTokenOnly: true,
    lpSymbol: 'BTCB',
    lpAddresses: {
      97: '',
      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
    },
    tokenSymbol: 'BTCB',
    tokenAddresses: {
      97: '',
      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
      {
    pid: 10,
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x3ab77e40340ab084c3e23be8e5a6f7afed9d41dc', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 11,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
    {
    pid: 12,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'YBHONEY',
    lpAddresses: {
      97: '',
      56: '0x2c4bBEc3254Ce12d96eBF296F339bf3221A7F2FD', // YBHONEY-BUSD LP
    },
    tokenSymbol: 'YBHONEY',
    tokenAddresses: {
      97: '',
      56: '0x5b147AD94f3f25f6aA94a58aBCcd6745Df36d7F7',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: '0x1C25C1b17e927e1FcD0cf47bf0D1Beca0B8C6E60', // SBEAR-BUSD LP
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  
  {
    pid: 14,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'BAKE',
    lpAddresses: {
      97: '',
      56: '0xe2d1b285d83efb935134f644d00fb7c943e84b5b', // BAKE-BUSD LP
    },
    tokenSymbol: 'BAKE',
    tokenAddresses: {
      97: '',
      56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21,
    risk: 5,
    lpSymbol: 'PIG-sBEAR LP',
    lpAddresses: {
      97: '',
      56: '0x2559093db102ea8144a88da25bba15b58b22523b',
    },
    tokenSymbol: 'PIG',
    tokenAddresses: {
      97: '',
      56: '0x8850d2c68c632e3b258e612abaa8fada7e6958e5',
    },
    quoteTokenSymbol: QuoteToken.sbear,
    quoteTokenAdresses: contracts.sbear,
  },
    
]

export default farms
