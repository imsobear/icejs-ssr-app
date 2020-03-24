import React, { useState } from 'react';
// import { Shell, ConfigProvider } from '@alifd/next';
// import PageNav from './components/PageNav';
// import Logo from './components/Logo';
// import Footer from './components/Footer';

import { store } from 'ice';
// import { Divider } from '@alifd/next';

export default function BasicLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  const [userState] = store.useModel('user');

  return (
    <div>
      <div>username: {userState.username}</div>
      <div>
        {children}
      </div>
    </div>
  )

  // const getDevice = (width: number) => {
  //   const isPhone =
  //     typeof navigator !== 'undefined' &&
  //     navigator &&
  //     navigator.userAgent.match(/phone/gi);

  //   if (width < 680 || isPhone) {
  //     return 'phone';
  //   } else if (width < 1280 && width > 680) {
  //     return 'tablet';
  //   } else {
  //     return 'desktop';
  //   }
  // };

  // const [userState] = store.useModel('user');

  // const [device, setDevice] = useState(getDevice(NaN));
  // window.addEventListener('optimizedResize', e => {
  //   setDevice(getDevice(e && e.target && e.target.innerWidth));
  // });



  // return (
  //   <ConfigProvider device={device}>
  //     <Shell
  //       type="dark"
  //       style={{
  //         minHeight: '100vh',
  //       }}
  //     >
  //       <Shell.Branding>
  //         <Logo
  //           image="https://img.alicdn.com/tfs/TB1.ZBecq67gK0jSZFHXXa9jVXa-904-826.png"
  //           text={userState.username}
  //         />
  //       </Shell.Branding>
  //       <Shell.Navigation
  //         direction="hoz"
  //         style={{
  //           marginRight: 10,
  //         }}
  //       ></Shell.Navigation>
  //       <Shell.Action></Shell.Action>
  //       <Shell.Navigation>
  //         <PageNav />
  //       </Shell.Navigation>

  //       <Shell.Content>{children}</Shell.Content>
  //       <Shell.Footer>
  //         <Footer />
  //       </Shell.Footer>
  //     </Shell>
  //   </ConfigProvider>
  // );
}
