---
sidebar_label: 'Introduction'
sidebar_position: 0
id: my-doc-id
title:  Introduction
description: Aiman's Intro
slug: /my-doc-id
---


**A bird's eye overview of the project**

Babylon is a new Cosmos project whose vision is to leverage the security of Bitcoin for enhancing the security of Cosmos zones and other PoS chains. In this first post, we will give a bird’s eye view of the project and in the subsequent posts, we will delve deeper into its the various use cases.
## Who are we?
Our team consists of consensus protocol researchers from Stanford and experienced layer 1 developers from all over the world. At our Stanford [lab](https://tselab.stanford.edu/), our previous [works](https://tselab.stanford.edu/research/blockchains-decentralized-systems/) include both basic research as well as collaborations with industry projects. For example, a recent work is a collaboration with Ethereum Foundation on improving the security of the Proof-of-Stake Ethereum beacon chain. We identified some critical [attacks](https://news.bitcoin.com/a-new-academic-paper-describes-3-attack-methods-against-an-ethereum-pos-chain/) as well as designed [optimal](https://arxiv.org/abs/2209.03255) protocols to achieve the objectives of PoS Ethereum.

## Bitcoin as a source of trust
Bitcoin is the <mark>most secure blockchain</mark> in the world, secured by the immense hash power of Bitcoin miners. Currently this security is used primarily to support one cryptocurrency: Bitcoin. The vision of the Babylon project is to leverage Bitcoin as a **source of trust** to benefit other blockchains in the broader ecosystem :tent:.

export const Highlight = ({children, color}) => (
  <span
    style={{
      backgroundColor: color,
      borderRadius: '20px',
      color: '#fff',
      padding: '10px',
      cursor: 'pointer',
    }}
    onClick={() => {
      alert(`You clicked the color ${color} with label ${children}`)
    }}>
    {children}
  </span>
);

This is <Highlight color="#25c2a0">a green button</Highlight> 

:::tip Good to know

Babylon architecture consists of 3 components, with two levels of checkpointing.

:::


|S.no. | Blockchain      | Description |
|---| ----------- | ----------- |
|01| Bitcoin     | Proof-of-Work      |
|02| Cosmo  | Proof-of-Stake       |

The value of this source of trust can be further broken down into two aspects:

- Bitcoin is based on `Proof-of-Work`, while many other current and emerging blockchains are based on `Proof-of-Stake`. PoS chains as Cosmos zones have certain security limitations compared to PoW chains. A properly designed architecture leveraging Bitcoin can potentially remove these limitations. 

>In fact, PoS and PoW have complementary strengths, and a properly designed architecture can obtain the best of both worlds.



- The security of a blockchain is determined in large part by the value of the resource that supports it. In a PoW chain, it is the cost of the hash power. In a Cosmos zone, it is the value of the cryptocurrency that is being staked. Viewed through this lens, there is a wide spectrum of blockchains at different security levels. Supported by the immense hash power of its miners, Bitcoin sits on one extreme of this spectrum. Smaller blockchains, such as Cosmos application-specific zones, sit near the other end of the spectrum. A properly designed architecture leveraging Bitcoin can enhance the security of these chains without compromising their autonomy.

## Bitcoin as a reliable timestamping service
In Nakamoto’s [whitepaper](https://bitcoin.org/bitcoin.pdf), the Bitcoin blockchain was introduced as a **timestamping server** powered by Proof-of-Work. It gives an irreversible time-ordering to events. In its native application, the events are the execution of various transactions on the Bitcoin ledger. In the present application of enhancing the security of other blockchains, Bitcoin can be used to timestamp events that occur in other blockchains as well. Each such event triggers a transaction that is sent to the miners, which subsequently inserts it into the Bitcoin ledger, thereby timestamping the event. These timestamps on Bitcoin can be used to resolve various security issues with the blockchain. The general idea of timestamping events in a child chain on a parent chain is called **checkpointing**, and the transactions that timestamp the events are called **checkpoints**.

## The Babylon architecture

![Docusaurus logo](/img/arch.png)

The Babylon architecture is shown above. It consists of three components with two levels of checkpointing:

1. Bitcoin, as the timestamping service.
2. The Babylon chain, a Cosmos zone, as the middle layer.
3. Other Cosmos zones, as the consumers of security.

An important design consideration is that Bitcoin has very limited capacity in carrying arbitrary data. In this context, the Babylon chain serves several functions:

1. It aggregates the checkpoint streams of many consumer zones so that only one checkpoint stream needs to be inserted into Bitcoin to simultaneously timestamp events in all the consumer zones.
2. Its checkpoints into Bitcoin can be made compact using cryptographic techniques such as aggregate signatures.
3. It receives checkpoints from the consumer zones via Inter Blockchain Communication (IBC).
4. It checks for the availability of the data behind the checkpoints of the consumer zones so that an attacker cannot timestamp unavailable data.

## Use cases

1. [Fast Stake Unbonding](https://babylonchain.substack.com/p/babylon-for-fast-stake-unbonding): Proof-of-stake chains require social consensus to thwart long range attacks and this leads to [long unbonding periods](https://babylonchain.io/blogs/f/why-is-stake-unbonding-so-slow). In Cosmos, this is typically 21 days. Bitcoin security replaces social consensus and reduces unbonding periods to 5 hours.
2. [Bootstrapping new zones](https://babylonchain.substack.com/p/shared-security): Bitcoin security can be used to bootstrap new zones which have low token valuation.
3. Protecting important transactions: Bitcoin security can be used to protect important transactions while normal transactions get fast finality.
4. [Censorship resistance](https://babylonchain.io/blogs/f/censorship-resistance-via-babylon): Transactions that are censored can use Babylon as a backup to enter the ledger.

## Technology
The Babylon technology which supports these use cases consists of 1) core primitives for writing timestamps onto Bitcoin by the consumer zones and reading the timestamps on Bitcoin by the consumer zones; 2) protocols that use the timestamp information to realize the various use cases. Both the core primitives and the protocols will be described in the following posts.



This article is also available on Substack: Babylon: Bitcoin Security for All (substack.com)

