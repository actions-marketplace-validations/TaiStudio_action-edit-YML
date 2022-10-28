# action-edit-YML

### How to use ?

| Parameters | Description | Value(s) |
| ----------- | ----------- | ----------- |
| type | this is a mode | [single, multiple] |
| files |  |
| replace | strPARAM |
| replaceFor | strPARAM |

### Demo

```yml
name: Edit Files

on: push
    
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
    - name: Edit Files
      uses: TaiStudio/action-edit-YML@main
      with:
        type: 'single'
        files: "./example/lastest.yml"
        elementSTR: "['files'][0]['url']"
        replace: "-"
        replaceFor: "."
```