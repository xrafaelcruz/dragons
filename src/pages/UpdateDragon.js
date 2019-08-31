import React from 'react';

import Page from 'styles/page';
import { H1 } from 'styles/heading';
import DragonForm from 'components/DragonForm';

export default function UpdateDragon() {
  return (
    <Page data-page="home" x="center">
      <H1>Update Dragon</H1>
      <DragonForm update />
    </Page>
  );
}
