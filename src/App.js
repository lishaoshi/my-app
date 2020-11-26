// // import './App.css';
// import { Button } from 'antd';
// import { HashRouter as Router, Route, Link, Switch, useRouteMatch, useParams, useLocation } from 'react-router-dom'
// import Demo1 from './demo/demo1'

// function App() {
//   const handleClick = () => {
//     // let { path, url } = useRouteMatch();
//   }
//   return (
//     <Router>
//       <div className="App">
//         <header className="App-header">
          
//           <Link to="/">
//             <Button type="primary">Primary Button</Button>
//           </Link>
//           <Link to="/home">
//             <Button type="primary">Primary Button</Button>
//           </Link>
//           <Link to="/demo1">
//             <Button type="primary">demo1</Button>
//           </Link>
//         </header>
//       </div>

//       <Switch>
//         <Route exact path='/'>
//           <Home name={'hello home'}/>
//         </Route>
//         <Route path='/home'>
//           <Tipo />
//         </Route>
//         <Route path='/demo1'>
//           <Demo1 name={'my name is haha'}/>
//         </Route>
//       </Switch>
      
//     </Router>
//   );
// }

// function Home(prop) {

//   console.log(prop.children)
//   return (
//     <div> 
//       this is {prop.name}
//     </div>
//   )
// }

// function Tipo() {
//   let {url, path} = useRouteMatch();
//   console.log(url, path)
//   return (
//     <div> 
//       <h2>Topics</h2>
//       <ul>
//         <li>
//         <Link to={`${url}/child`}>子路由</Link>
//         </li>
//         <li>
//         <Link to={`${url}/other`}>其他路由</Link>
//         </li>
//       </ul>
//       <Switch>
//         <Route exact path={path}>
//           <h1>this is  child</h1>
//         </Route>
//         <Route exact path={`${path}/:other`}>
//           <ChildCom />
//         </Route>
//         </Switch>
//     </div>
//   )
// }

// function ChildCom() {
//   let { other } = useParams();
//   let {url, path} = useRouteMatch();
//   console.log(url, path)
//   return (
//     <div>{other}</div> 
//   )
// }

// function NotFind() {
//   return (
//     <div>i not find data</div>
//   )
// }

// export default App;

import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Layout from '@/layout/layout'
import UiButton from '@/views/UI/Button'
import Login from '@/views/Login'
import Order from '@/views/order'

function App (props) {
  return(
    <div>
      <Router>
        <Switch>
        <Route path='/login'>
            <Login />
          </Route>
          <Route path='/'>
            <Layout>
              <Route path="/ui/buttons">
                <UiButton />
              </Route>
              <Route path="/order">
                <Order></Order>
              </Route>
            </Layout>
          </Route>
         
        </Switch>
      </Router>
    </div>
  )
}

export default App;
