import VectorType from '../composite/VectorType';

export default function BitVectorType({...props}) {

    return (
        <VectorType>
            {props.children}
        </VectorType>
    )
}