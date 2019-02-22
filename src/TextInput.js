import React from 'react'

class TextInput extends React.Component {

  componentWillUnmount(){
    console.log('Unmounting TextInput')
  }

  render() {
    return (
      <input type="text" />
    )
  }
}

export default TextInput;
