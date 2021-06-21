import ListType from '../composite/ListType';

export default function BitListType({...props}) {

    return (
        <ListType>
            {props.children}
        </ListType>
    )
}