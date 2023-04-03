function infiniteN(n): any {
  this.value = n;
  this.next = () => infiniteN(n + 1);

  return this;
}

let infiniteSimulation = infiniteN(1);

infiniteSimulation.value;
infiniteSimulation.next();
infiniteSimulation.value;
infiniteSimulation.value;

// infiniteSimulation.value;
// infiniteSimulation = infiniteSimulation.next();
// infiniteSimulation.value;
