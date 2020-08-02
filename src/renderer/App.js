import React, { useState } from 'react';
import { Tabs, Tab } from '@blueprintjs/core';

export default () => {
  const [t, setT] = useState(0);
  return (
    <div style={{ width: '10%' }}>
      <Tabs onChange={setT} selectedTabId={t} vertical>
        <Tab id={0} title="Short" panel={<div>Short content</div>} />
        <Tab
          id={1}
          title="Long"
          panel={
            <div>
              Long content: Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum
            </div>
          }
        />
      </Tabs>
      <div className="anything">
        This text jumps due to the Tabs component chanigng height.
      </div>
    </div>
  );
};
