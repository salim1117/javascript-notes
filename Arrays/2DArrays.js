/*

let ar = [
    [1,2,3],
    [10,20,30],
    [100,200,300]
];

console.log(ar);


for (let i = 0 ; i<ar.length ; i++){
    for(let j = 0 ; j<ar[i].length ; j++){
        console.log(ar[i][j]);
    }
}

*/


//3d
let arr3d = [
    [
        [20, 55],
        [4, 67]
    ],
    [
        [22, 66],
        [55, 77]
    ]
];


for(let b = 0 ; b<arr3d.length ; b++){
    for(let f = 0 ; f<arr3d[b].length ; f++){
        for(let c = 0 ; c<arr3d[b][f].length ; c++){
            console.log(arr3d[b][f][c]);
        }
    }
}