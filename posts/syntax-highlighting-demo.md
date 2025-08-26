# Syntax Highlighting Demo

This post demonstrates the syntax highlighting capabilities of our blog with various programming languages.

## JavaScript Example

Here's a simple JavaScript function:

```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Usage example
console.log(`Fibonacci of 10: ${fibonacci(10)}`);
```

## Python Example

A Python class with methods:

```python
class Calculator:
    def __init__(self):
        self.history = []
    
    def add(self, a, b):
        result = a + b
        self.history.append(f"{a} + {b} = {result}")
        return result
    
    def get_history(self):
        return "\n".join(self.history)

# Create calculator instance
calc = Calculator()
print(calc.add(5, 3))
```

## CSS Example

Some CSS styling:

```css
.code-block {
    background-color: #f4f4f4;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 1rem;
    font-family: 'Courier New', monospace;
}

.highlight {
    background-color: yellow;
    transition: all 0.3s ease;
}
```

## HTML Example

Basic HTML structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sample Page</title>
</head>
<body>
    <h1>Welcome to my blog!</h1>
    <p>This is a paragraph with <strong>bold text</strong>.</p>
</body>
</html>
```

## Bash/Shell Example

Some command line operations:

```bash
#!/bin/bash

# Update package list
sudo apt update

# Install dependencies
sudo apt install -y nodejs npm git

# Clone repository
git clone https://github.com/user/repo.git
cd repo

# Install npm dependencies
npm install

# Run the application
npm start
```

## JSON Example

Configuration file:

```json
{
  "name": "my-project",
  "version": "1.0.0",
  "description": "A sample project",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "test": "jest",
    "build": "webpack --mode production"
  },
  "dependencies": {
    "express": "^4.18.0",
    "lodash": "^4.17.21"
  }
}
```

## Inline Code

You can also use `inline code` within sentences, like `console.log()` or `import React from 'react'`.

The syntax highlighting should work automatically for all these languages and more!
