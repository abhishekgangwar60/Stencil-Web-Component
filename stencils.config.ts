import { Config } from '@stencil/core';

// Stencil configuration is described here

export const config: Config = {
    namespace: 'stencil-web-component',
    outputTargets: [
        { type: 'dist' },
        { type: 'www' }
    ],
    globalStyle: 'src/global/app.css'
}