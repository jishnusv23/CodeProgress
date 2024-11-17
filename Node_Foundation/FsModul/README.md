# fs Module in Node.js

The `fs` module in Node.js is a built-in module that provides an API for interacting with the file system. It allows developers to perform various file operations such as creating, reading, writing, appending, updating, renaming, and deleting files and directories. The `fs` module supports both synchronous and asynchronous methods, offering flexibility depending on the application's needs.

---

## Key Features of the fs Module
- **File Management**: Create, read, write, and delete files.
- **Directory Management**: Create, read, and remove directories.
- **Stream Support**: Handle large files efficiently using streams.
- **File Information**: Retrieve metadata about files and directories.
- **Path Handling**: Work with file paths to perform operations.

---

## Commonly Used Methods in fs Module

### File Operations

| **Method**       | **Description**                   | **Synchronous**  | **Asynchronous**   |
|------------------|-----------------------------------|------------------|--------------------|
| `fs.writeFile`   | Creates or overwrites a file.     | ❌               | ✅                |
| `fs.readFile`    | Reads the content of a file.      | ❌               | ✅                |
| `fs.appendFile`  | Appends content to a file.        | ❌               | ✅                |
| `fs.unlink`      | Deletes a file.                   | ❌               | ✅                |

### Directory Operations

| **Method**      | **Description**                   | **Synchronous**  | **Asynchronous**  |
|------------------|----------------------------------|------------------|-------------------|
| `fs.mkdir`       | Creates a directory.             | ❌               | ✅               |
| `fs.rmdir`       | Deletes an empty directory.      | ❌               | ✅               |
| `fs.readdir`     | Reads the content of a directory.| ❌               | ✅               |

### File Information

| **Method**      | **Description**                   | **Synchronous**   | **Asynchronous**  |
|------------------|-----------------------------------|------------------|-------------------|
| `fs.stat`        | Retrieves metadata about a file. | ❌               | ✅                |
| `fs.access`      | Checks file accessibility.       | ❌               | ✅                |

### Streams

| **Method**                | **Description**                    |
|---------------------------|------------------------------------|
| `fs.createReadStream`     | Reads a file as a stream.          |
| `fs.createWriteStream`    | Writes to a file as a stream.      |
