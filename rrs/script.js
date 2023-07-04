function roundRobin(processes, quantum) {
  // Initialize the waiting time array.
  let waitingTime = new Array(processes.length);
  for (let i = 0; i < processes.length; i++) {
    waitingTime[i] = 0;
  }

  // Initialize the current process.
  let currentProcess = 0;

  // Iterate through the processes until they are all finished.
  while (processes.some((process) => process.burstTime > 0)) {
    // Execute the current process for the quantum time.
    processes[currentProcess].burstTime -= quantum;

    // If the current process is finished, move to the next process.
    if (processes[currentProcess].burstTime <= 0) {
      currentProcess = (currentProcess + 1) % processes.length;
    } else {
      // Otherwise, add the quantum time to the waiting time of the current process.
      waitingTime[currentProcess] += quantum;
    }
  }

  // Print the waiting time and turnaround time for each process.
  const divRrs = document.querySelector(".div-rrs");

  const h2Rrs = document.createElement("h2");
  h2Rrs.textContent = "Round Robin Scheduling";
  divRrs.appendChild(h2Rrs);

  const tableRrs = document.createElement("table");

  const theadRrs = document.createElement("thead");

  const trRrs = document.createElement("tr");

  const thRrs = document.createElement("th");
  thRrs.textContent = "Proses";
  trRrs.appendChild(thRrs);

  const thRrs_1 = document.createElement("th");
  thRrs_1.textContent = "Waiting time";
  trRrs.appendChild(thRrs_1);

  theadRrs.appendChild(trRrs);

  tableRrs.appendChild(theadRrs);

  const tbodyRrs = document.createElement("tbody");

  for (let i = 0; i < processes.length; i++) {
    // console.log(
    //   `Process ${processes[i].pid}: Waiting time = ${waitingTime[i]}`
    // );

    const trRrs1 = document.createElement("tr");

    const tdRrs = document.createElement("td");
    tdRrs.textContent = `Process ${processes[i].pid}`;
    trRrs1.appendChild(tdRrs);

    const tdRrs_1 = document.createElement("td");
    tdRrs_1.textContent = waitingTime[i];
    trRrs1.appendChild(tdRrs_1);

    tbodyRrs.appendChild(trRrs1);
    tableRrs.appendChild(tbodyRrs);
  }

  divRrs.appendChild(tableRrs);
}

// Create the processes.
const processes = [
  { pid: 1, burstTime: 10 },
  { pid: 2, burstTime: 5 },
  { pid: 3, burstTime: 15 },
  { pid: 4, burstTime: 20 },
];

// Run the round robin algorithm.
roundRobin(processes, 5);
