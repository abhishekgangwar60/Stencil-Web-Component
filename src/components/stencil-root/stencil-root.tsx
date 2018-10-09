import { Component } from '@stencil/core';

@Component({
    tag: 'stencil-root',
    styleUrl: 'stencil-root.css'
})
export class StencilRoot {

    render() {
        return (
            <div class="app-container">
                <p>
                    <div class='app-text'>
                        Adios amigos!! <br />
                        This is a stencil project to create web components.<br />
                        Please Go to <span class="font-italic"> src/component/stencil-root.tsx</span> to changes the Code.<br />
                        Happy Coding !!
                    </div>
                </p>
            </div>
        )
    }
}