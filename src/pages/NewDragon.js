import React from 'react';

import Page from 'styles/page';
import { H1 } from 'styles/heading';
import DragonForm from 'components/DragonForm';

export default function NewDragon() {
  return (
    <Page data-page="new-dragon" x="center">
      <H1>New Dragon</H1>
      <DragonForm />
    </Page>
  );
}
