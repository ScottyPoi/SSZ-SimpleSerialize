import ArrayLike from './ArrayLike';

export default function ListType({...props}) {

    return (
        <ArrayLike>
            {props.children}
        </ArrayLike>
    )
}