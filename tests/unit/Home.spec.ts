import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  it('renders h1, h3 and links', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.contains('h3')).toBe(true);
    expect(wrapper.contains('ul')).toBe(true);
    expect(wrapper.contains('a')).toBe(true);
  });
});
