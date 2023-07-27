import React from 'react';
import renderer from 'react-test-renderer';

import App from '../App';

describe('<App />', () => {
    it('Verify App component', () => {
      const appRoot = renderer.create(<App />);
      expect(appRoot.root.children.length).toBe(1);
    });
});