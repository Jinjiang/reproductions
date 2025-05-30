declare const _default: __VLS_WithSlots<
    typeof __VLS_component,
    __VLS_Slots
>;

export default _default;

type __VLS_WithSlots<T, S> = T & (new () => {
    $slots: S;
});

declare const __VLS_component: import("vue").DefineComponent<
    {},
    {
        $emit: (event: "update:message", ...args: any[]) => void;
        title: string;
        initialMessage: string;
        $props: {
            readonly title?: string | undefined;
            readonly initialMessage?: string | undefined;
        };
    },
    {},
    {},
    {},
    import("vue").ComponentOptionsMixin,
    import("vue").ComponentOptionsMixin,
    {},
    string,
    import("vue").PublicProps,
    Readonly<{}> & Readonly<{}>,
    {},
    {},
    {},
    {},
    string,
    import("vue").ComponentProvideOptions,
    true,
    {},
    any
>;

type __VLS_Slots = {
    default?: ((props: {}) => any) | undefined;
} & {
    footer?: ((props: {}) => any) | undefined;
};
