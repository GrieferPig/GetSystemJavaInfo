# GetSystemJavaInfo
Get system java info using Node.js

# How to use
S1mple. There's only 2 methods: `isJrePresent()` and `getJreVer()`

### isJrePresent()

`isJrePresent()` returns a boolean indicating whether if JRE exists and can found in PATH env.

### getJreVer()

`getJreVer()` returns a list consists of the version information of JRE. An example return value looks like this:

```
[ '17.0.2', 17, 0, 2 ]
```

where the first string is the full version number, and the rest are major, minor, and bugfix.

If no JRE found, it will return an array consisting an empty string: `[ '' ]`

## Notes

Note that all of these functions above are synchronized methods. They are wrapped using an async function.

If you prefer in-sync functions, use `isJrePresentSync()` and `getJreVerSync()`.
