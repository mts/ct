<p align="center">
  <img width="250px" height="250px" src=".docs/image/logo.jpg">
</p>

<h1 align="center">CT</h1>

<p align="center">
  <a aria-label="npm package" href="https://www.npmjs.com/package/ct-client">
    <img alt="" src="https://img.shields.io/npm/v/ct-client.svg">
  </a>

  <a aria-label="travis build" href="https://travis-ci.org/mts/ct">
    <img alt="" src="https://img.shields.io/travis/mts/ct.svg?logo=travis">
  </a>

  <a href="https://codecov.io/gh/mts/ct">
    <img src="https://codecov.io/gh/mts/ct/branch/master/graph/badge.svg" />
  </a>

  <a aria-label="downloads" href="http://npm-stat.com/charts.html?package=ct-client&from=2018-10-13">
    <img alt="" src="https://img.shields.io/npm/dm/ct-client.svg">
  </a>

  <a aria-label="last commit" href="https://github.com/mts/ct/commits/master">
    <img alt="" src="https://img.shields.io/github/last-commit/mts/ct.svg">
  </a>

  <a aria-label="contributors graph" href="https://github.com/mts/ct/graphs/contributors">
    <img src="https://img.shields.io/github/contributors/mts/ct.svg">
  </a>

  <a aria-label="license" href="https://github.com/mts/ct/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/mts/ct.svg" alt="">
  </a>
</p>

<h2 style="color: #006400;">🗿 Introduction</h2>

<blockquote style="margin: 0; padding: 0 24px; color: olive; font-weight: 600; font-size:1em">🐝 Sharing is caring. Following is a collection of concepts which any maintainer needs to master in order to gracefully maintain this project and scale its implementation along with its unit and integration tests.</blockquote>

