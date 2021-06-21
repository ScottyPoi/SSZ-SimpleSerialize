import styles from '../styles/UintText.module.css'

export default function HashRootText(props) {

    
    let hash = props.hash
    let fontSize = props.displaySize ? props.displaySize : 'xx-large'
    let width = props.width ? props.width : `50%`
    let color = props.list ? 'lightgreen' : 'gold';
    let border = props.list ? 'red' : 'black'

    let style = {
        border: `solid ${border}`,
        backgroundColor: color,
        display: `inline-block`,
        height: `auto`,
        width: width,
        fontSize: fontSize
      }
      
    
    return (
        <div className={`d-flex flex-row text-break`} style={style}>

            <div className={`col`}>
            0x{hash}
            </div>
            </div>
    )
}