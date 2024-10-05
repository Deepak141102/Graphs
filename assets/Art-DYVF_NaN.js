import{r as l,j as e}from"./react-CrH2Y09c.js";import{R as S,B as R}from"./react-chartjs-2-918-4fkP.js";import{C as A,h as F,g as E,f as Y,i as B,j as D,p as P,b as I}from"./chart.js-Dk_BFTjz.js";import{F as o,f as i}from"./@fortawesome-Cx_OkBxE.js";import"./d3-transition-DQcGIV9z.js";import"./d3-zoom-CGqEaysv.js";import"./highcharts-P7v8_iRx.js";import"./leaflet-PAZsyf-2.js";import"./@kurkle-BZxJdD1U.js";import"./prop-types-BDfckCb_.js";import"./d3-dispatch-kxCwF96_.js";import"./d3-timer-DdKHrDhs.js";import"./d3-interpolate-BbFwFWjk.js";import"./d3-color-9lF95FHy.js";import"./d3-selection-ChKSWf7Q.js";import"./d3-ease-DRPgKoYJ.js";A.register(F,E,Y,B,D,P,I);const X=()=>{const[n,h]=l.useState(2020),[d,u]=l.useState(2024),c={2020:[120,90,70,40],2021:[100,80,60,30],2022:[130,100,85,50],2023:[110,95,65,35],2024:[140,110,90,60]},g={labels:["20-25","26-30","31-35","36-40"],datasets:[{label:"No. of Applications",data:Object.keys(c).filter(t=>t>=n&&t<=d).map(t=>c[t]).reduce((t,C)=>t.map((k,w)=>k+C[w]),[0,0,0,0]),backgroundColor:["rgba(106, 0, 244, 0.8)","rgba(0, 183, 255, 0.8)","rgba(244, 67, 54, 0.8)","rgba(255, 193, 7, 0.8)"],borderColor:["rgba(106, 0, 244, 1)","rgba(0, 183, 255, 1)","rgba(244, 67, 54, 1)","rgba(255, 193, 7, 1)"],borderWidth:2,borderRadius:10}]},f={responsive:!0,plugins:{legend:{labels:{color:"#fff"}},title:{display:!0,text:"Chart-9 (Education*) - Scholarships by Age Group",color:"#fff",font:{size:18}}},scales:{x:{grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"#fff"}},y:{grid:{color:"rgba(255, 255, 255, 0.1)"},ticks:{color:"#fff"}}}},m=[2020,2021,2022,2023,2024],[p,j]=l.useState("All"),[x,b]=l.useState(!1),s={labels:["Creativity","Communication","Technical Skills","Teamwork","Problem Solving"],datasets:[{label:"Gujarat",data:[80,70,90,85,75],backgroundColor:"rgba(255, 99, 132, 0.2)",borderColor:"rgba(255, 99, 132, 1)",borderWidth:2,pointBackgroundColor:"rgba(255, 99, 132, 1)"},{label:"Karnataka",data:[70,90,80,75,85],backgroundColor:"rgba(54, 162, 235, 0.2)",borderColor:"rgba(54, 162, 235, 1)",borderWidth:2,pointBackgroundColor:"rgba(54, 162, 235, 1)"},{label:"Maharashtra",data:[60,80,75,90,85],backgroundColor:"rgba(75, 192, 192, 0.2)",borderColor:"rgba(75, 192, 192, 1)",borderWidth:2,pointBackgroundColor:"rgba(75, 192, 192, 1)"}]},v=p==="All"?s.datasets:s.datasets.filter(a=>a.label===p),y={labels:s.labels,datasets:v},N={responsive:!0,maintainAspectRatio:!1,animation:{tension:{duration:1e3,easing:"easeInOutQuad",from:.5,to:1,loop:!0}},scales:{r:{beginAtZero:!0,ticks:{stepSize:10,color:"black"},grid:{color:"rgba(255, 255, 255, 0.1)"}}},plugins:{legend:{position:"top",labels:{color:"white"}},title:{display:!0,text:"Skills Comparison",font:{size:24,weight:"bold",color:"white"}},tooltip:{callbacks:{label:function(a){return`${a.dataset.label}: ${a.parsed.r}`}},backgroundColor:"rgba(0, 0, 0, 0.8)",titleColor:"white",bodyColor:"white"}}},r=a=>{j(a),b(!1)};return e.jsx(e.Fragment,{children:e.jsx("div",{className:" bg-frameImg bg-no-repeat bg-fixed bg-cover bg-bottom",children:e.jsxs("div",{className:" bg-black bg-opacity-75 text-white py-8 px-12 max-md:p-0  ",children:[e.jsx("div",{className:"flex text-4xl p-4 ",children:e.jsxs("h1",{className:"max-md:text-center max-md:text-2xl",children:[e.jsx("span",{className:"text-yellow-400 pl-4",children:"Protsahan"}),"-For a Better Future | Data Visualization (map 6)"]})}),e.jsxs("div",{className:"bg-black py-11 max-p-0 rounded-lg bg-opacity-60",children:[e.jsxs("div",{className:"border-[2px] border-dashed border-white rounded-md p-5 m-5",children:[e.jsxs("div",{className:"flex justify-around flex-wrap",children:[e.jsxs("div",{className:"flex",children:[e.jsx("span",{className:"text-yellow-300",children:"Timeline:"}),e.jsx("p",{children:"Child entering Protsahan"})]}),e.jsx("div",{className:"flex flex-wrap max-md:flex-col max-md:m-auto",children:e.jsxs("p",{className:"max-sm:text-center",children:[e.jsx("span",{className:"text-yellow-300",children:"Potential Consumers:"}),"Protsahan Executive Team | Governmental Bodies"]})})]}),e.jsx("div",{className:"text-center p-4",children:e.jsx("p",{children:"These set of data visualisations paints a story of the enrolment data of students on a specified date range/ month/ year. It tells the user – how many children have enrolled in Protsahan, basic data related to the pool of children etc."})})]}),e.jsxs("div",{className:"flex items-center ml-10 mt-9 max-md:justify-end mr-10 relative left-10 max-md:left-0  top-14",children:[e.jsx(o,{icon:i,className:"text-purple-400 text-lg cursor-pointer mr-2 hover:text-purple-600 transition-all duration-300 max-md:text-2xl",onClick:()=>b(!x)}),x&&e.jsx("div",{className:"absolute left-6 top-8 mt-2 bg-black bg-opacity-80 border border-purple-500 shadow-lg rounded-md z-10 w-48 transition-all duration-500 ease-in-out transform",children:e.jsxs("ul",{className:"py-2 text-white",children:[e.jsx("li",{className:"px-4 py-2 hover:bg-purple-700 cursor-pointer",onClick:()=>r("All"),children:"All"}),e.jsx("li",{className:"px-4 py-2 hover:bg-purple-700 cursor-pointer",onClick:()=>r("Gujarat"),children:"Gujarat"}),e.jsx("li",{className:"px-4 py-2 hover:bg-purple-700 cursor-pointer",onClick:()=>r("Karnataka"),children:"Karnataka"}),e.jsx("li",{className:"px-4 py-2 hover:bg-purple-700 cursor-pointer",onClick:()=>r("Maharashtra"),children:"Maharashtra"})]})})]}),e.jsxs("div",{className:"flex flex-wrap items-center",children:[e.jsx("div",{className:"h-[60vh] w-1/2 max-md:w-full justify-center items-center",children:e.jsx(S,{data:y,options:N})}),e.jsxs("div",{className:"w-1/2 max-md:w-full mt-9",children:[e.jsxs("div",{className:"filters flex justify-center flex-wrap max-md:gap-4 items-center mb-9",children:[e.jsxs("div",{style:{marginRight:"20px",display:"flex",alignItems:"center",color:"#fff",widows:"50%"},children:[e.jsx(o,{icon:i,style:{marginRight:"10px"}}),e.jsx("label",{className:"max-md:text-2xl",children:"Start Year:"}),e.jsx("select",{className:"ml-2 p-2 rounded-md border-none bg-[#131a48] text-[#fff] max-md:px-10 max-md:py-5 max-md:text-2xl",value:n,onChange:a=>h(Number(a.target.value)),children:m.map(a=>e.jsx("option",{value:a,children:a},a))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",color:"#fff"},children:[e.jsx(o,{icon:i,style:{marginRight:"10px"}}),e.jsx("label",{className:"max-md:text-2xl",children:"End Year:"}),e.jsx("select",{className:"ml-2 p-2 rounded-md border-none bg-[#131a48] text-[#fff] max-md:px-10 max-md:py-5 max-md:text-2xl",value:d,onChange:a=>u(Number(a.target.value)),children:m.map(a=>e.jsx("option",{value:a,children:a},a))})]})]}),e.jsx(R,{data:g,options:f})]})]})]})]})})})};export{X as default};
