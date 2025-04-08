    // console.log(React);
// console.log(ReactDOM);

const myReactElement = React.createElement('div', {name: "munim"}, React.createElement('p', {nestedName: "abdul aziz"}, 'hello React Create Element'))

 const myJsxElement = (
     <div>
         <p>hello React Create Element</p>
     </div>
 );

const MyFirstFN = () => {
    return (
        <div>
            <p>hello React Create Element from Name: munim</p>
        </div>
    );
};
 console.log(MyFirstFN());

// console.log(myReactElement.props.name);

 //console.log(myReactElement);

ReactDOM.createRoot(document.getElementById("myDivRoot")).render(<MyFirstFN></MyFirstFN>);