import React from 'react';

import Page from 'styles/page';
import { H1 } from 'styles/heading';
import DragonList from 'components/DragonList';

export default function Home(props) {
  return (
    <Page data-page="home" center>
      <H1>Dragon List</H1>
      <DragonList />
    </Page>
  );
}
