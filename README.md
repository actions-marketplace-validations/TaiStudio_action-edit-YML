# action-edit-YML

### How to use ?

| Parameters | Description | Value(s) |
| ----------- | ----------- | ----------- |
| type | this is a mode | [single, multiple] |
| files | array that contains all files to modify | ['./example/latest.yml']
| replace | find string to replace | '-' |
| replaceFor | replace with this value | '.' |

### Demo

```./example/latest.yml```:
```yml
version: 1.0.1
files:
  - url: hugo-Setup-1.0.1.exe
    sha512: 4HYukc8KDSCZrPJ9eDi50gQBCHh3fHljaQ1uR7zCU61VEAhrKk5zQ+HsWGet6/jmH8fVE9SYRAZeDU1m8OMeBA==
    size: 59441671
path: hugo-Setup-1.0.1.exe
sha512: 4HYukc8KDSCZrPJ9eDi50gQBCHh3fHljaQ1uR7zCU61VEAhrKk5zQ+HsWGet6/jmH8fVE9SYRAZeDU1m8OMeBA==
releaseDate: '2021-08-11T11:30:10.914Z'
```
for example you need replace all ``-`` characters per ``.`` for ``['files'][0]['url']`` value you need this action:
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
        files: "./example/latest.yml"
        elementSTR: "['files'][0]['url']"
        replace: "-"
        replaceFor: "."
```
look the result:
```./example/latest.yml```:
```yml
version: 1.0.1
files:
  - url: hugo.Setup.1.0.1.exe
    sha512: 4HYukc8KDSCZrPJ9eDi50gQBCHh3fHljaQ1uR7zCU61VEAhrKk5zQ+HsWGet6/jmH8fVE9SYRAZeDU1m8OMeBA==
    size: 59441671
path: hugo-Setup-1.0.1.exe
sha512: 4HYukc8KDSCZrPJ9eDi50gQBCHh3fHljaQ1uR7zCU61VEAhrKk5zQ+HsWGet6/jmH8fVE9SYRAZeDU1m8OMeBA==
releaseDate: '2021-08-11T11:30:10.914Z'
```