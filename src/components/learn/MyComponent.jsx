// JSX: 1 parent
// fragment
import './style.css'

const MyComponent = () => {
    // const a = 'Eric2' // string
    // const a = 25 // number
    // const a = true // boolean
    // const a = undefined 
    // const a = null
    const a = [1,2,3]
    // const a = {
    //   name: "duy",
    //   age: 25
    // }

    return (
      <>
        <div>{JSON.stringify(a)} & Hoidanit update</div>
        <div>{console.log('ERIC')}</div>
        <div style={{borderRadius: "10px"}} className="child">Child</div>
      </>
    )
}

export default MyComponent