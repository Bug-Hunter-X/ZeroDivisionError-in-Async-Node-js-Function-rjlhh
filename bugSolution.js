```javascript
function myFunction(a, b) {
  return new Promise((resolve, reject) => {
    if (a === 0 || b === 0) {
      reject(new Error('Division by zero'));
    } else {
      resolve(a / b);
    }
  });
}

async function test() {
  try {
    const result = await myFunction(10, 0);
    console.log(result);
  } catch (error) {
    console.error('Error:', error.message);
  }
}

test();
```