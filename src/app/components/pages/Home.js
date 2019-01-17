/**
 * Created by @musta in 09/01/19
 */

import React from 'react';
import Layout from '../layout/Layout';
import Dashboard from './Dashboard';

const Home = () => {
  return (
    <Layout>
      <Dashboard/>
    </Layout>
  );
};

Home.propTypes = {};

export default Home;