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
 
]

export default farms
