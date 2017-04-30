function comboFinder(x) {
  let cubeList = makeCubeList(x);
  cubeList.sort(comboSort);
  let matches = findMatches(cubeList);
  return matches;
}

function makeCubeList(a, comboArray = []) {
  if (a === 0) {
    return comboArray;
  } else {
    let b = a;
    while (b > 0) {
      let sum = (a*a*a) + (b*b*b);
      comboArray.push({
        sum: sum,
        a: a,
        b: b
      });
      b--;
    }
    a--;
    return makeCubeList(a, comboArray);
  }
}

function comboSort(a, b) {
  return a.sum - b.sum;
}

function findMatches(cubeList) {
  let matches = [];
  for (let i = 0; i < (cubeList.length - 1); i++) {
    let matchArray = [];
    let currentObj = cubeList[i];
    i++;
    while (currentObj.sum === cubeList[i].sum) {
      matchArray.push(currentObj);
      matchArray.push(cubeList[i]);
      i++;
    }
    if (matchArray.length > 0) {
      matches.push(matchArray);
    }
  }
  return matches;
}

console.log(comboFinder(1000));
