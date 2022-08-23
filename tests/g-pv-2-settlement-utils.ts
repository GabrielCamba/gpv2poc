import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Interaction,
  OrderInvalidated,
  PreSignature,
  Settlement,
  Trade
} from "../generated/GPv2Settlement/GPv2Settlement"

export function createInteractionEvent(
  target: Address,
  value: BigInt,
  selector: Bytes
): Interaction {
  let interactionEvent = changetype<Interaction>(newMockEvent())

  interactionEvent.parameters = new Array()

  interactionEvent.parameters.push(
    new ethereum.EventParam("target", ethereum.Value.fromAddress(target))
  )
  interactionEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )
  interactionEvent.parameters.push(
    new ethereum.EventParam("selector", ethereum.Value.fromFixedBytes(selector))
  )

  return interactionEvent
}

export function createOrderInvalidatedEvent(
  owner: Address,
  orderUid: Bytes
): OrderInvalidated {
  let orderInvalidatedEvent = changetype<OrderInvalidated>(newMockEvent())

  orderInvalidatedEvent.parameters = new Array()

  orderInvalidatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  orderInvalidatedEvent.parameters.push(
    new ethereum.EventParam("orderUid", ethereum.Value.fromBytes(orderUid))
  )

  return orderInvalidatedEvent
}

export function createPreSignatureEvent(
  owner: Address,
  orderUid: Bytes,
  signed: boolean
): PreSignature {
  let preSignatureEvent = changetype<PreSignature>(newMockEvent())

  preSignatureEvent.parameters = new Array()

  preSignatureEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  preSignatureEvent.parameters.push(
    new ethereum.EventParam("orderUid", ethereum.Value.fromBytes(orderUid))
  )
  preSignatureEvent.parameters.push(
    new ethereum.EventParam("signed", ethereum.Value.fromBoolean(signed))
  )

  return preSignatureEvent
}

export function createSettlementEvent(solver: Address): Settlement {
  let settlementEvent = changetype<Settlement>(newMockEvent())

  settlementEvent.parameters = new Array()

  settlementEvent.parameters.push(
    new ethereum.EventParam("solver", ethereum.Value.fromAddress(solver))
  )

  return settlementEvent
}

export function createTradeEvent(
  owner: Address,
  sellToken: Address,
  buyToken: Address,
  sellAmount: BigInt,
  buyAmount: BigInt,
  feeAmount: BigInt,
  orderUid: Bytes
): Trade {
  let tradeEvent = changetype<Trade>(newMockEvent())

  tradeEvent.parameters = new Array()

  tradeEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam("sellToken", ethereum.Value.fromAddress(sellToken))
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam("buyToken", ethereum.Value.fromAddress(buyToken))
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "sellAmount",
      ethereum.Value.fromUnsignedBigInt(sellAmount)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "buyAmount",
      ethereum.Value.fromUnsignedBigInt(buyAmount)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam(
      "feeAmount",
      ethereum.Value.fromUnsignedBigInt(feeAmount)
    )
  )
  tradeEvent.parameters.push(
    new ethereum.EventParam("orderUid", ethereum.Value.fromBytes(orderUid))
  )

  return tradeEvent
}