<h2 style="color: #006400;">🗿 Concepts</h2>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 JavaScript Runtime</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Node.js</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Node</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): <a style="color: #006400;" href="https://github.com/nodejs/node">node</a> repository on GitHub</li>
              <li>Information: <strong><em>Node is required to bootstrap the project. Linting, formatting, testing and building scripts run all on Node.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Version Control</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Git (self)</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 Git</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://git-scm.com/">Git</a> distributed version control system</li>
              <li><a style="color: #006400;" href="https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud">Git Commands</a> documentation by Atlassian</li>
              <li>Information: <strong><em>Project source code is maintained in a Git repository. Using Git commands through the command prompt or a Git Client is essential.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Git Hooks</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 Using Git Hooks</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): <a style="color: #006400;" href="https://github.com/typicode/husky">husky</a> repository on GitHub</li>
              <li>Setup file(s):<a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.huskyrc">.huskyrc</a></li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: <strong><em>Husky utilizes Git hooks such as pre-commit and pre-push</em></strong></li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Running linters and testers against staged git files</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): <a style="color: #006400;" href="https://github.com/okonet/lint-staged">lint-staged</a> repository on GitHub</li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.lintstagedrc">.lintstagedrc</a>
              </li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: <strong><em>lint-staged runs linters and testers against staged git files. Using lint-staged combined with husky and thus targeting pre-commit and pre-push Git hooks prevents source code not conforming to linting rules and formatting style being committed or pushed to the Git repository's origin</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Git Client</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Git Kraken</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://www.gitkraken.com/">Website</a></li>
              <li>Information: <strong><em>The coolest, the finest and the best Git client in the world 👌 Over 1.5 Million GitKraken Users❗</em></strong></li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Sourcetree</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><a style="color: #006400;" href="https://www.sourcetreeapp.com/">Website</a></li>
              <li>Information: <strong><em>Sourcetree simplifies how you interact with your Git repositories so you can focus on coding. Visualize and manage your repositories through Sourcetree's simple Git GUI.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Bootstrap</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Install</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>rm -rf node_modules package-lock.json && npm install</kbd><br>
        in the following directories:<br>
        <ul>
          <li><kbd>1. repository root</kbd></li>
          <li><kbd>2. packages/websocket-server</kbd></li>
          <li><kbd>3. packages/client</kbd></li>
        </ul>
        <strong><em> to remove existing node_modules directories, package-lock.json files and install all dependencies from scratch</em></strong>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Bootstrap</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>npm run bootstrap</kbd> in repository root
        <strong><em>to run linting, formatting, testing and building sequentially</em></strong>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Start</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        Run <kbd>npm start</kbd><strong><em> in 1st terminal in packages/websocket-server folder to start up websocket-server</em></strong><br>
        Check in console <kbd>listening on port 3000</kbd><br>
        Run <kbd>npm start</kbd><strong><em> in 2nd terminal in packages/client to start up webpack-dev-server</em></strong><br>
        Navigate in browser to <kbd>http://localhost:8080/</kbd><br>
        Run <kbd>npm t</kbd><strong><em> in 3rd terminal to let Jest run all test suites and check out code coverage report</em></strong><br>
        Run <kbd>npm run test -- --watch --onlyChanged --verbose</kbd><strong><em> in 3rd terminal to let Jest watch changed tests</em></strong><br>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Dynamic Code Splitting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <ul>
          <li><strong><em>Babel</em></strong> enables parsing dynamic imports through <a href="https://babeljs.io/docs/en/babel-plugin-syntax-dynamic-import">@babel/plugin-syntax-dynamic-import</a> since <a href="https://babeljs.io/blog/2019/07/03/7.5.0">v7.5.0</a></li>
          <li><strong><em>Webpack</em></strong> recommends this <a href="https://webpack.js.org/guides/code-splitting/#dynamic-imports">technique</a> instead of the legacy webpack-specific approach through optimization.splitChunks configuration option.
          </li>
        </ul>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Code Style</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Code Linting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 JavaScript</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/eslint/eslint">eslint</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/SublimeLinter/SublimeLinter-eslint">SublimeLinter-eslint</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/microsoft/vscode-eslint">vscode-eslint</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="http://plugins.jetbrains.com/plugin/7494-eslint">eslint plugin</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.eslintrc">.eslintrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.eslintignore">.eslintignore</a>
              </li>
              <li>JavaScript Style Guide(s):
                <a style="color: #006400;" href="https://github.com/airbnb/javascript">AirBnb JavaScript Style Guide</a>,
                <a style="color: #006400;" href="https://github.com/airbnb/javascript/tree/master/react">Airbnb React/JSX Style Guide</a>
              </li>
              <li>Script(s) in project's package.json:
                <ul>
                  <li>"lint:format": "npm-run-all lint format"</li>
                  <li>"lint": "npm-run-all lint:js:jsx lint:scss"</li>
                  <li>"lint:js:jsx": "eslint --ext .js --ext .jsx packages/**/src --fix"</li>
                </ul>
              </li>
              <li>Information: <strong><em>Linting scripts meant for JavaScript files recursively go through all js, jsx files under the src directory checking if the source code conforms to ESLint linting rules, applying auto fixes if possible and outputs all other violations through the console.</em></strong></li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Sass</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/stylelint/stylelint">stylelint</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/SublimeLinter/SublimeLinter-stylelint">SublimeLinter-stylelint</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/shinnn/vscode-stylelint">vscode-stylelint</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://www.jetbrains.com/help/idea/using-stylelint-code-quality-tool.html">activate stylelint</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.stylelintrc">.stylelintrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.stylelintignore">.stylelintignore</a>
              </li>
              <li>CSS Style Guide(s):
                <a style="color: #006400;" href="https://github.com/airbnb/css">Airbnb CSS / Sass Styleguide</a>
              </li>
              <li>Script(s) in project's package.json:
                  <ul>
                    <li>"lint:format": "npm-run-all lint format"</li>
                    <li>"lint": "npm-run-all lint:js:jsx lint:scss"</li>
                    <li>"lint:scss": "stylelint \"packages/**/src/**/*.{css,scss}\" --syntax=scss --fix"</li>
                  </ul>
              </li>
              <li>Information: <strong><em>Linting scripts meant for Sass files recursively go through all scss files under the src directory checking if the source code conforms to Stylelint linting rules, applying auto fixes if possible and outputs all other violations through the console.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Code Formatting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 HTML, JavaScript and Sass</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/prettier/prettier">prettier</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/jonlabelle/SublimeJsPrettier">SublimeJsPrettier</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/prettier/prettier-vscode">prettier-vscode</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://plugins.jetbrains.com/plugin/10456-prettier">prettier plugin</a> for Webstorm and ItelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.prettierrc">.prettierrc</a>,
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.prettierignore">.prettierignore</a>
              </li>
              <li>Script(s) in project's package.json:
                <ul>
                  <li>"format": "npm-run-all format:js:jsx format:scss"</li>
                  <li>"format:js:jsx": "prettier --write \"packages/**/src/**/*.{js,jsx}\""</li>
                  <li>"format:scss": "prettier --write \"packages/**/src/**/*.{css,scss}\""</li>
                </ul>
              </li>
              <li>Information: <strong><em>Code formatting scripts meant for JavaScript and Sass files recursively go through all js, jsx and scss files under the src directory enforcing a consistent style by parsing code and re-printing it with its own rules that take the maximum line length into account, wrapping code when necessary.</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">File Formatting</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
        <summary style="color: #006400;">📜 EditorConfig</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s):
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig">editorconfig</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-sublime">editorconfig-sublime</a> for Sublime Text</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-vscode">editorconfig-vscode</a> for Visual Studio Code</li>
                  <li><a style="color: #006400;" href="https://github.com/editorconfig/editorconfig-jetbrains">editorconfig-jetbrains</a> for Webstorm and IntelliJ</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.editorconfig">.editorconfig</a>
              </li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: <strong><em>File formatting configuration helps maintain consistent coding styles for multiple developers working on the same project across various editors and IDEs</em></strong></li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Application Architecture</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">State Container</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Redux</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): 
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/reduxjs/redux">redux</a> repository on GitHub</li>
                  <li><a style="color: #006400;" href="https://github.com/reduxjs/react-redux">react-redux</a> repository on GitHub</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/packages/client/src/store/client.js">client.js</a> for regular store,
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/packages/library/src/store/mock.js">mock.js</a> for mock store
              </li>
              <li>Script(s) in project's package.json: n/a</li>
              <li>Information: 
                <details>
                  <summary style="color: #006400;">Flux</summary>
                  <blockquote style="margin: 0; padding: 0 24px">
                    This project implements <a href="https://facebook.github.io/flux/">Flux </a>based application architecture through Redux state container and React integration for Redux. <br>
                    Components initiate changes by dispatching actions or thunks<br>
                    <img width="400px" height="250px" src=".docs/image/flux-component.png"> <br>
                    Dispatcher processes dispatched actions and thunks and reducer releases new state<br>
                    <img width="400px" height="250px" src=".docs/image/flux-flow.png"> <br>
                  </blockquote>
                </details>
                <details>
                  <summary style="color: #006400;">Store</summary>
                  <blockquote style="margin: 0; padding: 0 24px">
                    <ul>
                      <li>Each application in this project has a Redux store which implements the following:
                        <ul>
                          <li><strong><em>Actions</em></strong> to dispatch when mutating existing state in a syncronous flow</li>
                          <li><strong><em>Thunks</em></strong> to dispatch when mutating existing state in an asyncronous flow through redux-thunk middleware</li>
                          <li><strong><em>Reducer</em></strong> which takes existing state and an action as arguments and returns a new state. Immutability is achieved by spreading existing state to the level of mutation in the nested data structure</li>
                          <li><strong><em>State</em></strong>
                            <ul>
                              <li><strong><em>Default state</em></strong> to be used by the actual application store which consists of the following three partitions:
                                <ul>
                                  <li>context partition reflects user's signed in and authorization response states</li>
                                  <li>api partition reflects all from API endpoints' response states</li>
                                  <li>ui partition reflects all atomic design patterns' states</li>
                                </ul>
                              </li>
                              <li><strong><em>Mock state</em></strong>  to be used by a mock store when rendering snapshots and stories <br>
                                  Mock state consists of exactly the same context, api and ui partitions populated by static data.
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <strong><em>Difference actions and thunks</em></strong> is that the redux dispatcher passes a dispached action onto the reducer as second argument whereas it directly calls the thunk instead.
                      </li>
                      <li>
                        <strong><em>AppStore class</em></strong> is meant to serve as application's state container and extends a base store called <strong><em>Store</em></strong>. It sets
                        <ul> 
                          <li>the default application state in setAppDefaultState()</li>
                          <li>application state container in setAppStore()</li>
                          <li>populates application state in setAppCompleteState()</li>
                          <li>sets hot module reloading in setHotModuleReloading() when Webpack HotModuleReplacementPlugin interface is exposed under the module.hot property.</li>
                        </ul>
                      </li>
                        <li>
                          <strong><em>Store class</em></strong> sets redux-thunk as thunk middleware for redux in setMiddlewares() and composes enhancers in setEnhancer() when initialized.
                        </li>
                    </ul>
                  </blockquote>
                </details>
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Component Driven Development</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Methodology</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Atomic Design</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#atoms">Atoms: </a></em></strong>Each Atom renders an atomic piece of UI</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#molecules">Molecules: </a></em></strong>Each molecule renders a composition of atoms</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#organisms">Organism: </a></em></strong>Each application of this project implements an organism called Landing which renders a composition of molecules</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#templates">Templates: </a></em></strong>Templates consist mostly of groups of organisms stitched together to form pages</li>
              <li><strong><em><a style="color: #006400;" href="http://bradfrost.com/blog/post/atomic-web-design/#pages">Pages: </a></em></strong>Pages are specific instances of templates</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Rendering</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 React</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong><em>Component Type: </em></strong> Preferred choice of component type is staless functional</li>
              <li><strong><em>Component Partitions: </em></strong>Each component implements the following partitions along with an index.js
                <ul>
                  <li><strong><em>.jsx file: </em></strong>Contains the main UI implementation</li>
                  <li><strong><em>.scss (optional) file: </em></strong>Used in case of any component specific Sass styling implementation</li>
                  <li><strong><em>.props.js file: </em></strong>Exposes default props to the component </li>
                  <li><strong><em>.int.render.js file: </em></strong>Exposes various flavors of the component to snapshots and stories for integration testing purposes</li>
                  <li><strong><em>.int.test.js file: </em></strong>Implements snapshots for flavors of the component exposed by .int.render.js</li>
                  <li><strong><em>.int.story.js file: </em></strong>Implements stories for flavors of the component exposed by .int.render.js</li>
                </ul>
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 Scaling Tests</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Testing Strategy</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <ul>
          <li>Information: <strong><em> Testing strategy consists of<br>
            <ul>
              <li>
                Unit testing covering regular logic by implementing <a href="https://jestjs.io/">Jest unit tests</a>
              </li>
              <li>
                Integration testing covering UI logic, look and feel and responsiveness by implementing<br>
                <a href="https://jestjs.io/">Jest Snapshots</a> and
                <a href="https://github.com/storybookjs/storybook">Storybook stories</a>
              </li>
            </ul>
            </em></strong>
          </li>
          <li><img width="500px" height="250px" src=".docs/image/testing-strategy.jpg"></li>
        </ul>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Code Coverage Report</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <ul>
          <li>Information: <strong><em> Code coverage thresholds are setup in
            <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/jest.config.js">jest.config.js</a><br></em></strong>
          </li>
          <li><img width="650px" height="800px" src=".docs/image/code-coverage-report.jpg"></li>
        </ul>
      </blockquote>
    </details>    
    <details>
      <summary style="color: #006400;">Scaling Unit Tests</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Unit tests run by Jest</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s): <a style="color: #006400;" href="https://github.com/facebook/jest">jest</a> repository on GitHub</li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/jest.config.js">jest.config.js</a>,
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/jest.setup.js">jest.setup.js</a>
              </li>
              <li>Script(s) in project's package.json:
                <ul>
                  <li>"test": "jest -u --no-cache --silent --runInBand --coverage"</li>
                  <li>"test:coverage": "jest --coverage --silent"</li>
                </ul>
              </li>
              <li>Information:
                <strong><em>
                <ul>
                  <li>Check out <a style="color: #006400;" href="https://jestjs.io/">Jest </a> documentation by Facebook</li>
                  <li>Each JavaScript file whose implementation is subject to unit testing must have a .test.js file in the __tests__ directory at the same level with the targeted implementation</li>
                  <li>Test blocks must be implemented conforming to the Arrange, Act, Assert pattern</li>
                  <li>Using Jest API
                    <ul>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/tutorial-async#async-await">async/await</a> Test blocks covering asyncronous functions must be implemented conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              test('must ...', async () => {
                                ...
                                await expect(someFunction).someExpectMethod()
                              })
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/api#describename-fn">describe()</a> must be used to group related tests conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              describe('file name of module under test', () => {
                                beforeEach(() => {
                                  jest.resetModules()
                                  ...
                                })
                                afterEach(() => {
                                  jest.clearAllMocks()
                                  ...
                                }
                                describe('name of function as the unit under test', () => {
                                  test('must do something', () => {
                                  })
                                  test('must do something else', () => {
                                  })
                                })
                              })
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/jest-object#jestmockmodulename-factory-options">jest.mock()</a> must be used to mock dependency modules</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.mock('some dependency module name or relative path with module name', () => ({
                                someExposedFunction: () => ({}),
                                someOtherExposedFunction: jest.fn(),
                              }))
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://nodejs.org/api/modules.html#modules_require_id">require()</a> must be used to access a mocked dependency module</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              const someModuleMockObject = require('some-module')
                              const someOtherModuleMockObject = require('../../../relative-path-to/some-module')
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/jest-object#jestspyonobject-methodname">jest.spyOn()</a> must be used to mock functions exposed by mocked dependency modules conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject')
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/mock-function-api#mockfnmockimplementationfn">jest.mockImplementation()</a> must be used to mock the implementations of mocked functions exposed by mocked dependency modules conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn())
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockImplementation(jest.fn() => { replace with desired implementation})
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/mock-function-api#mockfnmockreturnvaluevalue">jest.mockReturnValue()</a> must be used to mock return values of mocked functions exposed by mocked dependency modules conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              jest.spyOn(requiredMockObject, 'functionExposedByRequiredMockObject').mockReturnValue(someValue)
                            </code>
                          </blockquote>
                        </details>
                      </li>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/expect">expect()</a> must be used to assert expected values against received values using any of the expect <a style="color: #006400;" href="https://jestjs.io/docs/en/expect">methods conforming to the following pattern</a></summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                              expect(someMockFunction).toHaveBeenCalled()
                              expect(someMockFunction).not.toHaveBeenCalled()
                              ...
                              expect(someMockFunction).toHaveBeenCalledTimes(someNumber)
                              expect(someMockFunction).not.toHaveBeenCalled()
                              ...
                              expect(someMockFunction).toHaveBeenCalledWith({ someObjectProperty: 'some-value', someOtherObjectProperty; expect.any(Boolean)})
                              ...
                              expect(someObject).toMatchObject(someOtherObject)
                              expect(someObject).not.toMatchObject(someOtherObject)
                              ...
                              expect(someObject).toBe(someOtherObject)
                              expect(someObject).not.toBe(someOtherObject)
                              ...
                              expect(someValue).toEqual(someOtherValue)
                              expect(someValue).not.toEqual(someOtherValue)
                              ...
                              expect(someObject).toBeUndefined()
                              expect(someObject).not.toBeUndefined()
                              ...
                              expect(somevAlue).toBeTruthy()
                              expect(somevAlue).toBeFalsy()
                            </code>
                          </blockquote>
                        </details>
                      </li>
                    </ul>
                  </li>
                </ul>
                </em></strong>
              </li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
    <details>
      <summary style="color: #006400;">Scaling Integration Tests</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Snapshots run by Jest</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s):
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/facebook/jest">jest</a> repository on GitHub</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/jest.config.js">jest.config.js</a>,
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/jest.setup.js">jest.setup.js</a>
              </li>
              <li>Script(s) in project's package.json:
                <ul>
                  <li>"test": "jest -u --no-cache --silent --runInBand --coverage"</li>
                  <li>"test:coverage": "jest --coverage --silent"</li>
                </ul>
              </li>
              <li>Information:
                <strong><em>
                <ul>
                  <li>Check out <a style="color: #006400;" href="https://jestjs.io/">Jest </a> documentation by Facebook</li>
                  <li>Each UI component whose jsx render implementation is subject to integration testing <br>
                      must have a .int.test.js file with snapshots of various flavors of the component in the __tests__ directory at the same level with the targeted implementation</li>
                  <li>Using Jest API
                    <ul>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://jestjs.io/docs/en/snapshot-testing#snapshot-testing-with-jest">Snapshot Testing with Jest</a> Snapshots must be implemented conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>
                            describe('<SomeComponent />', () => {
                              describe('Snaphot', () => {
                                test('must match composition', () => {
                                  expect(global.renderToJSON(<SomeComponent />)).toMatchSnapshot()
                                })
                              })
                            })
                            </code>
                          </blockquote>
                        </details>
                      </li>
                    </ul>
                  </li>
                </ul>
                </em></strong>
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Stories run by Storybook</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Package(s):
                <ul>
                  <li><a style="color: #006400;" href="https://github.com/storybookjs/storybook">storybook</a> repository on GitHub</li>
                </ul>
              </li>
              <li>Setup file(s):
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.storybook/addons.js">addons.js</a>,
                <a style="color: #006400;" href="https://github.com/mts/ct/blob/master/.storybook/config.js">config.js</a> for storybook
              </li>
              <li>Script(s) in project's package.json:
                <ul>
                  <li>"start-storybook": "NODE_ENV=develop start-storybook -p 3003 -c .storybook"</li>
                </ul>
              </li>
              <li>Information:
                <strong><em>
                <ul>
                  <li>Check out <a style="color: #006400;" href="https://storybook.js.org/docs/basics/introduction/">Storybook </a> documentation by Storybook.js</li>
                  <li>Each UI component whose jsx render implementation is subject to integration testing <br>
                      must have a .int.story.js file with stories of various flavors of the component in the __tests__ directory at the same level with the targeted<br>implementation</li>
                  <li>Using Storybook API
                    <ul>
                      <li>
                        <details>
                          <summary><a style="color: #006400;" href="https://storybook.js.org/docs/basics/writing-stories/#docs-content">Writing Stories with Storybook</a> Stories must be implemented conforming to the following pattern</summary>
                          <blockquote style="margin: 0; padding: 0 24px">
                            <code>storiesOf('SomeApplication/SomeAtomicDesignPattern/SomeComponent', module).add(someRenderInfo.text, () => someRender, someRenderInfo.parameters)</code>
                          </blockquote>
                        </details>
                      </li>
                    </ul>
                  </li>
                </ul>
                </em></strong>
              </li>
            </ul>
          </blockquote>
        </details>
        <details>
          <summary style="color: #006400;">📜 Using mock store with mock state</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li><strong><em>Mock store</em></strong> is acquired in <a href="https://github.com/mts/ct/blob/master/packages/library/src/store/mock.js">mock.js</a> and uses redux-mock-store</li>
              <li><strong><em>Mock state</em></strong> is acquired in <a href="https://github.com/mts/ct/blob/master/packages/library/src/state/mock.js">mock.js</a></li>
              <li>
                <strong><em>Immutability</em></strong> of mock state across integration tests is achieved using deepCloneObject() <br>
                Changes specific to a test scenario can be applied to the immutable mock state clone. <br>
                Then adjusted mock state clone is passed on to the mock store and mock store is provided to any UI components involved in the test using react-redux provider
              </li>
              <li><strong><em>React Redux Provider</em></strong> is used to provide the mock store with a mock state to any UI component. <br>
                It accepts any store object in the store prop and provides the store to UI components rendered as its children.
              </li>
            </ul>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 📗 CI / CD</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <details>
      <summary style="color: #006400;">Continuous integration service</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Travis CI</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Check out <a style="color: #006400;" href="https://docs.travis-ci.com/"> documentation</a> by Travis CI</li>
              <li>Check out <a style="color: #006400;" href="https://travis-ci.org/mts/ct">builds</a> at Travis CI</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>    
    <details>
      <summary style="color: #006400;">Branching Model</summary>
      <blockquote style="margin: 0; padding: 0 24px">
        <details>
          <summary style="color: #006400;">📜 Git Flow</summary>
          <blockquote style="margin: 0; padding: 0 24px">
            <ul>
              <li>Check out <a style="color: #006400;" href="https://blog.axosoft.com/gitflow/">Gitflow </a> documentation by Axasoft</li>
              <li>Check out <a style="color: #006400;" href="https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow">Gitflow </a> documentation by Atlassian</li>
            </ul>
          </blockquote>
        </details>
      </blockquote>
    </details>
  </blockquote>
