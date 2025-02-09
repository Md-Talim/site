---
title: "My Own Shell in C++"
description: "A POSIX-compliant shell built from scratch"
repoURL: "https://github.com/md-talim/shell-cpp"
startedOn: "Dec 04 2024"
tags: ["C++", "Build Your Own X", "System Programming", "Shell Internels"]
---

_A POSIX-compliant shell built from scratch_

### 🔹 Overview

This project is a fully functional shell written in C++ as part of the _Build Your Own Shell_ challenge by CodeCrafters. It supports command execution, built-in commands, and a REPL (Read-Eval-Print Loop). The goal was to deepen my understanding of system programming, process management, and shell internals.

### 🚀 Features

✅ Command execution (runs external programs)

✅ Built-in commands: `cd`, `pwd`, `echo`, `type`, `exit`

✅ Command parsing and execution

✅ REPL (Read-Eval-Print Loop) for interactive shell experience

✅ Error handling and argument parsing

### 🔜 Planned Features:

- Output redirection (`>`, `<`, `|`)
- Autocompletion

### Tech Stack & Tools

- **Language:** C++
- **Build System:** CMake
- **Dependency Management:** vcpkg
- **Development Tools:** VS Code, g++, Clang

### Key Learnings

- **Process creation & management** using `fork()` and `execvp()`
- **File system operations** for commands like `cd` and `pwd`
- **Handling user input & tokenizing commands**
- **CMake for build automation**

### Project Structure

- `src/` - Source code of the shell
- `include/` - Header files
- `build/` - Compiled files
- `CMakeLists.txt` - Build configuration

### Why I Built This?

I wanted to gain hands-on experience with system programming and operating system concepts like process creation, file handling, and command execution. This project helped me understand how real-world shells work under the hood.

### Links

- **GitHub Repo:** [My Own Shell in C++](https://github.com/md-talim/shell-cpp)
- **Challenge:** [Build Your Own Shell – CodeCrafters](https://app.codecrafters.io/courses/shell/overview)
