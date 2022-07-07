1. What is Virtual DOM?
   A. The virtual DOM (VDOM) is a programming concept where an ideal, or “virtual”, representation of a UI is kept in memory and synced with the “real” DOM by a library such as ReactDOM. This process is called reconciliation.

This approach enables the declarative API of React: You tell React what state you want the UI to be in, and it makes sure the DOM matches that state. This abstracts out the attribute manipulation, event handling, and manual DOM updating that you would otherwise have to use to build your app.

Since “virtual DOM” is more of a pattern than a specific technology, people sometimes say it to mean different things. In React world, the term “virtual DOM” is usually associated with React elements since they are the objects representing the user interface. React, however, also uses internal objects called “fibers” to hold additional information about the component tree. They may also be considered a part of “virtual DOM” implementation in React.

2. What is SPA?
   A. SPA stands for Single Page Application
   In the past, when browsers were much less capable than today, and JavaScript performance was poor, every page was coming from a server. Every time you clicked something, a new request was made to the server and the browser subsequently loaded the new page.

Only very innovative products worked differently, and experimented with new approaches.

Today, popularized by modern frontend JavaScript frameworks like React, an app is usually built as a single page application: you only load the application code (HTML, CSS, JavaScript) once, and when you interact with the application, what generally happens is that JavaScript intercepts the browser events and instead of making a new request to the server that then returns a new document, the client requests some JSON or performs an action on the server but the page that the user sees is never completely wiped away, and behaves more like a desktop application.

3. What is the Difference between Functional and Class Components?
   A. Functional Component : 1. A functional component is just a plain JavaScript pure function that accepts props as an argument and returns a React element(JSX).
   2.There is no render method used in functional components.
   3.Functional component run from top to bottom and once the function is returned it cant be kept alive.
   4.Also known as Stateless components as they simply accept data and display them in some form, that they are mainly responsible for rendering UI.
   5.React lifecycle methods (for example, componentDidMount) cannot be used in functional components.
   6.Hooks can be easily used in functional components to make them Stateful.

example: const [name,SetName]= React.useState(‘ ‘)

Class Component : 1.A class component requires you to extend from React. Component and create a render function which returns a React element.
2.It must have the render() method returning JSX (which is syntactically similar to HTML)
3.Class component is instantiated and different life cycle method is kept alive and being run and invoked depending on phase of class component.
4.Also known as Stateful components because they implement logic and state.
5.React lifecycle methods can be used inside class components (for example, componentDidMount).
6.It requires different syntax inside a class component to implement hooks.

example: constructor(props) {

super(props);

this.state = {name: ‘ ‘}

}

4. What does man by State and its use in React?
   A. The state is a built-in React object that is used to contain data or information about the component. A component’s state can change over time; whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events and these changes determine the behavior of the component and how it will render.
   . A state can be modified based on user action or network changes
   . Every time the state of an object changes, React re-renders the component to the browser
   . The state object is initialized in the constructor
   . The state object can store multiple properties
   . this.setState() is used to change the value of the state object
   . setState() function performs a shallow merge between the new and the previous state

5. What is JSX and why do we use it instead of js?
   A. JSX is just a syntax extension of JavaScript which allows users to write React components; React is an open source frontend JavaScript library for building complex UIs; it allows the programmers to create complex UIs from smaller components.

JavaScript is an ECMAScript following scripting language which allows developers to make their web pages more interactive. Every time a webpage loads something, or a slideshow plays, or an animated picture is displayed, JavaScript is involved behind it. Basically it adds life and creativity into a website, making it more engaging.

JS is simply a scripting language, adding functionality into your website. JSX is an addition to the JavaScript syntax which is a mixture of both HTML and JavaScript. Both JS and JSX are interchangeable but JSX makes the code easier to understand for users. JSX is popularly used in React, as it makes the job of building an application much easier.

6. What is package.json?
   A. The package.json file is the heart of any Node project. It records important metadata about a project which is required before publishing to NPM, and also defines functional attributes of a project that npm uses to install dependencies, run scripts, and identify the entry point to our package.
   Using npm init to create your package.json will help to ensure you generate a valid file.

Dependencies are best managed by using npm's commands npm install, npm uninstall, and npm update, so your package.json and node_modules/ folder are kept in sync. Manually adding a dependency listing will require you to run npm install before the dependency is actually installed to your project.

Because our package.json is only where we record dependencies, and our node_modules/ folder is where the actual code for dependencies is installed, manually updating the dependency field of package.json does not immediately reflect the state of our node_modules/ folder. That's why you want to use npm to help manage dependencies, because it will update both the package.json and node_modules/ folder in tandem.

You can always edit your package.json manually in your text editor and make changes. That works well for most fields, so long as you're careful not to introduce any JSON formatting errors. We recommend you use the npm CLI commands wherever you can, however.
