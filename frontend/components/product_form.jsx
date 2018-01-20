import React from 'react';
import PropertyForm from './property_form';

class ProductForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      name: '',
      upc: '',
      available_on:'',
      product_properties:[],
      product_name:'',
      value:''
    };


    this.handleSubmit=this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  handleSubmit(event) {
    event.preventDefault();
    const newProduct = Object.assign({}, this.state);
    this.props.createProduct(newProduct);
  }

  update(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }


  renderErrors(){
    return(
      <ul>
      {this.props.errors.map((error, index) => (
        <li key={`error-${index}`}>
          <p>{error}</p>
        </li>
      ))}
    </ul>
    );
  }

  addProperty(){
    const newProperty = {
      name: this.state.property_name
    };
    this.props.createProperty(newProperty);
  }


  render (){
    return(
      <div>
        <h3>Product Form</h3>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label>Name:
            <input type='text'
                   value={this.state.name}
                   onChange={this.update('name')}
                 />
          </label>
          <label>UPC:
            <input type='text'
                    value={this.state.upc}
                    onChange={this.update('upc')}/>
          </label>
          <label>Available On:
            <input type='datetime-local'
                    value={this.state.available_on}
                    onChange={this.update('available_on')}/>
          </label>
          <label>Property Name:
            <input type='text'
                   value={this.state.property_name}
                   onChange={this.update('property_name')}
                 />
          </label>
          <label>Property Value:
            <input type='datetime-local'
                    value={this.state.value}
                    onChange={this.update('value')}/>
          </label>
          <button onClick={this.addProperty}>Add Property</button>
          <input type='submit' value='Save'/>
        </form>
      </div>
    );
  }
}

export default ProductForm;
