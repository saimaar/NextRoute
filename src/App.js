import React, {useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import './App.css';
import { Route, Switch } from 'react-router'
import HomeContainer from './HomeComponents/HomeContainer'
import ProfileContainer from './ProfileComponents/ProfileContainer'
import ShowContainer from './DestinationComponents/ShowContainer'
import HeaderContainer from './HeaderContainer.jsx'
import Footer from './Footer'
import NotFound from './NotFound';

function App () {

    let [destinations, setDestinations] = useState([])
    let [user, setUser] = useState({})
    console.log(destinations);

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

  // createNewUser = (newUser) => {
  //   this.setState({
  //     user: newUser.user,
  //     token: newUser.token
  //   })
  // }
  //
  // loginUser = (user) => {
  //   fetch('https://traveladvisor-api.herokuapp.com/login', {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json"
  //     },
  //     body: JSON.stringify(user)
  //   })
  //   .then(r => r.json())
  //   .then(userData => {
  //     if(userData.error){
  //       this.setState({
  //         error: userData.error
  //       })
  //     }else{
  //       localStorage.setItem("token", userData.token)
  //       this.setState({
  //         user: userData.user,
  //         search: ""
  //       })
  //     }
  //   })
  //
  //
  //
  //
  // }
  //
  // updateSearchForm = (newValue) => {
  //   this.setState(prevState => {
  //     return {
  //       search: newValue
  //     }
  //   })
  // }
  //
  // filterSearch = () => {
  //   let newArr = this.state.destinations.filter( destination => {
  //     let searchValue = this.state.search.toLowerCase()
  //     return destination.name.toLowerCase().includes(searchValue) || destination.trip_type.toLowerCase().includes(searchValue)
  //   })
  //   return newArr
  // }
  //
  // clearSearch = (emptyValue) => {
  //   this.setState({
  //     search: emptyValue
  //   })
  // }
  //
  //
  //    console.log(this.state.user);
  //   let destinationsId = this.state.destinations.map(destination => destination.id)
  //
    return (
      <div className="page-window">

      </div>
    )

}


export default withRouter(App);
