import esbuild from 'esbuild';
import { sassPlugin } from 'esbuild-sass-plugin';


const buildLogger = {
    name: 'build-logger',
    setup(build) {
        build.onEnd((result) => {
            if (result.errors.length === 0) {
                console.log('✅ Build completed successfully');
            } else {
                console.log('❌ Build completed with errors');
            }
        });
    }
}

let context;
try {
    context = await esbuild.context({
        entryPoints: ['./src/scss/index.scss'],
        bundle: true,
        outdir: 'dist/css',
        minify: true,
        sourcemap: true,
        plugins: [
            sassPlugin(),
            buildLogger
        ]
    });
    await context.watch();
    console.log('Watching for changes...');
} catch (error) {
    console.error('Failed to set up esbuild context:', error);
    process.exit(1);
}

// Optional: Cleanup bei Prozess-Ende
process.on('SIGINT', async () => {
    console.log('cleaning up...');
    if (context) {
        await context.dispose();
    }
    process.exit(0);
});

