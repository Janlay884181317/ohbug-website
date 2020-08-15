import React from 'react';
import type { PageProps } from 'gatsby';

import { Layout, SEO, Header, Home, Footer } from '@/components';

const Index: React.FC<PageProps> = () => (
  <Layout>
    <SEO
      title="Ohbug - 应用信息监控平台"
      description="Ohbug 是应用信息监控平台。提供开源的异常监控、行为采集、性能监控，帮助开发者及时发现追踪改善网站问题，提升用户体验。"
    />
    <Header />
    <Home />
    <Footer />
  </Layout>
);

export default Index;
