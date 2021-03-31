import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'hBEAR-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xcC280402edE4B3F8A31A16dfBcD4ac28ddd54268',
    },
    tokenSymbol: 'hBEAR',
    tokenAddresses: {
      97: '',
      56: '0x2c573649Dd2A19Bd21ccC9634A6cBc141926b048',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1,
    risk: 5,
    lpSymbol: 'hBEAR-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xB6a8Ce6dfAcA3d5288C9b4C4F67d8b606532018a',
    },
    tokenSymbol: 'hBEAR',
    tokenAddresses: {
      97: '',
      56: '0x2c573649Dd2A19Bd21ccC9634A6cBc141926b048',
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
    lpSymbol: 'hBEAR',
    lpAddresses: {
      97: '',
      56: '0xcC280402edE4B3F8A31A16dfBcD4ac28ddd54268', // hBEAR-BUSD LP
    },
    tokenSymbol: 'hBEAR',
    tokenAddresses: {
      97: '',
      56: '0x2c573649Dd2A19Bd21ccC9634A6cBc141926b048',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
 
]

export default farms
