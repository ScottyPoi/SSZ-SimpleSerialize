import styles from '../styles/UintText.module.css'

export default function HashRootText(props) {

    
    let hash = props.hash
    let fontSize = props.displaySize ? props.displaySize : 'xx-large'
    let width = props.width ? props.width : `50%`

    let style = {
        border: `solid black`,
        backgroundColor: `gold`,
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