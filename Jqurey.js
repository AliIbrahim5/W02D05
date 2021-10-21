//1
const toDo = [{ name: "eat", isCompleted: false }];

//2 deleat

const deleat = (ele) => {
  toDo.splice(ele, 1);
  rinder();
};
//3updeat
const updeat = (ele) => {
    let input1 =$("#messa1").val();
  toDo[ele] = { name: input1, isCompleted: false };
  rinder();
  
};

//3 for loop
const rinder = () => {
  $("ul").html("");
  for (let index = 0; index < toDo.length; index++) {
    $("#list").append(     
      `<li> ${toDo[index].name}</li> 
      <button id="deleat${index}" >REMOVE</button> 
      <button id="updeat${index}">EDIT</button>`
    );
    $("#deleat" + index).click(() => {
      deleat(index);
      
    
    });
    $("#updeat" + index).click(() => {
      updeat(index);
    });
  }
};

// 

//3

const addToList = () => {
  let input = $("#messa1").val();
  const obj = { name: input, isCompleted: false };
  toDo.push(obj);
  rinder();
};

$("#but1").click(addToList);

// clear list

const remove = () => {
  toDo.length = 0;
  rinder();
};

$("#but2").click(remove);
