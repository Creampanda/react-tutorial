import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';
import { isCompositeComponentWithType } from 'react-dom/test-utils';

class WhoAmI extends Component {
    constructor(props) {
        super(props);
        this.state = {
            years: 27,
            text: '+++',
            position: ''
        }
    }

    nextYear = () => {
        console.log('+++');
        this.setState(state => ({
            years: state.years + 1
        }));
    }

    commitImputChanges = (e, color) => {
        console.log(color);
        this.setState({
            position: e.target.value
        })
    }

    render() {
        const { name, link } = this.props;
        const { position, years, text } = this.state;
        return (
            <Fragment>
                <button onClick={this.nextYear}>{text}</button>
                <h1>My name is {name},
                    I'am {years} years old,
                    I'am {position}</h1>
                <a href={link}>Link</a>
                <form>
                    <span>Введите должность</span>
                    <input type="text" onChange={(e) => this.commitImputChanges(e, "some color")} />
                </form>
            </Fragment>
        )
    }
}

function App() {
    return (
        <div className='App'>
            <WhoAmI name="Mick" link="" />
        </div>
    )
}

// class App extends Component {

//   constructor(props) {
//     super(props);
//     this.state = {
//       data: [
//         { id: 1, name: 'John C.', salary: 800, increase: false, rise: true },
//         { id: 2, name: 'Alex M.', salary: 3000, increase: true, rise: false },
//         { id: 3, name: 'Carl W.', salary: 5010, increase: false, rise: false }
//       ],
//       term: '',
//       filter: 'all'
//     }
//     this.maxId = 4;
//   }

//   deleteItem = (id) => {
//     this.setState(({ data }) => {
//       return {
//         data: data.filter(item => item.id !== id)
//       }
//     })
//   }

//   addItem = (newName, newSalary) => {
//     const newItem = { id: this.maxId++, name: newName, salary: newSalary, increase: false, rise: false }
//     this.setState(({ data }) => {
//       return {
//         data: [...data, newItem]
//       }
//     })
//   }

//   onToggleProp = (id, prop) => {
//     this.setState(({ data }) => ({
//       data: data.map(item => {
//         if (item.id === id) {
//           return { ...item, [prop]: !item[prop] }
//         }
//         return item;
//       })
//     }))
//   }

//   searchEmp = (items, term) => {
//     if (term.length === 0){
//       return items;
//     }
//     return items.filter(item => {
//       return item.name.indexOf(term) > -1;
//     })
//   }

//   onUpdateSearch = (term) => {
//     this.setState({term});
//   }

//   filterPost = (items, filter) => {
//     switch (filter) {
//       case 'rise':
//         return items.filter(item => item.rise);
//       case 'moreThan1000':
//         return items.filter(item => item.salary > 1000);
//       default:
//         return items;
//     }
//   }

//   onFilterSelect = (filter) => {
//     this.setState({filter});
//   }

//   render() {
//     const { data, term, filter } = this.state;
//     const employees = this.state.data.length;
//     const increased = this.state.data.filter(item => item.increase).length;
//     const visibleData = this.filterPost(this.searchEmp(data, term), filter);
//     return (
//       <div className="app">
//         <AppInfo
//           employees={employees}
//           increased={increased}
//         />

//         <div className="search-panel">
//           <SearchPanel onUpdateSearch={this.onUpdateSearch}/>
//           <AppFilter filter={filter} onFilterSelect={this.onFilterSelect}/>
//         </div>

//         <EmployeesList
//           data={visibleData}
//           onDelete={this.deleteItem}
//           onToggleProp={this.onToggleProp}
//         />
//         <EmployeesAddForm onAdd={this.addItem} />
//       </div>
//     );
//   }
// }

export default App;
