import React from 'react';
import { shallow } from 'enzyme';

import * as formHelpers from '../../forms/formHelpers';

describe('ManagedNumberField', () => {
  const equalsOne = (x) => x === '1';

  test('Shows error when value changes to something invalid', () => {
    const wrapper = shallow((
      <formHelpers.ManagedNumberField
        store={() => {}}
        name={'test'}
        validation={equalsOne}
        value={'1'}
        className={''}
        format={(x) => x.toString()}
        otherData={{}}
      />
    ));

    wrapper.setProps({ store: (evnt, inputProps, otherData) => {
      wrapper.setProps({ value: inputProps.value });
    }});

    const input = wrapper.at(0);
    expect(input.prop('error')).toBe(false);
    //input.simulate('click');
    console.log(input.prop('value'));
    input.prop('onChange')({}, { value: '2' });
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
