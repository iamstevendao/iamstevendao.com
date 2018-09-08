import { shallowMount } from '@vue/test-utils';
import Home from '@/components/Home.vue';

describe('Home.vue', () => {
  it('renders all tags', () => {
    const wrapper = shallowMount(Home);
    expect(wrapper.contains('img')).toBe(true);
    expect(wrapper.contains('h1')).toBe(true);
    expect(wrapper.contains('h3')).toBe(true);
    expect(wrapper.contains('ul')).toBe(true);
    expect(wrapper.contains('a')).toBe(true);
  });
});
