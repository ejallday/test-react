import React from 'react'

class PasswordInput extends React.Component {

  componentWillUnmount(){
    console.log('Unmounting PasswordInput')
  }

  render() {
    const { count, key } = this.props

    return (
      <div>
        <input type="password" key={key} count={count} />
      </div>
    )
  }
}

export default PasswordInput;
