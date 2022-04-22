let input = ["R5", "R4", "R2", "L3", "R1", "R1", "L4", "L5", "R3", "L1", "L1", "R4", "L2", "R1", "R4", "R4", "L2", "L2", "R4", "L4", "R1", "R3", "L3", "L1", "L2", "R1", "R5", "L5", "L1", "L1", "R3", "R5", "L1", "R4", "L5", "R5", "R1", "L185", "R4", "L1", "R51", "R3", "L2", "R78", "R1", "L4", "R188", "R1", "L5", "R5", "R2", "R3", "L5", "R3", "R4", "L1", "R2", "R2", "L4", "L4", "L5", "R5", "R4", "L4", "R2", "L5", "R2", "L1", "L4", "R4", "L4", "R2", "L3", "L4", "R2", "L3", "R3", "R2", "L2", "L3", "R4", "R3", "R1", "L4", "L2", "L5", "R4", "R4", "L1", "R1", "L5", "L1", "R3", "R1", "L2", "R1", "R1", "R3", "L4", "L1", "L3", "R2", "R4", "R2", "L2", "R1", "L5", "R3", "L3", "R3", "L1", "R4", "L3", "L3", "R4", "L2", "L1", "L3", "R2", "R3", "L2", "L1", "R4", "L3", "L5", "L2", "L4", "R1", "L4", "L4", "R3", "R5", "L4", "L1", "L1", "R4", "L2", "R5", "R1", "R1", "R2", "R1", "R5", "L1", "L3", "L5", "R2"]

let distances = [0, 0, 0, 0]
let newData = []

//parse data
function newArray(arr){
  arr.forEach(d => {
    let vals = [d[0], parseInt(d.substring(1))]
    newData.push(vals)
  })
}
 
let position = 0
// function for direction facing
function facing(arr){
  arr.forEach(i => {
    i[0] == 'R' ? position++ : position--
    let parsePos = position % 4
    move(parsePos, i)
  })
}

function move(pos, i){
  switch(pos){
    case(0):
      distances[0] += i[1]
      return
    case(1):
      distances[1] += i[1]
      return
    case(2):
      distances[2] += i[1]
      return
    case(3):
      distances[3] += i[1]
      return
  }
}