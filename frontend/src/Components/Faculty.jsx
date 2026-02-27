import React from "react";

import img from "../../Image/Touch.png";

function Faculty() {

const data = [

{
name:"Muhammad Anjum",
post:"Senior Lecturer",
desc:"Specialist in Full-Stack Development",
image:img
},

{
name:"Yaseen",
post:"Senior Lecturer",
desc:"Expert in Graphic Designing",
image:img
},

{
name:"Inam",
post:"Senior Lecturer",
desc:"Python Programming Expert",
image:img
},

{
name:"Tajwar",
post:"Senior Lecturer",
desc:"Web Development Teacher",
image:img
},

{
name:"Najmul",
post:"Senior Lecturer",
desc:"Database Expert",
image:img
},

{
name:"Baktawar Shaheen",
post:"Senior Lecturer",
desc:"Networking Expert",
image:img
}

]

return(

<div className="bg-gray-100 min-h-screen">


{/* Top Section */}

<div className="bg-blue-900 text-white text-center p-10">

<h1 className="text-3xl font-bold">

FACULTY & STAFF

</h1>


<p>

Meet Our IT Teachers

</p>


</div>



{/* Cards Section */}


<div className="p-10">


<h1 className="text-2xl font-bold text-center mb-10">

Our IT Faculty

</h1>



<div className="grid md:grid-cols-3 gap-10">


{
data.map((item,index)=>{

return(

<div
key={index}
className="bg-white shadow rounded-xl p-5 text-center"
>


<img
src={item.image}
className="w-full h-60 object-cover rounded-lg"
/>



<h1 className="text-xl font-bold mt-3">

{item.name}

</h1>



<p className="text-gray-500">

{item.post}

</p>



<div className="border p-3 mt-3 rounded">

{item.desc}

</div>


</div>

)

})

}



</div>


</div>


</div>

)

}

export default Faculty