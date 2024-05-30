// const Demo = () => {
//     return (

//         <div>
//             <h1>Demo page</h1>
//             <p>This is a demo page</p>
//         </div>
//     )
// }
// export default Demo;
// const Demo = () => {
//     return (
//         <div>
//         <h1>Demo page
//             <p>This is a demom page</p>
//         </h1>
//         </div>
//     )
// }
// const Demo = () => {
//     return (
//         <div>
//             <h1>Demo pge</h1>
//         <p>This is a demo page</p>

        
//         </div>
//     )
// }
// export default Demo:
// const Demo = () => {
//     return (
//          <div>
//             <h1>Demo page</h1>
//             <p>This is a demo page</p>

//          </div>
//     )
// }
// export default Demo;
const Demo = (props) => {
    console.log(props);
    let sortedNums = props.list.sort((a, b) => a - b)
 return (
    <div>
        <h1>Demo page</h1>
 <p>{props.text}</p>
 <p>{sortedNums}</p>
    </div>
 )
}
export default Demo;