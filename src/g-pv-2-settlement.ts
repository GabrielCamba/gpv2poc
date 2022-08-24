import { BigInt } from "@graphprotocol/graph-ts"
import {
  SettleCall,
  GPv2Settlement,
  Interaction,
  OrderInvalidated,
  PreSignature,
  Settlement,
  Trade
} from "../generated/GPv2Settlement/GPv2Settlement"
import { Total } from "../generated/schema"

export function handleInteraction(event: Interaction): void {}

export function handleOrderInvalidated(event: OrderInvalidated): void {}

export function handlePreSignature(event: PreSignature): void {}

export function handleSettlement(event: Settlement): void {}

export function handleTrade(event: Trade): void {}

export function handleSettle(call: SettleCall): void {
  let total = Total.load("1")
  if (!total) {
    total = new Total("1")
    total.totalSettleCalls = BigInt.fromI32(0)
  }
  let prevTotalSettleCalls = total.totalSettleCalls
  total.totalSettleCalls = prevTotalSettleCalls.plus(BigInt.fromI32(1))
  total.save()
}
