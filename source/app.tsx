import React from 'react';
import { Routes, Route } from 'react-router-dom';

export function ViteAppApp() {
  return (
    <>
       {/* header component */}
        <Routes>
          <Route path="/" element={<div>Hello World!!</div>}>
             Hello World!
          </Route>

          <Route path="/about">
             {/* about page component */}
          </Route>

        </Routes>
        {/* footer component */}
    </>
  );
}
