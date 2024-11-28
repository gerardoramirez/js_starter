/**
 * 
 * Optional chaining ?. allows you to access deeply nested properties without worrying about 
 * errors if a property doesn’t exist. Instead of throwing an error, it returns undefined.
 * 
 * Traditional property access would require checks like if (user && user.profile). Optional 
 * chaining removes this hassle, ensuring your code doesn’t break if an intermediate property 
 * (settings in this case) is undefined or null. This makes it easier to work with unpredictable 
 * or incomplete data, especially from APIs.
 * 
 * https://dev.to/hmpljs/10-javascript-tips-and-tricks-that-will-be-useful-47fa?context=digest
 */


const user = { profile: { email: "user@example.com" } };

console.log(user?.profile?.email); // Output: user@example.com
console.log(user?.settings?.theme); // Output: undefined (no error)