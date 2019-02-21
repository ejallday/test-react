import React from 'react'

class TextInput extends React.Component {

  componentWillUnmount(){
    console.log('Unmounting TextInput')
  }

  render() {
    const { count, key } = this.props

    return (
      <div>
        <input type="text" key={key} count={count} />
      </div>
    )
  }
}

export default TextInput;
