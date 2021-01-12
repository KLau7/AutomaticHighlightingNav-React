Start project with: 

### `npm start`

**How it works:

A PageContainer component is used to wrap the AppRouter in Router.

A reference is passed to the child component routed by AppRouter, therefore reference is passed to currently rendered page component,

child nodes data (section elements only) is retrieved and passed to Nav component.

Scroll and resize events are handled in page container.

Section elements that are to be tracked need to be on the top level in page components.

Modify ref logic if there exist special requirements to the structure.

**How to use:

***New Page:

1. Create your page container with structure fullfiling the above requirements.

2. Add to constants/route_data.js

***Page Routing:

1. Simply use React Link.

***Anchor tags:

1. Use scroll function instead of the traditional href="#"