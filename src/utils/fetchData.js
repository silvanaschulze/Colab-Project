import React, {useState, useEffect} from 'react';


const TestRender = () => {

    const [data, setData] = useState()

const fetchData = async () => {
    const res = await fetch('http://localhost:5000')
    const data = await res.json()
    setData(data)
}

useEffect(()=>{
  
    fetchData() 

})

console.log(data)

return (
    <div>
    hi there
    </div>
)

}
export default TestRender