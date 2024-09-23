declare module 'tailwindcss/lib/util/flattenColorPalette' {
    type ColorPalette = Record<string, string | Record<string, string>>;
    const flattenColorPalette: (colors: ColorPalette | null | undefined) => Record<string, string>;
    export default flattenColorPalette;
}
