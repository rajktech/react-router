import React from 'react';
import './App.css';
import {Home} from './components/Home';
//import {About} from './components/About';
import {Contact} from './components/Contact';
import {Products} from './components/Products';
import {FeaturedProducts} from './components/Products/FeaturedProducts';
import {NewProducts} from './components/Products/NewProducts';
import {Users} from './components/Users/Users';
import {UsersDetails} from './components/Users/UsersDetails';
import {NoMatch} from './components/NoMatch';
import {Navbar} from './components/Navbar';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import {OrderSummary} from './components/OrderSummary';
import {Login} from './components/Login';
import {Profile} from './components/Profile';
import {AuthProvider} from './components/Auth';
import {RequireAuth} from './components/RequireAuth';
const LazyAbout = React.lazy (() => import ('./components/About'));

function App () {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <React.Suspense fallback="Loading...">
                <LazyAbout />
              </React.Suspense>
            }
          />
          <Route path="/contact-us" element={<Contact />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path="products" element={<Products />}>
            <Route index element={<FeaturedProducts />} />
            <Route path="featured-products" element={<FeaturedProducts />} />
            <Route path="new-products" element={<NewProducts />} />
          </Route>
          <Route path="users" element={<Users />}>
            <Route path=":userId" element={<UsersDetails />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
