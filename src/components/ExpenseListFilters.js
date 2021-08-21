import React from 'react'
import { connect } from 'react-redux'
import { DateRangePicker } from 'react-dates'
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters'

export class ExpenseListFilters extends React.Component {
    state = {
        calendarFocused: null
    }
    onDatesChange = ({startDate, endDate}) => {
        this.props.setStartDate(startDate)
        this.props.setEndDate(endDate)
    }
    onFocusChange = (calendarFocused) => {
        this.setState({ calendarFocused })
    }
    onTextChange = (e) => {
        this.props.setTextFilter(e.target.value)
    }
    onSortChange = (e) => {
        switch (e.target.value) {
            case 'date':
                this.props.sortByDate()
                break;

            case 'amount':
                this.props.sortByAmount()
                break;

            default:
                this.props.sortByDate()
        }
    }
    render() {
        return (
            <div className="content-container">
            <div className="input-group">
                <div className="input-group__item">
                    <input 
                        placeholder="Search expenses" 
                        className="text-input" type="text" 
                        value={this.props.filters.text} 
                        onChange={this.onTextChange} 
                    />
                </div>
                <div className="input-group__item">
                    <select
                        className="select"
                        value={this.props.filters.sortBy}
                        onChange={this.onSortChange}>
                        <option value="date">Date</option>
                        <option value="amount">Amount</option>
                    </select>
                </div>
                <div className="input-group__item">
                    <DateRangePicker
                        startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
                        startDateId="start" // PropTypes.string.isRequired,
                        endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
                        endDateId="end" // PropTypes.string.isRequired,
                        onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
                        focusedInput={this.state.calendarFocused} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                        onFocusChange={calendarFocused => this.setState({ calendarFocused })} // PropTypes.func.isRequired,
                        showClearDates={true}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                </div>
            </div>
        </div>
        )
    }
}

const mapStateToProps = (state) => ({
        filters: state.filters
})

const mapDispatchToProps = (dispatch) => ({
    setTextFilter: (text) => dispatch(setTextFilter(text)),
    sortByDate: () => dispatch(sortByDate()),
    sortByAmount: () => dispatch(sortByAmount()),
    setStartDate: (startDate) => dispatch(setStartDate(startDate)),
    setEndDate: (endDate) => dispatch(setEndDate(endDate))
})

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters)