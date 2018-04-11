import React from 'react';
import { shallow } from 'enzyme';

import * as formHelpers from '../../forms/formHelpers';

describe('ManagedNumberField', () => {
  const equalsOne = (x) => x == 1;

  test('Shows error when value changes to something invalid', () => {
    const wrapper = shallow((
      <formHelpers.ManagedNumberField
        store={() => {}}
        name={'test'}
        validation={equalsOne}
        value={'1'}
        className={''}
        format={(x) => x.toString()}
      />
    ));

    const input = wrapper.at(0);
    expect(input.prop('error')).toBe(false);
    input.simulate('focus');
    input.simulate('keyDown', { key: '2' });
    console.log(input.prop('value'));
    expect(input.prop('error')).toBe(true);
  })
});

describe('CashFlowRow', () => {

});

describe('MonthlyCashFlowRow', () => {

});

describe('CashFlowContainer', () => {

});
