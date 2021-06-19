import VectorType from '../composite/VectorType';

export default function ByteVectorType({...props}) {

    return (
        <VectorType>
            {props.children}
        </VectorType>
    )
}