// Use a for....in loop to list all properities of an object.

let student_id={
    name:"Sriram",
    fathers_name:"jayakumar",
    city:"chennai",
    phonenumber:"32456-76543",
    standard:"12th standard",
    function(){
       return(`${this.name} ${this.fathers_name} ${this.city} ${this.phonenumber} ${this.standard}`); 
    }
}
for(let key in student_id){
    console.log(`${key}:${student_id[key]}`);   
}
console.log(student_id.function());


// write a for....of loop to print each element of an array.

let  numbers=["for_loop","while_loop","do_while_loop","for_of_loop","for_in_loop"];
for(let arrays of numbers){
    console.log(`${arrays}`);
    
}