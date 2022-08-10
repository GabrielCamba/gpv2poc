import { BigInt } from "@graphprotocol/graph-ts"
import {
  SettleCall
} from "../generated/GPV2Settlement/GPV2Settlement"
import { Total } from "../generated/schema"

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