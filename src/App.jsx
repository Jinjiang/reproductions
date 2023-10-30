import { lazy, Suspense } from 'react';
import { ArrowFunction } from './ArrowFunction';
import ClassDefault from './ClassDefault';
import { ClassNamed } from './ClassNamed';
import FunctionDefault from './FunctionDefault';
import { FunctionNamed } from './FunctionNamed';
import FooBarBaz from './FooBarBaz';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <ClassDefault />
      <ClassNamed />
      <FunctionDefault />
      <FunctionNamed />
      <ArrowFunction />
      <Suspense fallback={<h1>Loading</h1>}>
        <LazyComponent />
      </Suspense>
      <FooBarBaz />
    </div>
  );
}

export default App;
