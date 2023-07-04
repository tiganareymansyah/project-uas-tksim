function priorityScheduling(processes) {
  // Sort the processes by priority.
  processes.sort((a, b) => a.priority - b.priority);

  // Initialize the waiting time array.
  let waitingTime = new Array(processes.length);
  for (let i = 0; i < processes.length; i++) {
    waitingTime[i] = 0;
  }

  // Calculate the waiting time for each process.
  for (let i = 1; i < processes.length; i++) {
    waitingTime[i] = waitingTime[i - 1] + processes[i - 1].burstTime;
  }

  // Calculate the turnaround time for each process.
  let turnaroundTime = new Array(processes.length);
  for (let i = 0; i < processes.length; i++) {
    turnaroundTime[i] = processes[i].burstTime + waitingTime[i];
  }

  // Print the waiting time and turnaround time for each process.
  const divPs = document.querySelector(".div-ps");

  const h2Ps = document.createElement("h2");
  h2Ps.textContent = "Priority Scheduling";
  divPs.appendChild(h2Ps);

  const tablePs = document.createElement("table");

  const theadPs = document.createElement("thead");

  const trPs = document.createElement("tr");

  const thPs = document.createElement("th");
  thPs.textContent = "Proses";
  trPs.appendChild(thPs);

  const thPs_1 = document.createElement("th");
  thPs_1.textContent = "Waiting time";
  trPs.appendChild(thPs_1);

  const thPs_2 = document.createElement("th");
  thPs_2.textContent = "Turnaround time";
  trPs.appendChild(thPs_2);

  theadPs.appendChild(trPs);

  tablePs.appendChild(theadPs);

  const tbodyPs = document.createElement("tbody");
  
  for (let i = 0; i < processes.length; i++) {
    // console.log(
    //   `Process ${processes[i].pid}: Waiting time = ${waitingTime[i]}, Turnaround time = ${turnaroundTime[i]}`
    // );

    const trPs1 = document.createElement("tr");

    const tdPs = document.createElement("td");
    tdPs.textContent = `Process ${processes[i].pid}`;
    trPs1.appendChild(tdPs);

    const tdPs_1 = document.createElement("td");
    tdPs_1.textContent = waitingTime[i];
    trPs1.appendChild(tdPs_1);

    const tdPs_2 = document.createElement("td");
    tdPs_2.textContent = turnaroundTime[i];
    trPs1.appendChild(tdPs_2);

    tbodyPs.appendChild(trPs1);
    tablePs.appendChild(tbodyPs);
  }

  divPs.appendChild(tablePs);
}

// Create the processes.
const processes = [
  { pid: 1, burstTime: 10, priority: 1 },
  { pid: 2, burstTime: 5, priority: 2 },
  { pid: 3, burstTime: 15, priority: 3 },
  { pid: 4, burstTime: 20, priority: 4 },
];

// Run the priority scheduling algorithm.
priorityScheduling(processes);
