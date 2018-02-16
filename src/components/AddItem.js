import React, { Component } from 'react'
import { Row, Input, Button } from 'react-materialize'

class AddItem extends Component {
  constructor() {
    super()
    this.state = {
      productId: 0,
      quantity: 0,
    }
  }

  handleClick = () => {
    let theProduct = this.props.products.filter(product => product.id === this.state.productId)[0]
    this.props.addItemFunc({
      product: theProduct,
      quantity: this.state.quantity
    })
  }

  render () {
    let listOfProducts = this.props.products.map(product => {
      return (
        <option key={product.id} value={product.id}>{product.name}</option>
      )
    })
    return (
      <div className='container'>
      <Row>
        <h2>Add Item</h2>
        <Input
          s={6}
          label="Quantity"
          value={this.state.quantity}
          onChange={(e) => this.setState({ quantity: e.target.value})}
        />
        <Input
          s={6}
          type='select'
          label="Materialize Select"
          defaultValue='2'
          value={this.state.productId}
          onChange={(e) => this.setState({ productId: e.target.value})}
        >
          {listOfProducts}
        </Input>
        <Button
          waves='light'
          onClick={this.handleClick}
        >Submit</Button>
      </Row>
      </div>
    )
  }
}

export default AddItem
