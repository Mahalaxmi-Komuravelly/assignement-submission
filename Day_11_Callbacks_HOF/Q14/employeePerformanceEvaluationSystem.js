let employees = [

{ name: "Alice", tasksCompleted: 8, rating: 4.7 },

{ name: "Bob", tasksCompleted: 4, rating: 4.0 },

{ name: "Charlie", tasksCompleted: 6, rating: 3.5 },

{ name: "David", tasksCompleted: 10, rating: 4.9 },

{ name: "Eve", tasksCompleted: 7, rating: 2.8 }

];

let employeeMorethan5Tasks = employees.filter(emp => emp.tasksCompleted > 5);
//console.log(employeeMorethan5Tasks);
let employeePerformance = employeeMorethan5Tasks.map(
    ele => {
        if(ele.rating > 4.5){
            return {name:ele.name,performance:"Excellent",rating:ele.rating}
        }
        else if(ele.rating > 3 && ele.rating <= 4.5){
            return {name:ele.name,performance:"Good",rating:ele.rating}
        }
        else{
            return {name:ele.name,performance:"Needs Improvement",rating:ele.rating}
        }
    }
)
let priority ={
    "Excellent" : 3,
    "Good" : 2,
    "Needs Improvement" : 1
}


employeePerformance.sort((a,b)=> {
    let diff = priority[b.performance]-priority[a.performance];
    if(diff === 0){
       return b.rating - a.rating
    }
    else{
        return diff
    }
}
    
)
console.log(employeePerformance);