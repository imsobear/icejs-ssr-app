import React from 'react';
import { Shell, ConfigProvider } from '@alifd/next';
import PageNav from './components/PageNav';
import Logo from './components/Logo';
import Footer from './components/Footer';

import { store } from 'ice';

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [userState] = store.useModel('user');

  return (
    <ConfigProvider>
      <Shell
        type="dark"
        style={{
          minHeight: '100vh',
        }}
      >
        <Shell.Branding>
          <Logo
            image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
            text={userState.username}
          />
        </Shell.Branding>
        <Shell.Navigation
          direction="hoz"
          style={{
            marginRight: 10,
          }}
        ></Shell.Navigation>
        <Shell.Action></Shell.Action>
        <Shell.Navigation>
          <PageNav />
        </Shell.Navigation>

        <Shell.Content>{children}</Shell.Content>
        <Shell.Footer>
          <Footer />
        </Shell.Footer>
      </Shell>
    </ConfigProvider>
  );
}
