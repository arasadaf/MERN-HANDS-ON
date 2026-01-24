// Merge cart with courses (get full course details)
let k = [];

for (let i = 0; i < cart.length; i++) {
  let item = cart[i];

  let course = courses.find(c => c.id === item.courseId);

  k.push({
    id: course.id,
    title: course.title,
    price: course.price,
    qty: item.qty
  });
}

console.log("k =", k);


// Calculate total cart amount
let l = 0;

for (let i = 0; i < k.length; i++) {
  l = l + (k[i].price * k[i].qty);
}

console.log("l =", l);


// Increase quantity immutably (courseId = 101)
let m = [];

for (let i = 0; i < cart.length; i++) {
  let item = cart[i];

  if (item.courseId === 101) {
    m.push({
      courseId: item.courseId,
      qty: item.qty + 1
    });
  } else {
    m.push(item);
  }
}

console.log("m =", m);


// Remove a course from cart (courseId = 103)
let n = [];

for (let i = 0; i < cart.length; i++) {
  if (cart[i].courseId !== 103) {
    n.push(cart[i]);
  }
}

console.log("n =", n);


// Check if all cart items are paid courses (price > 0)
let o = true;

for (let i = 0; i < k.length; i++) {
  if (k[i].price <= 0) {
    o = false;
    break;
  }
}

console.log("o =", o);
