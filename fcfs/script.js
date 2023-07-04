document.formProses.onsubmit = (e) => {
  e.preventDefault();
  const proses = document.formProses.proses.value;

  const removeClass = document.querySelector(".div-form-fcfs");
  removeClass.classList.remove("div-form-fcfs");

  const divFormFcfs = document.querySelector("#div-form-fcfs");

  const divFormFcfs1 = document.createElement("div");
  divFormFcfs1.className = "div-form-fcfs1";

  const h2Fcfs1 = document.createElement("h2");
  h2Fcfs1.textContent = "First Come First Served Scheduling";
  divFormFcfs1.appendChild(h2Fcfs1);

  const formFcfs1 = document.createElement("form");
  formFcfs1.setAttribute("name", "formFcfs1");

  let tamp = [];
  for (let a = 1; a <= proses; a++) {
    const inputFcfs1 = document.createElement("input");
    inputFcfs1.type = "number";
    inputFcfs1.name = `proses${a}`;
    tamp.push(inputFcfs1.name);
    inputFcfs1.placeholder = `Proses ke - ${a}`;

    formFcfs1.appendChild(inputFcfs1);
  }

  const divButtonFcfs1 = document.createElement("div");
  divButtonFcfs1.className = "div-button-fcfs1";

  const buttonFcfs1 = document.createElement("button");
  buttonFcfs1.textContent = "Enter";
  divButtonFcfs1.appendChild(buttonFcfs1);

  formFcfs1.appendChild(divButtonFcfs1);
  divFormFcfs1.appendChild(formFcfs1);
  divFormFcfs.appendChild(divFormFcfs1);

  document.formFcfs1.onsubmit = (e) => {
    e.preventDefault();
    const removeClass1 = document.querySelector(".div-hasil-fcfs");
    removeClass1.classList.remove("div-hasil-fcfs");

    const divHasilFcfs = document.querySelector("#div-hasil-fcfs");

    const divHasilFcfs1 = document.createElement("div");
    divHasilFcfs1.className = "div-hasil-fcfs1";

    const h2Hasil = document.createElement("h2");
    h2Hasil.textContent = "Hasil";
    divHasilFcfs1.appendChild(h2Hasil);

    const tableFormHasilFcfs1 = document.createElement("table");

    const theadFormHasilFcfs1 = document.createElement("thead");

    const trFormHasilFcfs1 = document.createElement("tr");

    const thFormHasilFcfs1 = document.createElement("th");
    thFormHasilFcfs1.textContent = "Process";
    const thFormHasilFcfs1_1 = document.createElement("th");
    thFormHasilFcfs1_1.textContent = "Burst Time";
    trFormHasilFcfs1.appendChild(thFormHasilFcfs1);
    trFormHasilFcfs1.appendChild(thFormHasilFcfs1_1);
    theadFormHasilFcfs1.appendChild(trFormHasilFcfs1);
    tableFormHasilFcfs1.appendChild(theadFormHasilFcfs1);

    const tbodyFormHasilFcfs1 = document.createElement("tbody");

    let hasil = [];
    let count = 0;
    let average = 0;
    let x = 0;
    for (let a = 0; a < tamp.length; a++) {
      const trFormHasilFcfs1_1 = document.createElement("tr");

      const tdFormHasilFcfs1 = document.createElement("td");
      tdFormHasilFcfs1.textContent = tamp[a];
      trFormHasilFcfs1_1.appendChild(tdFormHasilFcfs1);

      const tdFormHasilFcfs1_1 = document.createElement("td");
      tdFormHasilFcfs1_1.textContent = document.formFcfs1[tamp[a]].value;
      count += parseInt(document.formFcfs1[tamp[a]].value);
      x++;
      if (x < tamp.length) {
        average += count;
      }

      hasil.push(count);
      trFormHasilFcfs1_1.appendChild(tdFormHasilFcfs1_1);

      tbodyFormHasilFcfs1.appendChild(trFormHasilFcfs1_1);
      tableFormHasilFcfs1.appendChild(tbodyFormHasilFcfs1);
    }

    const pFormHasilFcfs1 = document.createElement("p");
    pFormHasilFcfs1.className = "p-gant-chart";
    pFormHasilFcfs1.textContent = "Gant chart : 0 " + hasil.join(" ");

    const pFormHasilFcfs1_1 = document.createElement("p");
    pFormHasilFcfs1_1.className = "p-average";
    pFormHasilFcfs1_1.textContent =
      "Average time : (0 + " +
      hasil.slice(0, -1).join(" + ") +
      `) / ${hasil.length}` +
      ` = ${average / hasil.length}`;

    console.log(average);

    divHasilFcfs1.appendChild(tableFormHasilFcfs1);
    divHasilFcfs1.appendChild(pFormHasilFcfs1);
    divHasilFcfs1.appendChild(pFormHasilFcfs1_1);
    divHasilFcfs.appendChild(divHasilFcfs1);
  };
};
