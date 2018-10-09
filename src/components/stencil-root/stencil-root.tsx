import { Component } from '@stencil/core';

@Component({
    tag: 'stencil-root',
    styleUrl: 'stencil-root.css'
})
export class StencilRoot {

    render() {
        return (
            <div>
                Adios Amigos!! This is a stencil project to create web components.
                Please Go to src/component/stencil-root.tsx tp
            </div>
        )
    }
}