function shortestJobFirst(processes) {
  // Initialize the waiting time array.
  let waitingTime = new Array(processes.length);
  for (let i = 0; i < processes.length; i++) {
    waitingTime[i] = 0;
  }

  // Sort the processes by burst time.
  processes.sort((a, b) => a.burstTime - b.burstTime);

  // Iterate through the processes and calculate the waiting time for each process.
  for (let i = 0; i < processes.length; i++) {
    if (i === 0) {
      waitingTime[i] = 0;
    } else {
      waitingTime[i] = waitingTime[i - 1] + processes[i - 1].burstTime;
    }
  }

  // Calculate the turnaround time for each process.
  let turnaroundTime = new Array(processes.length);
  for (let i = 0; i < processes.length; i++) {
    turnaroundTime[i] = processes[i].burstTime + waitingTime[i];
  }

  // Print the waiting time and turnaround time for each process.
  const divSjfs = document.querySelector(".div-sjfs");

  const h2Sjfs = document.createElement("h2");
  h2Sjfs.textContent = "Shortest Job First Scheduling";
  divSjfs.appendChild(h2Sjfs);

  const tableSjfs = document.createElement("table");

  const theadSjfs = document.createElement("thead");
  
  const trSjfs = document.createElement("tr");

  const thSfjs = document.createElement("th");
  thSfjs.textContent = "Proses";
  trSjfs.appendChild(thSfjs);

  const thSfjs_1 = document.createElement("th");
  thSfjs_1.textContent = "Waiting time";
  trSjfs.appendChild(thSfjs_1);

  const thSfjs_2 = document.createElement("th");
  thSfjs_2.textContent = "Turnaround time";
  trSjfs.appendChild(thSfjs_2);

  theadSjfs.appendChild(trSjfs);

  tableSjfs.appendChild(theadSjfs);

  const tbodySjfs = document.createElement("tbody");

  for (let i = 0; i < processes.length; i++) {
    // console.log(
    //   `Process ${processes[i].pid}: Waiting time = ${waitingTime[i]}, Turnaround time = ${turnaroundTime[i]}`
    // );

    const trSjfs1 = document.createElement("tr");

    const tdSjfs = document.createElement("td");
    tdSjfs.textContent = `Process ${processes[i].pid}`;
    trSjfs1.appendChild(tdSjfs);

    const tdSjfs_1 = document.createElement("td");
    tdSjfs_1.textContent = waitingTime[i];
    trSjfs1.appendChild(tdSjfs_1);

    const tdSjfs_2 = document.createElement("td");
    tdSjfs_2.textContent = turnaroundTime[i];
    trSjfs1.appendChild(tdSjfs_2);

    tbodySjfs.appendChild(trSjfs1);
    tableSjfs.appendChild(tbodySjfs);
  }

  divSjfs.appendChild(tableSjfs);
}

// Create the processes.
const processes = [
  { pid: 1, burstTime: 10 },
  { pid: 2, burstTime: 5 },
  { pid: 3, burstTime: 15 },
  { pid: 4, burstTime: 20 },
];

// Run the shortest job first algorithm.
shortestJobFirst(processes);
