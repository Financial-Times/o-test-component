# o-test-component

This component is used to aid in testing the Origami tooling systems.

- [Usage](#usage)
- [Versions](#versions)
- [Licence](#licence)

## Usage

This module should not be used by any teams other than Origami.

Each release of this component is used to test a different scenario in the Origami services and tools.

To learn about getting started with other Origami components see the [Origami component documentation](https://origami.ft.com/docs/components).

## Versions

|version|valid js|valid sass|valid html|valid demos|valid readme|js tests pass|sass tests pass|valid origami.json  |description                      |
|-------|--------|----------|----------|-----------|------------|-------------|---------------|--------------------|---------------------------------|
|2.2.3  | Yes    | No       | Yes      | Yes       | Yes        | Yes         | Yes           | Yes  |                                               |
|2.2.4  | Yes    | Yes      | Yes      | Yes       | No         | Yes         | Yes           | Yes  |                                               |
|2.2.5  | Yes    | Yes      | Yes      | Yes       | Yes        | No          | Yes           | Yes  |                                               |
|2.2.6  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | No            | Yes  |                                               |
|2.2.7  | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes  |                                               |
|2.2.8  | Yes    | Yes      | No       | Yes       | Yes        | Yes         | Yes           | Yes  |                                               |
|2.2.9  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes  | ✅ All correct.                                |
|2.2.10 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes  | The demo's mustache causes a compilation error|
|2.2.11 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes  | The demo's sass causes a compilation error    |
|2.2.12 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes  | The demo's js causes a compilation error      |
|2.2.13 | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | No   | No origami.json file                          |
|2.2.14 | No     | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes  | Syntax errors in component js                 |
|2.2.15 | Yes    | Yes      | No       | Yes       | Yes        | Yes         | Yes           | Yes  | The demo html contains invalid syntax which causes prettier to throw an error |
|2.2.16 | Yes    | -        | No       | Yes       | Yes        | Yes         | -             | Yes  |                                               |

_2.0.x and 2.1.x match the corresponding patch version in the table above. However they have a number of additional failures related to [changes made](https://github.com/Financial-Times/o-test-component/pull/147) in the draft v2 version of the Origami specification, including an invalid `origamiVersion` in `origami.json` for 2.0.x test components._               |

***

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
