**Note : each directory style and architecture create and design by admin any following commits that want to change the design by developers will be reject.**

# Main App Achitecture `src`


| Directory | Description | 
| ------ | -------|
| **app** | main directory of apps and modules that will be use in the hole project |
| **config** | special configurations of environment or other things like configuration of features that will be used in development mode or prodution |

# apps Architecture `src > app`

| Directory | Description |
|-|-|
| **component** | main place to implement react components whether statefull or stateless |
| **static** | placeholder of staic files like `css`, `image`, `font` and `json` files |
| **store** | The reducer of the app or state controllers or any thing you call it all the routins, actions and constant values place at this place and user modules just call them  |
| **utils** | pure js functions and (non-react-components) will be palce at here somthings like `API` and some global methods (like string variable special methods and jobs) or any thing else that not part of react |
| `index.js` | app definition and export to outer modules. In this case, this file will be a **App Provider** of this solution |
| `README.md` | complete details abut part of the projects in app directory |