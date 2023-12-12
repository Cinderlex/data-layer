import { resolve as resolvePath } from 'path';
import { defineConfig } from 'vite';
import dtsPlugin from 'vite-plugin-dts';

const names = ['BinaryTree', 'LinkedList', 'ReadonlyArray'];

export default defineConfig({
    build: {
        outDir: 'lib',
        lib: {
            entry: names.map(name => resolvePath(__dirname, `src/${name}.ts`)),
            formats: ['es', 'cjs'],
            fileName: (format, entryName) => {
                const name = entryName.split('/').at(-1).split('.')[0];
                const extension = { es: 'mjs', cjs: 'js' }[format] as string;
                return `${name}.${extension}`;
            },
        },
    },
    plugins: [dtsPlugin({ include: names.map(name => `src/${name}.ts`) })],
});
