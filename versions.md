# Test component versions

## Legend

| ✅ | Yes            |
| ❌ | No             |
| 😊 | Not applicable |


## Tables

| version | install | origami.json verify | sass verify | sass build | js verify | js build | demo build |
|---------|---------|---------------------|-------------|------------|-----------|----------|------------|
| 1.0.0   | ✅      | ❌                  | 😊          | 😊         | 😊        | 😊       | 😊         |
| 1.0.1   | ✅      | ❌                  | 😊          | 😊         | ❌        | ❌       |            |
| 1.0.2   | ✅      | ❌                  | 😊          | 😊         | ❌        | ✅       |            |
| 1.0.3   | ✅      | ❌                  | ✅          | ❌         | ❌        | ✅       |            |
| 1.0.4   | ✅      | ❌                  | ✅          | ✅         | ❌        | ✅       |            |
| 1.0.5   | ✅      | ❌                  | ✅          | ✅         | ❌        | ✅       |            |
| 1.0.6   | ✅      | ❌                  | ✅          | ✅         | ❌        | ❌       |            |
| 1.0.7   | ✅      | ❌                  | ✅          | ✅         | ❌        | ❌       |            |
| 1.0.8   | ✅      | ❌                  |             |            |           |          |            |
| 1.0.9   |         |                     |             |            |           |          |            |
| 1.0.10  |         |                     |             |            |           |          |            |
| 1.0.11  |         |                     |             |            |           |          |            |
| 1.0.12  |         |                     |             |            |           |          |            |
| 1.0.13  |         |                     |             |            |           |          |            |
| 1.0.14  |         |                     |             |            |           |          |            |
| 1.0.15  |         |                     |             |            |           |          |            |
| 1.0.16  |         |                     |             |            |           |          |            |
| 1.0.17  |         |                     |             |            |           |          |            |
| 1.0.18  |         |                     |             |            |           |          |            |
| 1.0.19  |         |                     |             |            |           |          |            |
| 1.0.20  |         |                     |             |            |           |          |            |
| 1.0.21  |         |                     |             |            |           |          |            |
| 1.0.22  |         |                     |             |            |           |          |            |
| 1.0.23  |         |                     |             |            |           |          |            |
| 1.0.24  |         |                     |             |            |           |          |            |
| 1.0.25  |         |                     |             |            |           |          |            |
| 1.0.26  |         |                     |             |            |           |          |            |
| 1.0.27  |         |                     |             |            |           |          |            |
| 1.0.28  |         |                     |             |            |           |          |            |
| 1.0.29  |         |                     |             |            |           |          |            |
| 1.0.30  |         |                     |             |            |           |          |            |
| 1.0.31  |         |                     |             |            |           |          |            |
| 1.0.32  |         |                     |             |            |           |          |            |
| 1.0.33  |         |                     |             |            |           |          |            |
| 1.0.34  |         |                     |             |            |           |          |            |

