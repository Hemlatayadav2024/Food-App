// let array = [0,1,0,3,12];
// let left = 0;
// let right = array.length-1;

// while(left<right){
//     if(array[left]=== 0) {
//         [array[left],array[right]] = [array[right], array[left]];
//         right--;
//     }else{
//         left++;
//     }
// }

// console.log(array);


// let nums = [0,1,0,3,12]
// var moveZeroes = function(nums) {
//     let left = 0;
//     let right = nums.length-1;

//     while(left<right){
//         if(nums[left]===0){
//         [nums[left],nums[right]] =[nums[right],nums[left]];
//         right--;
//     }else{
//         left++;
//     }
// }
// }
// moveZeroes(nums);
// console.log(nums);

let nums = [1,2,3,4,5,6,7]
for(let i=0,j=nums.length-1; i<Math.floor(nums.length/2);i++,j--){
    let temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
console.log(nums);