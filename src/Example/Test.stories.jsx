import {Autocomplete} from  './test';

export default {

    title: 'Test',
    component: Autocomplete

}

const Template = (args) => <Autocomplete {...args} /> 

export const  Default = () => Template.bind({});

Default.args = {}