| version | notes                                                                        | created    |
|---------|------------------------------------------------------------------------------|------------|
| 1.0.0   | Has only a `bower.json`. No `origami.json`, sass or json                     | 2017-01-31 |
| 1.0.1   | `main.js` contains syntax errors                                             | 2017-01-31 |
| 1.0.2   | JS fixed, but verify fails from 'use strict' in a module. no sass, no o.json | 2017-01-31 |
| 1.0.3   | Contains invalid sass! js as 1.0.2                                           | 2017-01-31 |
| 1.0.4   | Sass fixed, js as 1.0.2                                                      | 2017-01-31 |
| 1.0.5   | Syntax error in file not included in main file                               | 2017-01-31 |
| 1.0.6   | Requires module not listed as a dependency in manifest                       | 2017-01-31 |
| 1.0.7   | Has css error in non-included file. js as 1.0.6                              | 2017-01-31 |
| 1.0.8   | Invalid syntax in demo. Origami.json exists, but is invalid                  | 2017-02-01 |
| 1.0.9   |                                                                              |            |
| 1.0.10  |                                                                              |            |
| 1.0.11  |                                                                              |            |
| 1.0.12  |                                                                              |            |
| 1.0.13  |                                                                              |            |
| 1.0.14  |                                                                              |            |
| 1.0.15  |                                                                              |            |
| 1.0.16  |                                                                              |            |
| 1.0.17  |                                                                              |            |
| 1.0.18  |                                                                              |            |
| 1.0.19  |                                                                              |            |
| 1.0.20  |                                                                              |            |
| 1.0.21  |                                                                              |            |
| 1.0.22  |                                                                              |            |
| 1.0.23  |                                                                              |            |
| 1.0.24  |                                                                              |            |
| 1.0.25  |                                                                              |            |
| 1.0.26  |                                                                              |            |
| 1.0.27  |                                                                              |            |
| 1.0.28  |                                                                              |            |
| 1.0.29  |                                                                              |            |
| 1.0.30  |                                                                              |            |
| 1.0.31  |                                                                              |            |
| 1.0.32  |                                                                              |            |
| 1.0.33  |                                                                              |            |
| 1.0.34  |                                                                              |            |
| 1.0.35  |                                                                              |            |
Add bower file for component
Add javascript file which contains syntax error
Add bower file for component
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Include js and scss files in main field
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
spec compliant bower config
Include js and scss files in main field
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Merge pull request #2 from Financial-Times/test-brand
Test for OBS brand param.
spec compliant bower config
Include js and scss files in main field
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Codedocs Test Code
Make buildable
Correct verify issues
remove ds_store
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
jsdoc link param test
Remove sassdoc result
Correct alias
Correct alias
More realistic variable name
spelling
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
Update module examples
Fix linting quick -- why not!
Add commented scss
Update module names and use more realistic namespace exampl
Correct "example" example
Add example of a single export module.
Add constructor to module example.
Add @constructor example (@class synonym).
Add @extends example.
Add JSDoc tests.
Merge pull request #2 from Financial-Times/test-brand
Test for OBS brand param.
spec compliant bower config
Include js and scss files in main field
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Merge pull request #15 from Financial-Times/js-only
Use tabs over spaces
JS only component test
Codedocs Test Code
Make buildable
Correct verify issues
remove ds_store
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
jsdoc link param test
Remove sassdoc result
Correct alias
Correct alias
More realistic variable name
spelling
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
Update module examples
Fix linting quick -- why not!
Add commented scss
Update module names and use more realistic namespace exampl
Correct "example" example
Add example of a single export module.
Add constructor to module example.
Add @constructor example (@class synonym).
Add @extends example.
Add JSDoc tests.
Merge pull request #2 from Financial-Times/test-brand
Test for OBS brand param.
spec compliant bower config
Include js and scss files in main field
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Merge pull request #16 from Financial-Times/sass-only
Merge master.
Merge pull request #15 from Financial-Times/js-only
Use tabs over spaces
Sass only component test
JS only component test
Codedocs Test Code
Make buildable
Correct verify issues
remove ds_store
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
jsdoc link param test
Remove sassdoc result
Correct alias
Correct alias
More realistic variable name
spelling
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
Update module examples
Fix linting quick -- why not!
Add commented scss
Update module names and use more realistic namespace exampl
Correct "example" example
Add example of a single export module.
Add constructor to module example.
Add @constructor example (@class synonym).
Add @extends example.
Add JSDoc tests.
Merge pull request #2 from Financial-Times/test-brand
Test for OBS brand param.
spec compliant bower config
Include js and scss files in main field
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
Merge pull request #36 from Financial-Times/system-code-var
Create test for global $system-code variable.
add issue template (#17)
Merge pull request #16 from Financial-Times/sass-only
Merge master.
Merge pull request #15 from Financial-Times/js-only
Use tabs over spaces
Sass only component test
JS only component test
Codedocs Test Code
Make buildable
Correct verify issues
remove ds_store
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
jsdoc link param test
Remove sassdoc result
Correct alias
Correct alias
More realistic variable name
spelling
Merge branch 'jsdoc' of github.com:Financial-Times/o-test-component into jsdoc
Update module examples
Fix linting quick -- why not!
Add commented scss
Update module names and use more realistic namespace exampl
Correct "example" example
Add example of a single export module.
Add constructor to module example.
Add @constructor example (@class synonym).
Add @extends example.
Add JSDoc tests.
Merge pull request #2 from Financial-Times/test-brand
Test for OBS brand param.
spec compliant bower config
Include js and scss files in main field
Add support contact details to origami.json (#1)
remove placeholder npm test
linting
Add package.json
Use es7 syntax to test origami build tools
Use ES6 class
remove old demo format
restore origami demo
dont ignore js files
removes demos from origain.json
old config format
Using globs for main and ignore
Add back valid main export files
Change main export to a file which does not exist
Add ES6 features to the main JS file
Remove missing dependency
Remove dependency section from origami.json
Add missing bower dependency
Add readme
mark component as deprecated
Add a dependency which does not exist
fix missing module in main js file
Fix syntax in demo
Add a demo which has invalid syntax
Add CSS which contains syntax error
Require a module which is missing from dependency list in order to test bundling systems
Add file which contains syntax error but is not included via main file
Fix syntax error in Sass file
Add sass file which has syntax errors
Fix syntax error in Javascript file
Add javascript file which contains syntax error
Add bower file for component
