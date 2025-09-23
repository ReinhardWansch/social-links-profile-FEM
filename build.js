import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';

esbuild.build({
    entryPoints: ['src/scss/index.scss'],
    bundle: true,
    outfile: 'dist/css/style.css',
    plugins: [sassPlugin({quietDeps: true})]
}).catch(() => process.exit(1));