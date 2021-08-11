import 'react-dates/initialize';
import React from 'react'
import moment from 'moment'
import { SingleDatePicker } from 'react-dates'


const now = moment()
console.log(now.format('MMM Do, YYYY'))

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : null,
      calendarFocused: false,
      id: '',
      error: ''
    }
  }
  onDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }
  onNoteChange = (e) => {
    const note = e.target.value
    this.setState(() => ({ note }))
  }
  onAmountChange = (e) => {
    const amount = e.target.value
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }))
    }
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused}))
  }
  onSubmit = (e) => {
    e.preventDefault()
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({error: 'Please provide description and amount'}))
    } else {
      this.setState(() => ({error: ''}))
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      })
    }
  }
  render() {
    return (
      <div>
        {this.state.error && <div>{this.state.error}</div>}
        <form onSubmit={this.onSubmit}>
          <input 
            type="text" 
            name="" 
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input 
            type="text"
            value={this.state.amount}
            placeholder="Amount"
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt} // momentPropTypes.momentObj or null
            onDateChange={this.onDateChange} // PropTypes.func.isRequired
            focused={this.state.calendarFocused} // PropTypes.bool
            onFocusChange={this.onFocusChange} // PropTypes.func.isRequired
            id="date-picker" // PropTypes.string.isRequired,
            numberOfMonths={1}
            isOutsideRange={(day) => false}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}


