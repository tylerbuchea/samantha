import React from 'react';

import BlogRoll from '../../components/BlogRoll';
import Layout from '../../components/Layout';
import Header from '../../components/Header';

export default function BlogPage() {
  return (
    <Layout>
      <Header />
      <BlogRoll />
    </Layout>
  );
}
