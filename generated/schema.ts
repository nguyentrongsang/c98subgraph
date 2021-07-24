// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Address,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class User extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save User entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save User entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("User", id.toString(), this);
  }

  static load(id: string): User | null {
    return store.get("User", id) as User | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get address(): string {
    let value = this.get("address");
    return value.toString();
  }

  set address(value: string) {
    this.set("address", Value.fromString(value));
  }

  get balanceGwei(): BigInt {
    let value = this.get("balanceGwei");
    return value.toBigInt();
  }

  set balanceGwei(value: BigInt) {
    this.set("balanceGwei", Value.fromBigInt(value));
  }

  get transactionCount(): i32 {
    let value = this.get("transactionCount");
    return value.toI32();
  }

  set transactionCount(value: i32) {
    this.set("transactionCount", Value.fromI32(value));
  }
}

export class UserCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save UserCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save UserCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("UserCounter", id.toString(), this);
  }

  static load(id: string): UserCounter | null {
    return store.get("UserCounter", id) as UserCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }
}

export class TransferCounter extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TransferCounter entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TransferCounter entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TransferCounter", id.toString(), this);
  }

  static load(id: string): TransferCounter | null {
    return store.get("TransferCounter", id) as TransferCounter | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get count(): i32 {
    let value = this.get("count");
    return value.toI32();
  }

  set count(value: i32) {
    this.set("count", Value.fromI32(value));
  }

  get totalTransferredGwei(): BigInt {
    let value = this.get("totalTransferredGwei");
    return value.toBigInt();
  }

  set totalTransferredGwei(value: BigInt) {
    this.set("totalTransferredGwei", Value.fromBigInt(value));
  }
}

export class TokenInfo extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id !== null, "Cannot save TokenInfo entity without an ID");
    assert(
      id.kind == ValueKind.STRING,
      "Cannot save TokenInfo entity with non-string ID. " +
        'Considering using .toHex() to convert the "id" to a string.'
    );
    store.set("TokenInfo", id.toString(), this);
  }

  static load(id: string): TokenInfo | null {
    return store.get("TokenInfo", id) as TokenInfo | null;
  }

  get id(): string {
    let value = this.get("id");
    return value.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get totalSupplyGwei(): BigInt {
    let value = this.get("totalSupplyGwei");
    return value.toBigInt();
  }

  set totalSupplyGwei(value: BigInt) {
    this.set("totalSupplyGwei", Value.fromBigInt(value));
  }
}