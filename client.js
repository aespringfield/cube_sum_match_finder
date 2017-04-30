function makeCubeList(a, comboArray = []) {
  if (a === 0) {
    console.log(comboArray);
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

function makeCubeListIter(x, cubeList = []) {
  if (x < 1) {
    return cubeList;
  } else {
    let cubeObj = {
      x: x,
      cube: x*x*x,
    };
    cubeList.push(cubeObj);
    x--;
    return makeCubeList(x, cubeList);
  }
}


function makeCubeSumList(cubeList) {
  let cubeSumList = [];
  for (let a = 0; a < cubeList.length; a++) {
    for (let b = 0; b < cubeList.length; b++) {
      let cubeSumObject = {
        a: cubeList[a].x,
        b: cubeList[b].x,
        sum: cubeList[a].cube + cubeList[b].cube
      };
      cubeSumList.push(cubeSumObject);
    }
  }
  return cubeSumList;
}

function comboFinder(x) {
  let cubeList = makeCubeList(x);
  cubeList.sort(comboSort);
  let sumsArray = showSums(cubeList);
  console.log(sumsArray);
  let matches = findMatchesIter(cubeList);
  return matches;
}

function comboSort(a, b) {
  return a.sum - b.sum;
}

function findMatches(i, cubeList, matches = []) {
  if (i === cubeList.length - 1) {
    return matches;
  }
  let currentObj = cubeList[i];
  i++;
  let matchArray = [];
  while (cubeList[i].sum == currentObj.sum) {
    matchArray.push(currentObj);
    matchArray.push(cubeList[i]);
    i++;
  }
  if (matchArray.length > 0) {
    matches.push(matchArray);
  }
  return findMatches(i, cubeList, matches);
}

function findMatchesIter(cubeList) {
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

function showSums(cubeList) {
  let sums = [];
  for (let i = 0; i < cubeList.length; i++) {
    sums.push(cubeList[i].sum);
  }
  return sums;
}


console.log(comboFinder(1000));
