import VectorType from './VectorType';

export default function CompositeVectorType({...props}) {

    values = props.values;
    valueType = props.valueType;

    return (
        <VectorType>
            {props.children}
        </VectorType>
    )
}