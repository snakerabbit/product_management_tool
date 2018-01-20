import React from 'react';

class PropertyForm extends React.Component {
  constructor(props) {
    super(props);

    this.state={
      name:'',
      value:''
    };
    this.handleSubmit=this.handleSubmit.bind(this);
    this.update = this.update.bind(this);
  }

  componentDidMount() {
  }

  handleSubmit(event) {
    event.preventDefault();
    const newProperty = Object.assign({}, this.state);
    this.props.createProperty(newProperty);
  }

  update(field) {
    return event => this.setState({
      [field]: event.target.value
    });
  }




  render (){
    return(
      <div>
        <h3>Properties</h3>
        <form onSubmit={this.handleSubmit}>


          <input type='submit' value='Add Property'/>
        </form>
      </div>
    );
  }
}

export default PropertyForm;
