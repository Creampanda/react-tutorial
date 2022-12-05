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
        { id: 1, name: 'John C.', salary: 800, increase: false },
        { id: 2, name: 'Alex M.', salary: 3000, increase: true },
        { id: 3, name: 'Carl W.', salary: 5010, increase: false }
      ]
    }
  }

  deleteItem = (id) => {
    this.setState(({data})=>{
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  render() {
    return (
      <div className="app">
        <AppInfo />

        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>

        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem} />
        <EmployeesAddForm />
      </div>
    );
  }
}

export default App;
