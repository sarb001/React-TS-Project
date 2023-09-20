

// One way of Structuring the Data from Other Components  

// const Box = ({heading} : {heading : string}) => {
//   return (
//     <div>
//         <h3> {heading} </h3>
//     </div>
//   )
// }

// export default Box

// ** Other way is - For Large Props More than 1 

type PropsType = {
    heading : string,
    addnumber: number,
}

const Box = ({heading , addnumber } : PropsType) => {
  return (
    <div>
        <h3> {heading} </h3>
        <h3> {addnumber} </h3>
    </div>
  )
}

export default Box