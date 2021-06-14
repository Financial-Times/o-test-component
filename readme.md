# o-test-component

This component is used to aid in testing the Origami tooling systems.

- [Usage](#usage)
- [Versions](#versions)
- [Licence](#licence)

## Usage

This project should not be used by any teams other than Origami.

Each release of this component is used to test a different scenario in the Origami services and tools.

To learn about getting started with other Origami components see the [Origami component documentation](https://origami.ft.com/docs/components).

## Versions

|version|valid js|valid sass|valid html|valid demos|valid readme|js tests pass|sass tests pass|js lint passes|sass lint passes|valid origami.json  | type  | description                                        |
|-------|--------|----------|----------|-----------|------------|-------------|---------------|--------------|----------------|--------------------|------------|-----------------------------------------------|
|2.2.1  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | No             | Yes                | component  |                                               |
|2.2.2  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | No           | Yes            | Yes                | component  |                                               |
|2.2.3  | Yes    | No       | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | No             | Yes                | component  |                                               |
|2.2.4  | Yes    | Yes      | Yes      | Yes       | No         | Yes         | Yes           | Yes          | Yes            | Yes                | component  |                                               |
|2.2.5  | Yes    | Yes      | Yes      | Yes       | Yes        | No          | Yes           | Yes          | Yes            | Yes                | component  |                                               |
|2.2.6  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | No            | Yes          | Yes            | Yes                | component  |                                               |
|2.2.7  | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  |                                               |
|2.2.8  | Yes    | Yes      | No       | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  |                                               |
|2.2.9  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  | ✅ All correct.                                |
|2.2.10 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  | The demo's mustache causes a compilation error|
|2.2.11 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  | The demo's sass causes a compilation error    |
|2.2.12 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  | The demo's js causes a compilation error      |
|2.2.13 | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | No                 | component  | No origami.json file                          |
|2.2.14 | No     | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | No           | Yes            | Yes                | component  | Syntax errors in component js                 |
|2.2.15 | Yes    | Yes      | No       | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  | The demo html contains invalid syntax which causes prettier to throw an error |
|2.2.16 | Yes    | -        | No       | Yes       | Yes        | Yes         | -             | Yes          | Yes            | Yes                | component  |                                               |
|2.2.17 | Yes    | No       | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  | Missing the primary mixin `oTestComponent` |
|2.2.18 | Yes    | No       | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | component  | CSS is output by the sass by default on import |
|2.2.20 | Yes    | Yes      | Yes      | -         | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | library    | ✅ All correct. This library release has no "primary" `oTestComponent` Sass mixin. (2.2.19 is identical but specifies a "component" type in `origami.json`.) |
|2.2.21 | Yes    | No       | Yes      | -         | Yes        | Yes         | Yes           | Yes          | Yes            | Yes                | library    | CSS is output by the sass by default on import |

_2.2.1 introduces a Sass linting error not present in 2.0.1 or 2.1.1. Otherwise 2.0.x and 2.1.x match the corresponding patch version in the table above, up to 2.2.16. However they have a number of additional failures related to changes made since v1 of the Origami specification._

***

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
