import React from 'react'
import PasswordInput from './PasswordInput'
import TextInput from './TextInput'

class App extends React.Component {
  constructor(props) {
    super(props)
    console.log(React.version)
    this.state = {
      toggleInput: true,
      count: 1
    }
  }

  toggleClick = () => {
    this.setState(({ count, toggleInput }) => ({
      count: count + 1,
      toggleInput: !toggleInput,
    }))
  }

  render() {
    const { count, toggleInput } = this.state
    let input

    if (toggleInput){
      input = <TextInput id={`count-${count}`} key={count} />
    } else {
      input = <PasswordInput id={`count-${count}`} key={count} />
    }

    return (
      <div>
        <h1>Memory Leak Demo</h1>
        <h2>Steps to reproduce</h2>
        <h3>1. Open dev tools, click memory tab, and take a snapshot</h3>
        <h3>2. Click the button below a bunch of times and take another snapshot</h3>
        <h3>3. Search Snapshots for "Detached"</h3>
        <h3>4. Click the Garbage Collect button</h3>
        <h3>5. Take another snapshot & veiw "Detached"</h3>
        <h3>6. Rinse and repeat as many times as you like</h3>

        <button onClick={this.toggleClick}>Click Me</button>
        <br/>
        { input }
      </div>
    );
  }
}
export default App;
