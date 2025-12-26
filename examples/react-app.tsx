import { MyReactComponent } from '../src';

export default function ReactApp() {
  return (
    <div>
      <MyReactComponent label="Primary Button" variant="primary" />
      <MyReactComponent label="Secondary Button" variant="secondary" />
      <MyReactComponent label="Disabled Button" variant="primary" disabled={true} />
    </div>
  );
};