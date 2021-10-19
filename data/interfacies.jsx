export const Fork = {
    // Previous fork version
    previousVersion: "Version",
    // Current fork version
    currentVersion: "Version", 
    // Fork epoch number
    epoch: "Epoch", 
    }
    
    export const ForkData = {
    // Current fork version
    currentVersion: "Version", 
    // root of genesis validator list
    genesisValidatorsRoot: "Root", 
    }
    
    export const ENRForkID = {
    // Current fork digest
    forkDigest: "ForkDigest", 
    // next planned fork versin
    nextForkVersion: "Version", 
    // next fork epoch
    nextForkEpoch: "Epoch", 
    }
    
    export const Checkpoint = {
    epoch: "Epoch", 
    root: "Root", 
    }
    
    export const Validator = {
    // BLS public key
    pubkey: "BLSPubkey", 
    // Commitment to pubkey for withdrawals
    withdrawalCredentials: "Bytes32", 
    // Balance at stake
    effectiveBalance: "Number64", 
    // Was the validator slashed
    slashed: "boolean", 
    // When criteria for activation were met
    activationEligibilityEpoch: "Epoch", 
    // Epoch when validator activated
    activationEpoch: "Epoch", 
    // Epoch when validator exited
    exitEpoch: "Epoch", 
    // When validator can withdraw or transfer funds
    withdrawableEpoch: "Epoch", 
    }
    
    export const AttestationData = {
    slot: "Slot", 
    index: "CommitteeIndex", 
    // LMD GHOST vote
    beaconBlockRoot: "Root", 
    // FFG vote
    source: "Checkpoint", 
    target: "Checkpoint", 
    }
    
    export const IndexedAttestation = {
    // Validator Indices
    attestingIndices: "List<ValidatorIndex>", 
    // Attestation Data
    data: "AttestationData", 
    // Aggregate signature
    signature: "BLSSignature", 
    }
    
    export const PendingAttestation = {
    // Attester aggregation bitfield
    aggregationBits: "BitList", 
    // Attestation data
    data: "AttestationData", 
    // Inclusion delay
    inclusionDelay: "Slot", 
    // Proposer index
    proposerIndex: "ValidatorIndex", 
    }
    
    export const Eth1Data = {
    // Root of the deposit tree
    depositRoot: "Root", 
    // Total number of deposits
    depositCount: "Number64", 
    // Block hash
    blockHash: "Bytes32", 
    }
    
    export const Eth1DataOrdered = {
    // block number for this eth1 data block hash
    blockNumber: "Number64", 
    // Root of the deposit tree
    depositRoot: "Root", 
    // Total number of deposits
    depositCount: "Number64", 
    // Block hash
    blockHash: "Bytes32", 
    }
    
    export const HistoricalBatch = {
    // Block roots
    blockRoots: "Vector<Root>", 
    // State roots
    stateRoots: "Vector<Root>", 
    }
    
    export const DepositMessage = {
    // BLS pubkey
    pubkey: "BLSPubkey", 
    // Withdrawal credentials
    withdrawalCredentials: "Bytes32", 
    // Amount in Gwei
    amount: "Number64", 
    }
    
    export const DepositData = {
    // BLS pubkey
    pubkey: "BLSPubkey", 
    // Withdrawal credentials
    withdrawalCredentials: "Bytes32", 
    // Amount in Gwei
    amount: "Number64", 
    // Signing over DepositMessage
    signature: "BLSSignature", 
    }
    
    export const DepositEvent = {
    depositData: "DepositData", 
    /// The block number of the log that included this `DepositData`.
    blockNumber: "Number64", 
    /// The index included with the deposit log.
    index: "Number64", 
    }
    
    export const Eth1Block = {
    // Use blockHash to be consistent with the Eth1Data type
    blockHash: "Bytes32", 
    // Use blockNumber to be consistent with DepositEvent type
    blockNumber: "Number64", 
    timestamp: "Number64", 
    }
    
    export const BeaconBlockHeader = {
    slot: "Slot", 
    proposerIndex: "ValidatorIndex", 
    parentRoot: "Root", 
    stateRoot: "Root", 
    bodyRoot: "Root", 
    }
    
    export const SignedBeaconBlockHeader = {
    message: "BeaconBlockHeader", 
    signature: "BLSSignature", 
    }
    
    export const SigningData = {
    objectRoot: "Root", 
    domain: "Domain", 
    }
    
    export const AttestationSubnets = "BitVector" 