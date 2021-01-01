import React, {Component} from 'react'; 
import './List.css'

class List extends Component{
  constructor(props){
    super(props)
    this.filterList=this.filterList.bind(this);
  }

  state={
    filteredItem:''
  }

  filterList(e){
    console.log(e.target.value);
    this.setState({filteredItem:e.target.value});
    console.log(this.state.filteredItem);
  }

  render(){
    const filteredData = this.props.contacts.filter((item)=>{
      return(
        item.fullName.toLowerCase().indexOf(this.state.filteredItem.toLowerCase()) !== -1 || item.phone.toLowerCase().indexOf(this.state.filteredItem.toLowerCase()) !== -1
      )
    })
    return  (
      <div className='listField'>
        <input onChange={this.filterList} name={'filter'} placeholder="filter by name or phone..." ></input>
        <ul>
          {filteredData.map((item,index )=> {
            return (<li key={index+1}>
            <span className='name' style={{marginRight:'15px'}}>{item.fullName}</span>
            <span className='phone'>{item.phone}</span>
          </li>)
          })}
          
        </ul>
      </div>
    )
  }



}


export default List;