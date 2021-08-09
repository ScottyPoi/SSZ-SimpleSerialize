import NavCards from '../components/NavCards'
export default function active(props) {
  return (
    <div className="container">
        <div className='row'>
            <div className='col-4'>
<NavCards />
            </div>
            <div className='col-8'>
      <h2 className='text-center'>
        A non-exhaustive list of SSZ implementations. Not officially endorsed,
        but maintained by client teams and other members of the ethereum
        community.
      </h2>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Language</th>
            <th scope="col">Project</th>
            <th scope="col">Maintainer</th>
            <th scope="col">License</th>
            <th scope="col">Status</th>
            <th scope="col">Features/Notes</th>
            <th scope="col">Link</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Dafny</td>
            <td>Eth2 spec/verif. with Dafny</td>
            <td>ConsenSys Software and Ethereum Foundation</td>
            <td>Apache2.0</td>
            <td>Active</td>
            <td>Formal spec, corectness, proofs</td>
            <td>
              <a href="https://github.com/ConsenSys/eth2.0-dafny">
                ConsenSys/eth2.0/dafny
              </a>
            </td>
          </tr>
          <tr>
            <td>Go</td>
            <td>ZRNT</td>
            <td>Diederik Loerakker (@protolambda)</td>
            <td>MIT</td>
            <td>Active</td>
            <td>Generic, caching, datasharing</td>
            <td>
              <a href="https://github.com/protolambda/ztyp">protolambda/ztyp</a>
            </td>
          </tr>
          <tr>
            <td>Go</td>
            <td>Prysm</td>
            <td>Ferran Borreguero (@ferranbt)</td>
            <td>MIT</td>
            <td>Active</td>
            <td>Code-gen, fast</td>
            <td>
              <a href="https://github.com/ferranbt/fastssz/">
                ferranbt/fastssz
              </a>
            </td>
          </tr>
          <tr>
            <td>Java</td>
            <td>Teku</td>
            <td>Consensys/PegaSys Eng.</td>
            <td>Apache-2.0</td>
            <td>Active</td>
            <td>Caching, datasharing</td>
            <td>
              <a href="https://github.com/PegaSysEng/teku/tree/master/ssz/src/main/java/tech/pegasys/teku/ssz">
                PegaSysEng/teku/ssz
              </a>
            </td>
          </tr>
          <tr>
            <td>Nim</td>
            <td>Nimbus</td>
            <td>Status</td>
            <td>MIT and Apache2.0</td>
            <td>Active</td>
            <td>In-place decode, Caching</td>
            <td>
              <a href="https://github.com/status-im/nim-beacon-chain/blob/master/beacon_chain/ssz.nim">
                status-im/nim-beacon-chain/ssz.nim
              </a>
            </td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Trinity</td>
            <td>Ethereum Foundation</td>
            <td>MIT</td>
            <td>Active</td>
            <td> Pyrsistent, partial caching</td>
            <td>
              <a href="https://github.com/ethereum/py-ssz">ethereum/py-ssz</a>
            </td>
          </tr>
          <tr>
            <td>Python</td>
            <td>Pyspec / Eth2.py</td>
            <td>Diederik Loerakker (@protolambda)</td>
            <td>MIT </td>
            <td>Active</td>
            <td>Datasharing, caching, streaming</td>
            <td>
              <a href="https://github.com/protolambda/remerkleable">
                protolambda/remerkleable
              </a>
            </td>
          </tr>
          <tr>
            <td>Rust</td>
            <td>Lighthouse</td>
            <td>Sigma Prime</td>
            <td>Apache2.0</td>
            <td>Active</td>
            <td>Partial caching, fast</td>
            <td>
              <a href="https://github.com/sigp/lighthouse/tree/master/consensus/ssz">
                https://github.com/sigp/lighthouse/tree/master/consensus/ssz
              </a>
            </td>
          </tr>
          <tr>
            <td>Typescript</td>
            <td>Lodestar</td>
            <td>Chainsafe Systems</td>
            <td>LGPL-v3.0</td>
            <td>Active</td>
            <td>Both Tree & structural, caching</td>
            <td>
              <a href="https://github.com/ChainSafe/lodestar/tree/master/packages/ssz">
                ChainSafe/lodestar/ssz
              </a>
            </td>
          </tr>
          <tr>
            <td>Zig</td>
            <td></td>
            <td>Guillaume Ballet (@gballet)</td>
            <td>Unlicense</td>
            <td>Active</td>
            <td>No merkleization (yet)</td>
            <td>
              <a href="https://github.com/gballet/ssz.zig">gballet/ssz.zig</a>
            </td>
          </tr>
          <tr>
            <td>C#</td>
            <td>Cortex</td>
            <td>Sly Gryphon (@sgryphon)</td>
            <td>LGPL-v3.0</td>
            <td>Active</td>
            <td>Experimental</td>
            <td>
              <a href="https://github.com/sgryphon/cortex-ssz">
                sgryphon/cortex-ssz
              </a>
            </td>
          </tr>
        </tbody>
      </table>
        </div>
        </div>
    </div>
  );
}
