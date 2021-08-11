

const ValidatorSchema =  `
Validator = {
    pubkey: BLSPubkey;
    withdrawalCredentials: Bytes32;
    effectiveBalance: Gwei;
    slashed: boolean;
    activationEligibilityEpoch: Epoch;
    activationEpoch: Epoch;
    exitEpoch: Epoch;
    withdrawableEpoch: Epoch;
}`

const ValidotorData = `
pubkey: >-
0x3f59537f9e35724643f594b53b57f5489bf4588cacf1fcbff8925cea64520cb1f6cba307cc4354b14594c3ec5339c71c
withdrawalCredentials: '0xc1e8d78277f83362a4addc5810fe3c8513e33eaec8dbc6812b37bc68fcb34439'
effectiveBalance: '0'
slashed: true
activationEligibilityEpoch: '2'
activationEpoch: '0'
exitEpoch: '3'
withdrawableEpoch: '7'

`

const DepositDataSchema = `
DepositData = {
    pubkey: BLSPubkey;
    withdrawalCredentials: Bytes32;
    amount: Gwei;
    signature: BLSSignature;
}`

const DepositData = `
pubkey: >-
  0xd0733c5c339f883fcfd10379f84c55db68cccd75401f6bab017311a093b19558de498db96abe75ac677950bce1e801d6
withdrawalCredentials: '0x7ade6735c5f2702202557884d80ba731fa00907751dd54330b46d43f5910a9b6'
amount: '1'
signature: >-
  0x7ba6f3bdb07d1563e01c2b02a485a71cdcd70fda32d7ece78043103f4fd3effbe00b41ee0fb2fcbe7e75944f4065fbd9e83a9437a7036ed15b9c62b513e937bd4a31b1994628d39b8ea36e4449e138a02f953fcb539ccd9a505d9ce0c326b11e

`

const DepositEventSchema = `DepositEvent = {
    depositData: DepositData;
    blockNumber: Number64;
    index: Number64;
}`

const DepositeEventData = `
depositData:
  pubkey: >-
    0xe2fef72ee38ab75fcbe76227fa743b575748f2e099170eff4fdf13b19847d9546a9abc18cb2439cc1afa87a7d9785055
  withdrawalCredentials: '0x32783eec26771af12832caa1c54fa13ce19e1c9cd1dc9af5aa6f214b8952372c'
  amount: '3'
  signature: >-
    0xcc27cf60bc28405a0e3ef15b55d11bf10897d03bd600de16db922efad41d3242d0ea0ccaf8a76af097eaff672e9830b520084cb70d642fcc69346b7202c0a7d32eb95bad048f7ddc867a20a1d714f0ba1ed362baceb5caaba2c078367c6f7f1d
blockNumber: '6'
index: '2'

`


const BeaconBlockHeaderSchema = `
BeaconBlockHeader = {
    slot: Slot;
    proposerIndex: ValidatorIndex;
    parentRoot: Root;
    stateRoot: Root;
    bodyRoot: Root;
}`

const BeaconBlockHeaderData = `
slot: '1'
proposerIndex: '3'
parentRoot: '0xb22657be51c2c572099183f8ad4e1c446abe3c7cea23452a9ec38e869ea35b6b'
stateRoot: '0x7707a8d72c2aaca980f30444d958241c29e8b442098853828d63e65bfca54a24'
bodyRoot: '0xac4dbc56be2c4de6eed1d792b2ae91b380817e0ef3406fb6fff8d5724466a7dd'

`

const SignedBeaconBlockHeaderSchema = ` 
SignedBeaconBlockHeader = {
    message: BeaconBlockHeader;
    signature: BLSSignature;
}`

const SignedBeaconBlockHeaderData = `
message:
  slot: '6'
  proposerIndex: '0'
  parentRoot: '0xc8520690a03294a6c28e0c4654964195e9a65c2e388ad1e00d74dea94b151ad4'
  stateRoot: '0x87cee2995c9d709176e6ba06f7e44e067ee021260c2ec9c479f7525fdb5c1430'
  bodyRoot: '0xcfdd2f980d215fd859835fa0246fc4f4d3005a080e1ed1b077d971ab3cfeb37a'
signature: >-
  0xba4a8591b538ec11764f79faf097757a84c58ed94e24419739f183ec652a6fdeec926602672cc12ca4a74b1126a896b6ec73d2865946cc9cf95891d659391e1b3f71572795115276db1b7f3a72ba6c7ec19c5e963956ab3e24f32a94af84aceb

`

export const exampleSchemaList = [ValidatorSchema, DepositDataSchema, DepositEventSchema, BeaconBlockHeaderSchema, SignedBeaconBlockHeaderSchema];
export const exampleDataList = [ValidotorData, DepositData, DepositeEventData, BeaconBlockHeaderData, SignedBeaconBlockHeaderData];

