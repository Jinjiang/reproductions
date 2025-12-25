import { describe, it, expect, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import MyVueComponent from '../src/MyVueComponent.vue';

describe('MyVueComponent', () => {
  it('should render with default props', () => {
    const wrapper = mount(MyVueComponent);
    expect(wrapper.text()).toContain('Click me');
    expect(wrapper.classes()).toContain('btn-primary');
  });

  it('should render custom label', () => {
    const wrapper = mount(MyVueComponent, {
      props: {
        label: 'Submit',
      },
    });
    expect(wrapper.text()).toContain('Submit');
  });

  it('should apply secondary variant class', () => {
    const wrapper = mount(MyVueComponent, {
      props: {
        variant: 'secondary',
      },
    });
    expect(wrapper.classes()).toContain('btn-secondary');
    expect(wrapper.classes()).not.toContain('btn-primary');
  });

  it('should be disabled when disabled prop is true', () => {
    const wrapper = mount(MyVueComponent, {
      props: {
        disabled: true,
      },
    });
    expect(wrapper.attributes('disabled')).toBeDefined();
  });

  it('should increment click count on button click', async () => {
    const wrapper = mount(MyVueComponent);
    expect(wrapper.text()).not.toContain('1');

    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('1');

    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('2');
  });

  it('should display click count badge when count > 0', async () => {
    const wrapper = mount(MyVueComponent);
    const countElement = wrapper.find('.count');
    expect(countElement.exists()).toBe(false);

    await wrapper.find('button').trigger('click');
    expect(wrapper.find('.count').exists()).toBe(true);
    expect(wrapper.find('.count').text()).toBe('1');
  });

  it('should not allow clicks when disabled', async () => {
    const wrapper = mount(MyVueComponent, {
      props: {
        disabled: true,
      },
    });

    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).not.toContain('1');
  });

  it('should have correct CSS classes applied', () => {
    const wrapper = mount(MyVueComponent, {
      props: {
        label: 'Test Button',
      },
    });
    expect(wrapper.classes()).toContain('btn');
    expect(wrapper.classes('btn')).toBe(true);
  });
});
