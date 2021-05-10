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
