import React from 'react';
import { withLDConsumer } from 'launchdarkly-react-client-sdk';

function Test({ flags }) {
  console.log(flags.sortingPlaylist);
  if (flags.sortingPlaylist) {
    return <div>Hiiiiii Hello!</div>;
  } else {
    return <div>Loading...</div>;
  }
}

export default withLDConsumer()(Test);
