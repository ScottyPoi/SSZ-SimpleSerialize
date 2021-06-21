import CompositeType from '../CompositeType';

export default function ContainerType({...props}) {

    return (
        <CompositeType>
            {props.children}
        </CompositeType>
    )
}