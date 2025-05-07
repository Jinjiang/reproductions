import { ComponentType } from 'react';
export type Components = {
    [identifier: string]: ComponentType;
};
export declare const MDXScopeContext: import("react").Context<Components>;
