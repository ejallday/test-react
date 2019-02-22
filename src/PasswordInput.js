import React from 'react'

class PasswordInput extends React.Component {

  componentWillUnmount(){
    console.log('Unmounting PasswordInput')
  }

  render() {
    return (
      <input type="password" />
    )
  }
}

export default PasswordInput;