</details>

<h2 style="color: #006400;">🗿 Applications</h2>

<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 🐝 ReactJS, ReduxJS Client</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <ul>
      <li>Running locally at <a style="color: #006400;" href="http://localhost:8080/">http://localhost:8080/</a></li>
      <li>Deployed to Github Pages and running at <a style="color: #006400;" href="https://mts.github.io/ct/">https://mts.github.io/ct/</a></li>
      <li>Logs progress to browser console when interacting with WebSocket Server running at <a style="color: #006400;" href="http://localhost:3000/">http://localhost:3000/</a><br>
        <img width="600px" height="500px" src=".docs/image/client-runtime.jpg">
      </li>
    </ul>
  </blockquote>
</details>
<details>
  <summary><span style="color: #006400; font-weight: 600; font-size:1.3em"> 🐝 WebSocket Server</span></summary>
  <blockquote style="margin: 0; padding: 0 24px">
    <ul>
      <li>Running locally at <a style="color: #006400;" href="http://localhost:3000/">http://localhost:3000/</a></li>
      <li>Not deployed to any cloud hosting environment</li>
      <li>Logs progress to terminal console when interacting with WebSocket Client running at <a style="color: #006400;" href="http://localhost:8080/">http://localhost:8080/</a><br>
        <img width="600px" height="500px" src=".docs/image/websocket-server-runtime.jpg">
      </li>
    </ul>
  </blockquote>
</details>
