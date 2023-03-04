import stJson from './db.json' assert {type: 'json'};


let tbody = document.getElementById("sList")
// let tr = document.createElement("tr")


for(let i=0;i<stJson.length;i++){
    let tr = document.createElement("tr")
    let ntd =document.createElement("td");
    ntd.innerHTML = stJson[i].name;
    tr.appendChild(ntd)

    let rtd =document.createElement("td");
    rtd.innerHTML = stJson[i].roll;
    tr.appendChild(rtd)

    let retd =document.createElement("td");
    retd.innerHTML = stJson[i].reg;
    tr.appendChild(retd)

    let dtd =document.createElement("td");
    dtd.innerHTML = stJson[i].depertment;
    tr.appendChild(dtd)

    let std =document.createElement("td");
    std.innerHTML = stJson[i].Session;
    tr.appendChild(std)


    tbody.appendChild(tr)

}