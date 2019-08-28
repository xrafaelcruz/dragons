import React from 'react';

import Page from 'styles/page';
import DragonList from 'components/DragonList';

export default function Home(props) {
  return (
    <Page data-page="home">
      <DragonList />
    </Page>
  );
}
