# Streams in Node.js

**A Stream** in Node.js is a sequence of data chunks that are continuously transmitted over time. Instead of waiting for an entire resource to be loaded, streams process data piece by piece, enabling efficient handling of large files and real-time data.

## Why Use Streams?
- **High Performance:** Streams allow non-blocking I/O operations, making applications faster.
- **Memory Efficiency:** They process data in chunks, avoiding the need to load the entire resource into memory.
- **Event-Driven:** Streams operate based on events, making them easy to manage.

---
## 📜 Types of Streams

| Stream Type         | Description                                                                  | Example                 |
|---------------------|----------------------------------------------------------------------------|------------------------|
| **Readable Stream** | Used to read data from a source (e.g., files, HTTP requests).              | `fs.createReadStream()`|
| **Writable Stream** | Used to write data to a destination (e.g., files, HTTP responses).         | `fs.createWriteStream()`|
| **Duplex Stream**   | Supports both reading and writing (e.g., sockets).                         | `net.Socket`           |
| **Transform Stream**| Modifies or transforms data as it is read or written (e.g., compression).  | `zlib.createGzip()`    |

---
## ⚙️ Key Concepts of Streams

### 🟢 Chunked Data
- Streams process data in small, manageable chunks, reducing memory usage.

### 🟠 Asynchronous Processing
- Streams enable non-blocking I/O operations, ensuring the application remains responsive.

### 🔵 Event-Driven
- Streams emit events like:
  - **`data`**: Triggered when a chunk of data is available.
  - **`end`**: Triggered when no more data is available.
  - **`error`**: Triggered on an error.
  - **`finish`**: Triggered when all data has been flushed.

---

## 📂 Example Usages
- check the files

