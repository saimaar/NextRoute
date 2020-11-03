import React, {useState, useEffect } from 'react'
import { withRouter} from 'react-router-dom'
import './App.css';
import { Route, Switch, useHistory } from 'react-router'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import HeaderContainer from './HeaderContainer.jsx'
import Footer from './Footer'
import NotFound from './NotFound';

function App () {

    let [destinations, setDestinations] = useState([])
    let [user, setUser] = useState({})
    let [searchTerm, setSearchTerm] = useState("")
    let [token, setToken] = useState("")
    let [error, setError] = useState("")
    const history = useHistory()
console.log(history);
    useEffect(() =>{
      fetch(`https://traveladvisor-api.herokuapp.com/destinations`)
      .then(resp => resp.json())
      .then(destinations => {
        setDestinations(destinations)
      })

      if(localStorage.token){
         console.log(localStorage);
         fetch(`https://traveladvisor-api.herokuapp.com/persist`, {
           headers: {
             "Authorization": `bearer ${localStorage.token}`
           }
         })
         .then(r => r.json())
         .then((data) => {
           console.log(data);
           if(data.token){
             setUser(data.user)
             }
           })
         }


    },[])
console.log(user);

  //
  // state={
  //   user: {},
  //   destinations:[],
  //   search: "",
  //   error: ""
  // }

  // componentDidMount() {
  //   fetch(`https://traveladvisor-api.herokuapp.com/destinations`)
  //   .then(r => r.json())
  //   .then((destinations) => {
  //     this.setState({
  //       destinations
  //     })
  //   })
  //
  //   if(localStorage.token){
  //     console.log(localStorage);
  //     fetch(`https://traveladvisor-api.herokuapp.com/persist`, {
  //       headers: {
  //         "Authorization": `bearer ${localStorage.token}`
  //       }
  //     })
  //     .then(r => r.json())
  //     .then((data) => {
  //       console.log(data);
  //       if(data.token){
  //
  //         this.setState({
  //             user: data.user
  //           })
  //         }
  //       })
  //     }
  // }

  let createNewUser = (newUser) => {
    this.setState({
      user: newUser.user,
      token: newUser.token
    })
    setUser(newUser.user)
    setToken(newUser.token)
  }

  let loginUser = (username, password) => {
    fetch('https://traveladvisor-api.herokuapp.com/login', {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
    .then(r => r.json())
    .then(userData => {
      console.log(userData);
      if(userData.error){
        setError(userData.error)
      }else{
        localStorage.setItem("token", userData.token)
        setUser(userData.user)
        setSearchTerm("")
      }
    })




  }

  let updateSearchForm = (newValue) => {
    setSearchTerm((prevState) =>{ return newValue})
  }

  let filterSearch = () => {
    let newArr = destinations.filter( destination => {
      let searchValue = searchTerm.toLowerCase()
      return destination.name.toLowerCase().includes(searchValue) || destination.trip_type.toLowerCase().includes(searchValue)
    })
    return newArr
  }

  let clearSearch = (emptyValue) => {
    setSearchTerm(emptyValue)
  }

  //   let destinationsId = this.state.destinations.map(destination => destination.id)
  //
    return (
      <div className="page-window">
        <HeaderContainer error={error} createNewUser={createNewUser} loginUser={loginUser} history={history}/>
       <hr className="header-separation"/>

     <Switch>
       <Route exact path='/' render={ () => <HomeContainer
       clearSearch={clearSearch}
       destinations={filterSearch()}
       updateSearchForm={updateSearchForm}
       searchTerm={searchTerm}
       user={user}

       />} />
       <Route exact path='/profile' render={localStorage.token ? (routerProps) => <ProfileContainer routerProps={routerProps} /> : (routerProps) => <NotFound />}/>
       <Route path='/:id' render={ (routerProps) => <ShowContainer user={user} routerProps={routerProps}/> }/>

     </Switch>

      </div>
    )

}


export default withRouter(App);
