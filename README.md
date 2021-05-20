# o-test-component

This component is used to aid in testing the Origami tooling systems.

- [Usage](#usage)
- [Versions](#versions)
- [Migration guide](#migration-guide)
- [Licence](#licence)

## Usage

This module should not be used by any teams other than Origami.

Each release of this component is used to test a different scenario in the Origami services and tools.

To learn about getting started with other Origami components see the [Origami component documentation](https://origami.ft.com/docs/components).

## Versions

|version|valid js|valid sass|valid html|valid demos|valid readme|js tests pass|sass tests pass|js lint passes|sass lint passes|valid origami.json  |description                      |
|-------|--------|----------|----------|-----------|------------|-------------|---------------|--------------|----------------|--------------------|---------------------------------|
|2.3.1  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | No             | Yes  |                                               |
|2.3.2  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | No           | Yes            | Yes  |                                               |
|2.3.3  | Yes    | No       | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | No             | Yes  |                                               |
|2.3.4  | Yes    | Yes      | Yes      | Yes       | No         | Yes         | Yes           | Yes          | Yes            | Yes  |                                               |
|2.3.5  | Yes    | Yes      | Yes      | Yes       | Yes        | No          | Yes           | Yes          | Yes            | Yes  |                                               |
|2.3.6  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | No            | Yes          | Yes            | Yes  |                                               |
|2.3.7  | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes  |                                               |
|2.3.8  | Yes    | Yes      | No       | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes  |                                               |
|2.3.9  | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes  | ✅ All correct.                                |
|2.3.10 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes  | The demo's mustache causes a compilation error|
|2.3.11 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes  | The demo's sass causes a compilation error    |
|2.3.12 | Yes    | Yes      | Yes      | No        | Yes        | Yes         | Yes           | Yes          | Yes            | Yes  | The demo's js causes a compilation error      |
|2.3.13 | Yes    | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | No   | No origami.json file                          |
|2.3.14 | No     | Yes      | Yes      | Yes       | Yes        | Yes         | Yes           | No           | Yes            | Yes  | Syntax errors in component js                 |
|2.3.15 | Yes    | Yes      | No       | Yes       | Yes        | Yes         | Yes           | Yes          | Yes            | Yes  | The demo html contains invalid syntax which causes prettier to throw an error |
|2.3.16 | Yes    | -        | No       | Yes       | Yes        | Yes         | -             | Yes          | Yes            | Yes  |                                               |

_2.2.x versions match the corresponding patch version in the table above. However they have a number of additional failures related to changes made in the draft v2 version of the Origami specification, including the renaming of some `origami.json` keys._

## Migration Guide
As a test component usual release rules do not apply. Breaking changes will be released as minor or patch versions, for example to test how services behave with an invalid component. However major releases may be made as a helpful way to group test releases. See the [migration guide](MIGRATION.md) for details.

***

## Licence

This software is published by the Financial Times under the [MIT licence](http://opensource.org/licenses/MIT).
