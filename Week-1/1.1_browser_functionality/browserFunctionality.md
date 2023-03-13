## Working of a web browser

A web browser retrieves information from other parts of the web using using Hypertext transfer protocol and renders it onto the screens of desktops or mobile which requested for the respective resource.
### The browser's main components are: (High-level components)

**The user interface**: this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

**The browser engine**: marshals actions between the UI and the rendering engine.

**The rendering engine**: responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

**Networking**: for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

**UI backend**: used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
JavaScript interpreter. Used to parse and execute JavaScript code.
Data storage. This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.
![highlevel_browser](https://user-images.githubusercontent.com/47073765/224567801-7d40c56b-9a1a-463e-a4c8-fcb5a39176b8.png)

### Rendering engine and its uses:
The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network![rendering_engine](https://user-images.githubusercontent.com/47073765/224568017-68ee58dc-ce89-4e64-82dc-74047b5eaed3.png)
