import Terminal from 'react-console-emulator'
export default function ShowTerminal(props) {
    return (
        <div className='container'>
                  <Terminal
        welcomeMessage={'Welcome to the React terminal!'}
        promptLabel={'$'}
      />
        </div>
    )
}