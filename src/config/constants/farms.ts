import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'sBEAR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x576406e8710F37dD071b28D8A6B2F8aE7b898CdD',
    },
    tokenSymbol: 'sBEAR',
    tokenAddresses: {
      97: '',
      56: '0x480713711C68aCfC6341Df8c53ef32f83990cd05',
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
      56: '0x6dB1894F3b310c3154a7Fe2e9B8D143522e56084',
    },
    tokenSymbol: 'sBEAR',
    tokenAddresses: {
      97: '',
      56: '0x480713711C68aCfC6341Df8c53ef32f83990cd05',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 11,
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
    pid: 12,
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
    pid: 13,
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
    pid: 3,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'sBEAR',
    lpAddresses: {
      97: '',
      56: '0x576406e8710F37dD071b28D8A6B2F8aE7b898CdD', // sBEAR-BUSD LP
    },
    tokenSymbol: 'sBEAR',
    tokenAddresses: {
      97: '',
      56: '0x480713711C68aCfC6341Df8c53ef32f83990cd05',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
   {
    pid: 4,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'BNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
    {
    pid: 5,
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
    pid: 6,
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
    pid: 7,
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
    pid: 8,
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
    pid: 9,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'YBEAR',
    lpAddresses: {
      97: '',
      56: '0xf5F6a3C38C7234A48fF73CfB4A7B20cb9BB86Df1', // YBEAR-BUSD LP
    },
    tokenSymbol: 'YBEAR',
    tokenAddresses: {
      97: '',
      56: '0xA8dA060eBD32A753005c6Ee476A0D79177C6EA8b',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 10,
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
]

export default farms