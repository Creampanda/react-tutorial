import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';
import { Component } from 'react';

// class WhoAmI extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       years: 27,
//       text: '+++',
//       position: ''
//     }
//   }

//   nextYear = () => {
//     console.log('+++');
//     this.setState(state => ({
//       years: state.years + 1
//     }));
//   }

//   commitImputChanges = (e, color) => {
//     console.log(color);
//     this.setState({
//       position: e.target.value
//     })
//   }

//   render() {
//     const { name, link } = this.props;
//     const { position, years, text } = this.state;
//     return (
//       <div>
//         <button onClick={this.nextYear}>{text}</button>
//         <h1>My name is {name},
//           I'am {years} years old,
//           I'am {position}</h1>
//         <a href={link}>Link</a>
//         <form>
//           <span>Введите должность</span>
//           <input type="text" onChange={(e) => this.commitImputChanges(e, "some color")} />
//         </form>
//       </div>
//     )
//   }
// }

// function App() {
//   return (
//     <div className='App'>
//       <WhoAmI name="Mick" link="" />
//     </div>
//   )
// }

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, name: 'John C.', salary: 800, increase: false, rise: true },
        { id: 2, name: 'Alex M.', salary: 3000, increase: true, rise: false },
        { id: 3, name: 'Carl W.', salary: 5010, increase: false, rise: false }
      ]
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addItem = (newName, newSalary) => {
    const newItem = { id: this.maxId++, name: newName, salary: newSalary, increase: false, rise: false }
    this.setState(({ data }) => {
      return {
        data: [...data, newItem]
      }
    })
  }

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] }
        }
        return item;
      })
    }))
  }

  render() {
    const employees = this.state.data.length;
    const increased = this.state.data.filter(item => item.increase).length;
    return (
      <div className="app">
        <AppInfo
          employees={employees}
          increased={increased}
        />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
