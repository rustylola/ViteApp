
import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

createInertiaApp({
  resolve: name => {
    const pages = import.meta.glob('./Pages/**/*.vue', { eager: true })
    return pages[`./Pages/${name}.vue`]
  },
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .mount(el)
  },
})

    /*
    Explain: createInertiaApp() - has two parameter the resolve and setup, setup also has own params    
    Resolve Parameter - this parameter will tell inertia where to look for view components with pages
    import.meta.glob it must be import all pages by this line of code
    */

    /*  LOLA 25-05-2023
    NOTE: All default code here have been deleted 
        : as you can see, the code here are from inertiajs by pasting their configuration
          code provided by the website.
    */ 