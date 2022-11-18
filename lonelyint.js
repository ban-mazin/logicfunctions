function lonelyinteger(a) {
  // Write your code here
for (let i = 0; i < a.length; i++) {
          const count = a.filter((v) => v === a[i]).length;
          if (count === 1) {
              console.log(a[i]);
              return a[i];
          }
      }
}
lonelyinteger([1, 2, 3, 4, 3, 2, 1]);