import { Token } from '@uniswap/sdk-core'
import { FeeAmount } from '@uniswap/v3-sdk'
import { USDC_TOKEN, WETH_TOKEN } from './tools/constants'

// Inputs that configure the Quoter to run
export interface QuoteConfig {
  rpc: {
    local: string
    mainnet: string
  }
  tokens: {
    in: Token
    amountIn: number
    out: Token
    poolFee: number
  }
}

// Quote Configuration

export const CurrentQuoteConfig: QuoteConfig = {
  rpc: {
    local: 'http://localhost:8545',
    mainnet: '',
  },
  tokens: {
    in: USDC_TOKEN,
    amountIn: 1000,
    out: WETH_TOKEN,
    poolFee: FeeAmount.MEDIUM,
  },
}

// Trader Environment Configuration

export enum TradeEnvironment {
    LOCAL,
    MAINNET,
    WALLET_EXTENSION,
  }
  
  // Inputs that configure the Trader to run
  export interface TradeConfig {
    env: TradeEnvironment
    rpc: {
      local: string
      mainnet: string
    }
    wallet: {
      address: string
      privateKey: string
    }
    tokens: {
      in: Token
      amountIn: number
      out: Token
      poolFee: number
    }
  }
  
  // Trader Configuration
  
  export const CurrentTradeConfig: TradeConfig = {
    env: TradeEnvironment.LOCAL,
    rpc: {
      local: 'http://localhost:8545',
      mainnet: '',
    },
    wallet: {
      address: '0xf39fd6e51aad88f6f4ce6ab8827279cfffb92266',
      privateKey:
        '0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80',
    },
    tokens: {
      in: WETH_TOKEN,
      amountIn: 1,
      out: USDC_TOKEN,
      poolFee: FeeAmount.MEDIUM,
    },
  }