/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface PrivacyPoolInterface extends ethers.utils.Interface {
  functions: {
    "FIELD_SIZE()": FunctionFragment;
    "MAX_EXT_AMOUNT()": FunctionFragment;
    "MAX_FEE()": FunctionFragment;
    "ROOT_HISTORY_SIZE()": FunctionFragment;
    "ZERO_VALUE()": FunctionFragment;
    "__gap()": FunctionFragment;
    "calculatePublicAmount(int256,uint256)": FunctionFragment;
    "currentRootIndex()": FunctionFragment;
    "filledSubtrees(uint256)": FunctionFragment;
    "getLastRoot()": FunctionFragment;
    "hashLeftRight(bytes32,bytes32)": FunctionFragment;
    "hasher()": FunctionFragment;
    "isKnownRoot(bytes32)": FunctionFragment;
    "isSpent(bytes32)": FunctionFragment;
    "lastBalance()": FunctionFragment;
    "levels()": FunctionFragment;
    "maximumDepositAmount()": FunctionFragment;
    "nextIndex()": FunctionFragment;
    "nullifierHashes(bytes32)": FunctionFragment;
    "roots(uint256)": FunctionFragment;
    "token()": FunctionFragment;
    "transact(tuple,tuple)": FunctionFragment;
    "verifier2()": FunctionFragment;
    "verifyProof(tuple)": FunctionFragment;
    "zeros(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "FIELD_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "MAX_EXT_AMOUNT",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "MAX_FEE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "ROOT_HISTORY_SIZE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ZERO_VALUE",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "__gap", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "calculatePublicAmount",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "currentRootIndex",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "filledSubtrees",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getLastRoot",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "hashLeftRight",
    values: [BytesLike, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "hasher", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "isKnownRoot",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "isSpent", values: [BytesLike]): string;
  encodeFunctionData(
    functionFragment: "lastBalance",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "levels", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "maximumDepositAmount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "nextIndex", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "nullifierHashes",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "roots", values: [BigNumberish]): string;
  encodeFunctionData(functionFragment: "token", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "transact",
    values: [
      {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      {
        recipient: string;
        extAmount: BigNumberish;
        relayer: string;
        fee: BigNumberish;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
        membershipProofURI: string;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "verifier2", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "verifyProof",
    values: [
      {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      }
    ]
  ): string;
  encodeFunctionData(functionFragment: "zeros", values: [BigNumberish]): string;

  decodeFunctionResult(functionFragment: "FIELD_SIZE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "MAX_EXT_AMOUNT",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "MAX_FEE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "ROOT_HISTORY_SIZE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "ZERO_VALUE", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "__gap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "calculatePublicAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "currentRootIndex",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "filledSubtrees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getLastRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "hashLeftRight",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "hasher", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isKnownRoot",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isSpent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lastBalance",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "levels", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "maximumDepositAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "nextIndex", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "nullifierHashes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "roots", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "token", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "transact", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "verifier2", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "verifyProof",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "zeros", data: BytesLike): Result;

  events: {
    "NewCommitment(bytes32,uint256,bytes)": EventFragment;
    "NewNullifier(bytes32)": EventFragment;
    "NewTxRecord(bytes32,bytes32,bytes32,bytes32,uint256,uint32)": EventFragment;
    "NewWithdrawal(address,uint256,string)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "NewCommitment"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewNullifier"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewTxRecord"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewWithdrawal"): EventFragment;
}

export type NewCommitmentEvent = TypedEvent<
  [string, BigNumber, string] & {
    commitment: string;
    index: BigNumber;
    encryptedOutput: string;
  }
>;

export type NewNullifierEvent = TypedEvent<[string] & { nullifier: string }>;

export type NewTxRecordEvent = TypedEvent<
  [string, string, string, string, BigNumber, number] & {
    inputNullifier1: string;
    inputNullifier2: string;
    outputCommitment1: string;
    outputCommitment2: string;
    publicAmount: BigNumber;
    index: number;
  }
>;

export type NewWithdrawalEvent = TypedEvent<
  [string, BigNumber, string] & {
    recipient: string;
    amount: BigNumber;
    membershipProofURI: string;
  }
>;

export class PrivacyPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: PrivacyPoolInterface;

  functions: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<[BigNumber]>;

    MAX_FEE(overrides?: CallOverrides): Promise<[BigNumber]>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<[number]>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<[BigNumber]>;

    __gap(overrides?: CallOverrides): Promise<[BigNumber]>;

    calculatePublicAmount(
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    currentRootIndex(overrides?: CallOverrides): Promise<[number]>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getLastRoot(overrides?: CallOverrides): Promise<[string]>;

    hashLeftRight(
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<[string]>;

    hasher(overrides?: CallOverrides): Promise<[string]>;

    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    lastBalance(overrides?: CallOverrides): Promise<[BigNumber]>;

    levels(overrides?: CallOverrides): Promise<[number]>;

    maximumDepositAmount(overrides?: CallOverrides): Promise<[BigNumber]>;

    nextIndex(overrides?: CallOverrides): Promise<[number]>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<[string]>;

    token(overrides?: CallOverrides): Promise<[string]>;

    transact(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      _extData: {
        recipient: string;
        extAmount: BigNumberish;
        relayer: string;
        fee: BigNumberish;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
        membershipProofURI: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    verifier2(overrides?: CallOverrides): Promise<[string]>;

    verifyProof(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<[string]>;
  };

  FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

  MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

  ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

  ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

  __gap(overrides?: CallOverrides): Promise<BigNumber>;

  calculatePublicAmount(
    _extAmount: BigNumberish,
    _fee: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  currentRootIndex(overrides?: CallOverrides): Promise<number>;

  filledSubtrees(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  getLastRoot(overrides?: CallOverrides): Promise<string>;

  hashLeftRight(
    _left: BytesLike,
    _right: BytesLike,
    overrides?: CallOverrides
  ): Promise<string>;

  hasher(overrides?: CallOverrides): Promise<string>;

  isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  isSpent(
    _nullifierHash: BytesLike,
    overrides?: CallOverrides
  ): Promise<boolean>;

  lastBalance(overrides?: CallOverrides): Promise<BigNumber>;

  levels(overrides?: CallOverrides): Promise<number>;

  maximumDepositAmount(overrides?: CallOverrides): Promise<BigNumber>;

  nextIndex(overrides?: CallOverrides): Promise<number>;

  nullifierHashes(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

  token(overrides?: CallOverrides): Promise<string>;

  transact(
    _args: {
      proof: BytesLike;
      root: BytesLike;
      inputNullifiers: [BytesLike, BytesLike];
      outputCommitments: [BytesLike, BytesLike];
      publicAmount: BigNumberish;
      extDataHash: BytesLike;
    },
    _extData: {
      recipient: string;
      extAmount: BigNumberish;
      relayer: string;
      fee: BigNumberish;
      encryptedOutput1: BytesLike;
      encryptedOutput2: BytesLike;
      membershipProofURI: string;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  verifier2(overrides?: CallOverrides): Promise<string>;

  verifyProof(
    _args: {
      proof: BytesLike;
      root: BytesLike;
      inputNullifiers: [BytesLike, BytesLike];
      outputCommitments: [BytesLike, BytesLike];
      publicAmount: BigNumberish;
      extDataHash: BytesLike;
    },
    overrides?: CallOverrides
  ): Promise<boolean>;

  zeros(i: BigNumberish, overrides?: CallOverrides): Promise<string>;

  callStatic: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<number>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    __gap(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePublicAmount(
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<number>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    getLastRoot(overrides?: CallOverrides): Promise<string>;

    hashLeftRight(
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<string>;

    hasher(overrides?: CallOverrides): Promise<string>;

    isKnownRoot(_root: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    lastBalance(overrides?: CallOverrides): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<number>;

    maximumDepositAmount(overrides?: CallOverrides): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<number>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<boolean>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<string>;

    token(overrides?: CallOverrides): Promise<string>;

    transact(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      _extData: {
        recipient: string;
        extAmount: BigNumberish;
        relayer: string;
        fee: BigNumberish;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
        membershipProofURI: string;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    verifier2(overrides?: CallOverrides): Promise<string>;

    verifyProof(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<boolean>;

    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "NewCommitment(bytes32,uint256,bytes)"(
      commitment?: null,
      index?: null,
      encryptedOutput?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { commitment: string; index: BigNumber; encryptedOutput: string }
    >;

    NewCommitment(
      commitment?: null,
      index?: null,
      encryptedOutput?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { commitment: string; index: BigNumber; encryptedOutput: string }
    >;

    "NewNullifier(bytes32)"(
      nullifier?: null
    ): TypedEventFilter<[string], { nullifier: string }>;

    NewNullifier(
      nullifier?: null
    ): TypedEventFilter<[string], { nullifier: string }>;

    "NewTxRecord(bytes32,bytes32,bytes32,bytes32,uint256,uint32)"(
      inputNullifier1?: null,
      inputNullifier2?: null,
      outputCommitment1?: null,
      outputCommitment2?: null,
      publicAmount?: null,
      index?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, number],
      {
        inputNullifier1: string;
        inputNullifier2: string;
        outputCommitment1: string;
        outputCommitment2: string;
        publicAmount: BigNumber;
        index: number;
      }
    >;

    NewTxRecord(
      inputNullifier1?: null,
      inputNullifier2?: null,
      outputCommitment1?: null,
      outputCommitment2?: null,
      publicAmount?: null,
      index?: null
    ): TypedEventFilter<
      [string, string, string, string, BigNumber, number],
      {
        inputNullifier1: string;
        inputNullifier2: string;
        outputCommitment1: string;
        outputCommitment2: string;
        publicAmount: BigNumber;
        index: number;
      }
    >;

    "NewWithdrawal(address,uint256,string)"(
      recipient?: null,
      amount?: null,
      membershipProofURI?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { recipient: string; amount: BigNumber; membershipProofURI: string }
    >;

    NewWithdrawal(
      recipient?: null,
      amount?: null,
      membershipProofURI?: null
    ): TypedEventFilter<
      [string, BigNumber, string],
      { recipient: string; amount: BigNumber; membershipProofURI: string }
    >;
  };

  estimateGas: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<BigNumber>;

    MAX_FEE(overrides?: CallOverrides): Promise<BigNumber>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<BigNumber>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<BigNumber>;

    __gap(overrides?: CallOverrides): Promise<BigNumber>;

    calculatePublicAmount(
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    currentRootIndex(overrides?: CallOverrides): Promise<BigNumber>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getLastRoot(overrides?: CallOverrides): Promise<BigNumber>;

    hashLeftRight(
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    hasher(overrides?: CallOverrides): Promise<BigNumber>;

    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    lastBalance(overrides?: CallOverrides): Promise<BigNumber>;

    levels(overrides?: CallOverrides): Promise<BigNumber>;

    maximumDepositAmount(overrides?: CallOverrides): Promise<BigNumber>;

    nextIndex(overrides?: CallOverrides): Promise<BigNumber>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    roots(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;

    token(overrides?: CallOverrides): Promise<BigNumber>;

    transact(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      _extData: {
        recipient: string;
        extAmount: BigNumberish;
        relayer: string;
        fee: BigNumberish;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
        membershipProofURI: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    verifier2(overrides?: CallOverrides): Promise<BigNumber>;

    verifyProof(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    zeros(i: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    FIELD_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_EXT_AMOUNT(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    MAX_FEE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ROOT_HISTORY_SIZE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ZERO_VALUE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __gap(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    calculatePublicAmount(
      _extAmount: BigNumberish,
      _fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    currentRootIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    filledSubtrees(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getLastRoot(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    hashLeftRight(
      _left: BytesLike,
      _right: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    hasher(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isKnownRoot(
      _root: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    isSpent(
      _nullifierHash: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    lastBalance(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    levels(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    maximumDepositAmount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nextIndex(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    nullifierHashes(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    roots(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    token(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transact(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      _extData: {
        recipient: string;
        extAmount: BigNumberish;
        relayer: string;
        fee: BigNumberish;
        encryptedOutput1: BytesLike;
        encryptedOutput2: BytesLike;
        membershipProofURI: string;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    verifier2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    verifyProof(
      _args: {
        proof: BytesLike;
        root: BytesLike;
        inputNullifiers: [BytesLike, BytesLike];
        outputCommitments: [BytesLike, BytesLike];
        publicAmount: BigNumberish;
        extDataHash: BytesLike;
      },
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    zeros(
      i: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
