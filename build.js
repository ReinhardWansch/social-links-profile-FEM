import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild.build({
    entryPoints: ['src/scss/index.scss'],
    bundle: true,
    outfile: 'dist/css/style.css',
    sourcemap: true,
    plugins: [sassPlugin({quietDeps: true})]
}).catch((e) => {
    // console.error('Build failed:', e.message);
    process.exit(1);
}).finally(() => {
    console.log('Build finished');
});