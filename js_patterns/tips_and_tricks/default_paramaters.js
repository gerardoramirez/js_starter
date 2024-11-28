/**
 * Default parameters allow you to set default values for function arguments. This ensures that your function behaves predictably 
 * when called without certain parameters.
 * 
 * In this example, the greet function uses a default value of "Guest" for the name parameter. If no argument is passed, it falls 
 * back to the default. This is particularly useful for handling optional inputs, reducing the need for manual checks or fallback 
 * logic inside the function.
 * 
 * https://dev.to/hmpljs/10-javascript-tips-and-tricks-that-will-be-useful-47fa?context=digest
 * 
 */

function greet(name = "Guest") {
    return `Hello, ${name}!`;
  }
  
  console.log(greet()); // Output: Hello, Guest!
  console.log(greet("Alice")); // Output: Hello, Alice!